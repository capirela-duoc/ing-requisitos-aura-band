import React, { useState, useEffect, useRef } from 'react';
import { 
  BiometricTelemetry, 
  EmergencyContact, 
  CamouflageMode 
} from '../types';
import { 
  INITIAL_CONTACTS, 
  PROJECT_INFO 
} from '../data/projectData';
import { 
  Smartphone, 
  Sparkles, 
  Shield, 
  HeartPulse, 
  Zap, 
  Radio, 
  EyeOff, 
  MapPin, 
  Send, 
  AlertOctagon, 
  CheckCircle2, 
  RefreshCw, 
  CloudSun, 
  FileText, 
  ShieldAlert, 
  Vibrate, 
  Lock, 
  Share2, 
  Play, 
  RotateCcw,
  Sun,
  Droplets,
  Wind
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppViewProps {
  appImgSrc: string;
}

export const AppView: React.FC<AppViewProps> = ({ appImgSrc }) => {
  // Live Biometric Telemetry state
  const [telemetry, setTelemetry] = useState<BiometricTelemetry>({
    heartRate: 72,
    hrv: 78,
    gsr: 1.2,
    skinTemp: 36.4,
    stressIndex: 18,
    state: 'REPOSO',
    timestamp: new Date().toLocaleTimeString()
  });

  // Simulation states
  const [isSimulatingPanic, setIsSimulatingPanic] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(15);
  const [sosDispatched, setSosDispatched] = useState<boolean>(false);
  const [camouflageMode, setCamouflageMode] = useState<CamouflageMode>('none');
  const [contacts, setContacts] = useState<EmergencyContact[]>(INITIAL_CONTACTS);
  const [gpsCoords, setGpsCoords] = useState<{ lat: number; lng: number }>({
    lat: -33.4489,
    lng: -70.6693
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Periodic subtle biometric fluctuation when in normal mode
  useEffect(() => {
    if (isSimulatingPanic || sosDispatched) return;

    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const deltaHr = (Math.random() - 0.5) * 4;
        const deltaHrv = (Math.random() - 0.5) * 3;
        const deltaGsr = (Math.random() - 0.5) * 0.1;

        const newHr = Math.min(85, Math.max(62, Math.round(prev.heartRate + deltaHr)));
        const newHrv = Math.min(92, Math.max(65, Math.round(prev.hrv + deltaHrv)));
        const newGsr = parseFloat(Math.min(2.5, Math.max(0.8, prev.gsr + deltaGsr)).toFixed(2));

        return {
          heartRate: newHr,
          hrv: newHrv,
          gsr: newGsr,
          skinTemp: 36.4,
          stressIndex: Math.round(((100 - newHrv) * 0.4) + (newGsr * 15)),
          state: 'REPOSO',
          timestamp: new Date().toLocaleTimeString()
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isSimulatingPanic, sosDispatched]);

  // Countdown timer when panic is triggered
  useEffect(() => {
    if (isSimulatingPanic && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (isSimulatingPanic && countdown === 0) {
      // Countdown expired -> Dispatch SOS
      setIsSimulatingPanic(false);
      setSosDispatched(true);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isSimulatingPanic, countdown]);

  // Handler: Start simulated panic attack
  const handleTriggerPanicSimulation = () => {
    setSosDispatched(false);
    setIsSimulatingPanic(true);
    setCountdown(12);

    // Spiked telemetry
    setTelemetry({
      heartRate: 148,
      hrv: 18, // Colapso súbito de VRC
      gsr: 14.8, // Pico de conductancia por sudor de miedo
      skinTemp: 35.7,
      stressIndex: 96,
      state: 'PANICO_DETECTADO',
      timestamp: new Date().toLocaleTimeString()
    });
  };

  // Handler: Cancel SOS during countdown
  const handleCancelSOS = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsSimulatingPanic(false);
    setSosDispatched(false);
    setCountdown(15);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTelemetry({
      heartRate: 74,
      hrv: 75,
      gsr: 1.4,
      skinTemp: 36.4,
      stressIndex: 22,
      state: 'REPOSO',
      timestamp: new Date().toLocaleTimeString()
    });
  };

  // Handler: Reset simulator
  const handleResetSimulator = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsSimulatingPanic(false);
    setSosDispatched(false);
    setCountdown(15);
    setTelemetry({
      heartRate: 72,
      hrv: 78,
      gsr: 1.2,
      skinTemp: 36.4,
      stressIndex: 18,
      state: 'REPOSO',
      timestamp: new Date().toLocaleTimeString()
    });
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Referencia 2: Aplicación Móvil & Motor de IA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Aura Guardian Mobile App
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            La aplicación móvil actúa como el centro de inferencia local de la IA (Edge AI), procesa la telemetría del brazalete vía BLE, gestiona la verificación háptica silenciosa y ejecuta el Modo Incógnito de camuflaje.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <Radio className="w-4 h-4" /> BLE 5.3 Enlace Continuo
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Shield className="w-4 h-4" /> Cifrado E2EE AES-256
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <EyeOff className="w-4 h-4" /> Camuflaje de Pantalla Incógnito
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Visual Reference Image + Interactive Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: UI Mockup Reference Image Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Imagen Referencial de la App</span>
              <span className="text-[11px] font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                Diseño UI / UX
              </span>
            </div>

            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
              <img
                src={appImgSrc}
                alt="Aura Guardian Mobile App UI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              <div className="absolute inset-x-3 bottom-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 text-xs text-white">
                <div className="font-bold text-cyan-300">Interfaz de Monitoreo & SOS</div>
                <div className="text-[11px] text-slate-300">Curvas VRC, GSR en tiempo real y protocolo de cancelación</div>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center italic">
              Diseño de alto contraste y legibilidad optimizado para teléfonos OLED con bajo consumo de batería.
            </p>
          </div>
        </div>

        {/* Right Column: Live Interactive Smartphone Simulator */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-5">
            {/* Simulator Top Controls Bar */}
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-bold text-white">Simulador Interactivo de la App</span>
              </div>

              {/* Camouflage Toggle Switch */}
              <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 px-2 font-medium">Camuflaje:</span>
                <button
                  id="sim-cam-none"
                  onClick={() => setCamouflageMode('none')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    camouflageMode === 'none' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Seguridad (Real)
                </button>
                <button
                  id="sim-cam-weather"
                  onClick={() => setCamouflageMode('weather')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all ${
                    camouflageMode === 'weather' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <CloudSun className="w-3 h-3" /> Clima
                </button>
                <button
                  id="sim-cam-notes"
                  onClick={() => setCamouflageMode('notes')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all ${
                    camouflageMode === 'notes' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" /> Notas
                </button>
              </div>
            </div>

            {/* Simulated Phone Screen Container */}
            <div className="relative mx-auto max-w-sm rounded-[2.5rem] p-3 bg-slate-900 border-4 border-slate-800 shadow-2xl min-h-[580px] flex flex-col justify-between overflow-hidden">
              {/* Notch / Speaker bar */}
              <div className="w-28 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900" />
              </div>

              {/* SCREEN CONTENT BASED ON CAMOUFLAGE MODE */}
              {camouflageMode === 'weather' ? (
                /* CAMOUFLAGED WEATHER APP SCREEN */
                <div className="bg-gradient-to-b from-sky-700 via-sky-800 to-slate-900 rounded-3xl p-5 text-white flex-1 flex flex-col justify-between relative">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-sky-200">
                      <span className="font-semibold">Santiago, Chile</span>
                      <span>11:20 AM</span>
                    </div>

                    <div className="text-center py-4 space-y-1">
                      <Sun className="w-16 h-16 text-amber-300 mx-auto animate-spin-slow" />
                      <div className="text-5xl font-extrabold tracking-tight">22°C</div>
                      <div className="text-sm font-medium text-sky-200">Soleado y despejado</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-sky-900/50 backdrop-blur-md p-3 rounded-2xl border border-sky-600/30 text-center text-xs">
                      <div>
                        <Droplets className="w-4 h-4 text-sky-300 mx-auto mb-1" />
                        <div className="text-[10px] text-sky-300">Humedad</div>
                        <div className="font-bold">42%</div>
                      </div>
                      <div>
                        <Wind className="w-4 h-4 text-sky-300 mx-auto mb-1" />
                        <div className="text-[10px] text-sky-300">Viento</div>
                        <div className="font-bold">14 km/h</div>
                      </div>
                      <div>
                        <Sun className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                        <div className="text-[10px] text-sky-300">Índice UV</div>
                        <div className="font-bold">5 Moderado</div>
                      </div>
                    </div>
                  </div>

                  {/* Secret Emergency Indicator (Hidden from attacker) */}
                  <div className="pt-4 border-t border-sky-600/30 flex items-center justify-between text-[11px] text-sky-300">
                    <span className="flex items-center gap-1 text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" /> Aura Band Enlazada
                    </span>
                    <button 
                      onClick={() => setCamouflageMode('none')}
                      className="text-sky-300/60 hover:text-white underline text-[10px]"
                    >
                      (Modo Oculto Activo)
                    </button>
                  </div>
                </div>
              ) : camouflageMode === 'notes' ? (
                /* CAMOUFLAGED NOTES APP SCREEN */
                <div className="bg-slate-900 rounded-3xl p-5 text-slate-100 flex-1 flex flex-col justify-between border border-slate-800">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                      <span className="font-bold text-amber-400 flex items-center gap-1">
                        <FileText className="w-4 h-4" /> Notas Rápidas
                      </span>
                      <span>Editado hoy</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                        <div className="font-bold text-slate-200">Lista del Supermercado</div>
                        <div className="text-slate-400 text-[11px] mt-1">• Leche de almendras, café, manzanas, avena</div>
                      </div>
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                        <div className="font-bold text-slate-200">Ideas para Proyecto Universidad</div>
                        <div className="text-slate-400 text-[11px] mt-1">• Revisar bibliografía y preparar láminas de defensa</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-center">
                    <button 
                      onClick={() => setCamouflageMode('none')}
                      className="text-[10px] text-slate-500 hover:text-slate-300"
                    >
                      Toque tres veces para volver al panel de seguridad
                    </button>
                  </div>
                </div>
              ) : (
                /* REAL AURA GUARDIAN APP SCREEN */
                <div className="bg-slate-950 rounded-3xl p-4 text-white flex-1 flex flex-col justify-between border border-slate-800 space-y-3">
                  {/* App Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-teal-400" />
                      <span className="font-bold text-xs tracking-wide">Aura Guardian</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      BLE Conectado
                    </div>
                  </div>

                  {/* ACTIVE PANIC COUNTDOWN ALERT MODAL */}
                  {isSimulatingPanic ? (
                    <div className="bg-gradient-to-b from-rose-900/90 to-rose-950 p-4 rounded-2xl border-2 border-rose-500 shadow-2xl text-center space-y-3 animate-pulse">
                      <div className="w-10 h-10 rounded-full bg-rose-600/40 border border-rose-400 flex items-center justify-center mx-auto text-rose-300">
                        <Vibrate className="w-5 h-5 animate-bounce" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                          Protocolo Háptico en Curso
                        </div>
                        <div className="text-2xl font-black text-white mt-0.5">
                          00:{countdown < 10 ? `0${countdown}` : countdown}
                        </div>
                        <div className="text-[11px] text-rose-200 mt-1">
                          Vibración silenciosa en muñeca. Deslice o pulse para cancelar si fue falsa alarma.
                        </div>
                      </div>

                      <button
                        id="btn-cancel-sim-sos"
                        onClick={handleCancelSOS}
                        className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl text-xs shadow-lg transition-all"
                      >
                        ✓ Estoy a Salvo (Cancelar Alerta)
                      </button>
                    </div>
                  ) : sosDispatched ? (
                    /* SOS DISPATCHED SUCCESS STATE */
                    <div className="bg-rose-950/80 p-4 rounded-2xl border border-rose-500/80 space-y-2.5 text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto">
                        <AlertOctagon className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-rose-300 uppercase">
                        ¡Alerta SOS Disparada con Éxito!
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Se enviaron coordenadas GPS en tiempo real a los 3 contactos de confianza.
                      </div>
                      
                      <div className="bg-slate-900/90 p-2.5 rounded-xl text-[10px] text-slate-300 border border-slate-700 text-left space-y-1">
                        <div className="font-bold text-teal-300 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Coordenadas enviadas:
                        </div>
                        <div className="font-mono text-slate-400">Lat: -33.4489, Lng: -70.6693 (Precisión 3m)</div>
                      </div>

                      <button
                        onClick={handleResetSimulator}
                        className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" /> Reiniciar Simulación
                      </button>
                    </div>
                  ) : (
                    /* NORMAL BIOMETRICS TELEMETRY DASHBOARD */
                    <div className="space-y-2.5">
                      <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 font-semibold">Diagnóstico IA</span>
                          <span className="text-[11px] font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
                            {telemetry.state}
                          </span>
                        </div>

                        {/* 4 telemetry metric cells */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-950 p-2 rounded-xl border border-slate-800/80">
                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                              <span>Ritmo (HR)</span>
                              <HeartPulse className="w-3 h-3 text-rose-400" />
                            </div>
                            <div className="text-sm font-bold text-white mt-0.5">{telemetry.heartRate} bpm</div>
                          </div>

                          <div className="bg-slate-950 p-2 rounded-xl border border-slate-800/80">
                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                              <span>Variabilidad (VRC)</span>
                              <Zap className="w-3 h-3 text-teal-400" />
                            </div>
                            <div className="text-sm font-bold text-teal-300 mt-0.5">{telemetry.hrv} ms</div>
                          </div>

                          <div className="bg-slate-950 p-2 rounded-xl border border-slate-800/80">
                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                              <span>GSR (Sudor)</span>
                              <Droplets className="w-3 h-3 text-amber-400" />
                            </div>
                            <div className="text-sm font-bold text-amber-300 mt-0.5">{telemetry.gsr} µS</div>
                          </div>

                          <div className="bg-slate-950 p-2 rounded-xl border border-slate-800/80">
                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                              <span>Estrés IA</span>
                              <Shield className="w-3 h-3 text-cyan-400" />
                            </div>
                            <div className="text-sm font-bold text-cyan-300 mt-0.5">{telemetry.stressIndex}%</div>
                          </div>
                        </div>
                      </div>

                      {/* Contact network summary */}
                      <div className="bg-slate-900/70 p-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1">
                        <div className="font-semibold text-slate-300 flex items-center justify-between">
                          <span>Red SOS (3 Contactos Listos)</span>
                          <span className="text-[10px] text-teal-400 font-bold">Activo</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          Carmen R. (WhatsApp) · Alejandro M. (SMS) · Sofía T. (Push)
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Manual Test Action Trigger */}
                  <div className="pt-2">
                    {!isSimulatingPanic && !sosDispatched && (
                      <button
                        id="btn-simulate-panic"
                        onClick={handleTriggerPanicSimulation}
                        className="w-full py-2.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" /> Simular Detección de Pánico IA
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-slate-800 rounded-full mx-auto mt-2" />
            </div>

            {/* Explanatory notes below simulator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-400 border-t border-slate-800">
              <div className="space-y-1">
                <span className="font-bold text-slate-200">Inferencia Edge AI:</span>
                <p>El procesamiento de los datos biométricos ocurre 100% en el teléfono para garantizar latencia de sub-segundos y cero dependencia de internet para la detección.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-200">Privacidad y Camuflaje:</span>
                <p>Los datos están protegidos por enclaves seguros con cifrado AES-256. El botón de camuflaje previene que agresores descubran la red de protección.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notification Preview Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">RF-04 · Derivación Multiplataforma</span>
            <h2 className="text-lg font-bold text-slate-900">Vista Previa del Mensaje de Auxilio que Reciben los Contactos</h2>
          </div>
          <span className="text-xs text-slate-500">Envío simultáneo a 3 destinatarios</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((c) => (
            <div key={c.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{c.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  c.notifyVia === 'WhatsApp' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : c.notifyVia === 'SMS' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-purple-100 text-purple-800'
                }`}>
                  {c.notifyVia}
                </span>
              </div>

              {/* Message Bubble Simulation */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-2 shadow-sm">
                <div className="font-bold text-rose-600 flex items-center gap-1">
                  <AlertOctagon className="w-3.5 h-3.5" /> ALERTA SOS AURA BAND
                </div>
                <p className="text-slate-700 leading-snug">
                  "Se ha detectado una situación de pánico agudo. Requiere auxilio inmediato en:"
                </p>
                <div className="bg-slate-50 p-2 rounded-lg text-[11px] font-mono text-teal-700 break-all">
                  https://aura.guard/track?id=9a8b7c&lat=-33.4489&lng=-70.6693
                </div>
                <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                  <span>GPS Precisión: 3m</span>
                  <span>Enviado automáticamente</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
