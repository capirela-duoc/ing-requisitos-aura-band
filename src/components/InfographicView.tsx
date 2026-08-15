import React, { useState } from 'react';
import { 
  PROJECT_INFO, 
  PROBLEM_PILLARS, 
  HARDWARE_HOTSPOTS, 
  AI_DETECTION_MATRIX, 
  PROTOCOL_STEPS, 
  REQUIREMENTS_DATA, 
  DEFENSE_ADVANTAGES 
} from '../data/projectData';
import { 
  Shield, 
  Sparkles, 
  AlertTriangle, 
  Brain, 
  HeartPulse, 
  Zap, 
  Radio, 
  EyeOff, 
  Waves, 
  FileCheck2, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Info,
  Clock,
  BatteryCharging,
  Cpu,
  Vibrate,
  Lock,
  Compass
} from 'lucide-react';

interface InfographicViewProps {
  onSelectTab: (tab: 'bracelet' | 'app' | 'presentation') => void;
  braceletImgSrc: string;
  appImgSrc: string;
}

export const InfographicView: React.FC<InfographicViewProps> = ({
  onSelectTab,
  braceletImgSrc,
  appImgSrc
}) => {
  const [selectedReqFilter, setSelectedReqFilter] = useState<'ALL' | 'RF' | 'RNF' | 'RDO'>('ALL');
  const [activeMatrixState, setActiveMatrixState] = useState<number>(2); // Default to Panic
  const [activeStep, setActiveStep] = useState<number>(3);

  const filteredRequirements = selectedReqFilter === 'ALL' 
    ? REQUIREMENTS_DATA 
    : REQUIREMENTS_DATA.filter(r => r.type === selectedReqFilter);

  return (
    <div className="space-y-12 pb-16 print:space-y-6 print:pb-0">
      {/* Hero Infographic Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-teal-950 border border-teal-500/20 p-6 sm:p-10 shadow-2xl text-white">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Infografía Explicativa del Proyecto</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
              {PROJECT_INFO.commercialName}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {PROJECT_INFO.vision}
            </p>

            {/* Quick highlight metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                <div className="text-xs text-slate-400 font-medium">Diseño</div>
                <div className="text-sm font-bold text-teal-300 flex items-center gap-1 mt-0.5">
                  <EyeOff className="w-3.5 h-3.5 text-teal-400" />
                  100% Mimetizado
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Sin pantallas delatoras</div>
              </div>

              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                <div className="text-xs text-slate-400 font-medium">Material Sostenible</div>
                <div className="text-sm font-bold text-cyan-300 flex items-center gap-1 mt-0.5">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  Alianza 4ocean
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Plástico marino reciclado</div>
              </div>

              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                <div className="text-xs text-slate-400 font-medium">Inteligencia Artificial</div>
                <div className="text-sm font-bold text-emerald-300 flex items-center gap-1 mt-0.5">
                  <Brain className="w-3.5 h-3.5 text-emerald-400" />
                  Biometría VRC + GSR
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Detección de pánico</div>
              </div>

              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
                <div className="text-xs text-slate-400 font-medium">Autonomía</div>
                <div className="text-sm font-bold text-amber-300 flex items-center gap-1 mt-0.5">
                  <BatteryCharging className="w-3.5 h-3.5 text-amber-400" />
                  7+ Días continuos
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Carga magnética IP68</div>
              </div>
            </div>
          </div>

          {/* Side preview cards */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div 
              onClick={() => onSelectTab('bracelet')}
              className="group cursor-pointer bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-3 border border-teal-500/30 hover:border-teal-400 transition-all flex items-center gap-3 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-700">
                <img 
                  src={braceletImgSrc} 
                  alt="Aura Band Hardware" 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-teal-300 flex items-center gap-1">
                  Ver Referencia Brazalete <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white truncate">Cuerda 4ocean & Cápsula</div>
                <div className="text-xs text-slate-400 truncate">Sensores PPG, GSR y Háptico</div>
              </div>
            </div>

            <div 
              onClick={() => onSelectTab('app')}
              className="group cursor-pointer bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-3 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center gap-3 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-700">
                <img 
                  src={appImgSrc} 
                  alt="Aura App UI" 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                  Ver Referencia App Móvil <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white truncate">App Aura Guardian & IA</div>
                <div className="text-xs text-slate-400 truncate">Telemetría, Alerta SOS y Camuflaje</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: EL PROBLEMA REAL */}
      <section id="section-problem" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">01 · Diagnóstico y Necesidad</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">El Problema: La Falacia de los Dispositivos Tradicionales</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Por qué fallan los métodos actuales</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-teal-600">{pillar.stat}</span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-slate-100 text-slate-700">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  Consecuencia en Situación Real:
                </div>
                <p className="text-xs text-slate-600 mt-1">{pillar.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: LA SOLUCIÓN - HARDWARE Y ALIANZA SOSTENIBLE */}
      <section id="section-solution-hardware" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">02 · Diseño y Materiales</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">La Solución: Hardware Mimetizado & Alianza 4ocean</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Brazalete Pasivo de Triple Impacto</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-5 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-700/60 group">
              <img 
                src={braceletImgSrc} 
                alt="Aura Band 4ocean Guardian" 
                referrerPolicy="no-referrer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-teal-300">Aura Band / 4ocean Guardian</div>
                  <div className="text-[11px] text-slate-300">Cero pantallas · Cero LEDs visibles</div>
                </div>
                <button 
                  onClick={() => onSelectTab('bracelet')}
                  className="px-2.5 py-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-[11px] transition-colors flex items-center gap-1"
                >
                  Explorar 3D <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="p-2 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold">
                <Waves className="w-4 h-4" /> Alianza Ecológica con 4ocean
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Elaborado con cordones de plástico marino 100% reciclado recogido en costas y océanos. Su apariencia imita una pulsera artesanal o surfista común, haciendo imposible que un agresor sospeche que es un dispositivo de seguridad.
              </p>
            </div>
          </div>

          {/* Hardware Components Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HARDWARE_HOTSPOTS.map((hotspot) => {
              const IconComponent = 
                hotspot.icon === 'Waves' ? Waves :
                hotspot.icon === 'HeartPulse' ? HeartPulse :
                hotspot.icon === 'Zap' ? Zap :
                hotspot.icon === 'Vibrate' ? Vibrate :
                hotspot.icon === 'Cpu' ? Cpu : BatteryCharging;

              return (
                <div 
                  key={hotspot.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-teal-500/50 hover:shadow-md transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {hotspot.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">{hotspot.title}</h3>
                  <p className="text-xs text-slate-600 leading-snug">{hotspot.description}</p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {hotspot.specs.map((spec, i) => (
                      <span key={i} className="text-[10px] bg-slate-50 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200/60 font-mono">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: EL CEREBRO IA - CÓMO DIFERENCIA PÁNICO DE EJERCICIO */}
      <section id="section-ai-brain" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">03 · Inteligencia Artificial Biométrica</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">El Cerebro del Sistema: Algoritmo de Detección de Pánico</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Inferencia Local Edge AI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 border border-slate-800">
              <div className="flex items-center space-x-2 text-teal-400 font-bold text-sm">
                <Brain className="w-5 h-5" />
                <span>¿Por qué no genera falsas alarmas?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Un reloj normal solo mide el pulso, disparando alertas erróneas al correr o subir escaleras. La IA de Aura Band analiza la <strong>firma biométrica multivariable</strong> en tiempo real:
              </p>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <HeartPulse className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">VRC (Variabilidad Cardíaca):</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">En ejercicio el VRC baja gradualmente; en pánico ocurre un colapso brusco autonómico en &lt;4s.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">GSR (Conductancia Galvánica):</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">El sudor por miedo activa glándulas ecrinas palmares en milisegundos sin aumento de temperatura corporal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white">Calibración de Reposo Personalizada:</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Aprende los umbrales de cada usuaria para eliminar falsos positivos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive State Matrix */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-base font-bold text-slate-900">Matriz Comparativa de Estados Fisiológicos</h3>
              <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
                {AI_DETECTION_MATRIX.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMatrixState(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeMatrixState === idx
                        ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.state.split('/')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Matrix State Display */}
            {(() => {
              const current = AI_DETECTION_MATRIX[activeMatrixState];
              const isPanic = activeMatrixState === 2;
              return (
                <div className={`p-5 rounded-2xl border transition-all ${
                  isPanic 
                    ? 'bg-rose-50/70 border-rose-200' 
                    : activeMatrixState === 1 
                      ? 'bg-blue-50/70 border-blue-200' 
                      : 'bg-emerald-50/70 border-emerald-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${
                        isPanic ? 'bg-rose-500 animate-ping' : activeMatrixState === 1 ? 'bg-blue-500' : 'bg-emerald-500'
                      }`} />
                      <span className="font-bold text-slate-900 text-lg">{current.state}</span>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isPanic ? 'bg-rose-600 text-white shadow-sm' : 'bg-slate-200/80 text-slate-700'
                    }`}>
                      {current.aiDiagnosis}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-semibold">Ritmo Cardíaco (HR)</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{current.hr}</div>
                    </div>

                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-semibold">Variabilidad (VRC)</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{current.hrv}</div>
                    </div>

                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-semibold">Conductancia (GSR)</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{current.gsr}</div>
                    </div>

                    <div className="bg-white/90 p-3 rounded-xl border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-semibold">Temperatura Dermis</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{current.temp}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 p-3 rounded-xl border border-slate-200">
                    <div className="text-xs font-semibold text-slate-700">
                      Respuesta del Sistema Aura:
                    </div>
                    <div className={`text-xs font-bold ${isPanic ? 'text-rose-600 animate-pulse' : 'text-slate-700'}`}>
                      {current.action}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Table overview */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                    <th className="py-2 px-3">Estado Fisiológico</th>
                    <th className="py-2 px-3">Pulso (HR)</th>
                    <th className="py-2 px-3">VRC</th>
                    <th className="py-2 px-3">GSR (Sudor)</th>
                    <th className="py-2 px-3">Diagnóstico IA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {AI_DETECTION_MATRIX.map((row, i) => (
                    <tr 
                      key={i} 
                      onClick={() => setActiveMatrixState(i)}
                      className={`cursor-pointer transition-colors ${
                        activeMatrixState === i ? 'bg-teal-50/80 font-medium' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{row.state}</td>
                      <td className="py-2.5 px-3">{row.hr}</td>
                      <td className="py-2.5 px-3">{row.hrv}</td>
                      <td className="py-2.5 px-3">{row.gsr}</td>
                      <td className="py-2.5 px-3 font-bold text-slate-800">{row.aiDiagnosis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: PROTOCOLO DE AUXILIO EN 5 FASES */}
      <section id="section-protocol" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">04 · Flujo Operacional de Emergencia</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Protocolo de Auxilio Automatizado y Confirmación Discreta</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Secuencia de 5 Pasos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {PROTOCOL_STEPS.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <div 
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`cursor-pointer rounded-2xl p-4 border transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 text-white border-teal-400 shadow-lg scale-[1.02]' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${
                      isSelected ? 'bg-teal-400 text-slate-950' : 'bg-slate-100 text-slate-800'
                    }`}>
                      0{step.step}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-slate-800 text-teal-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.timing}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/40">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                    isSelected ? 'text-teal-300' : 'text-teal-600'
                  }`}>
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Camouflage Mode Callout */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <EyeOff className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Función Especial: Modo Incógnito (Camuflaje Visual)</div>
              <div className="text-xs text-slate-300 mt-0.5">
                Si un agresor obliga a la víctima a desbloquear su teléfono, la aplicación se camufla como una app inofensiva de Clima o Bloc de Notas sin revelar rastreadores de seguridad.
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTab('app')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            Probar Camuflaje en Simulador <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* SECCIÓN 5: CLASIFICACIÓN DE REQUISITOS (RF, RNF, RDO) */}
      <section id="section-requirements" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">05 · Marco de Ingeniería</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Clasificación de Requisitos para Asignatura</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
            {(['ALL', 'RF', 'RNF', 'RDO'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedReqFilter(filter)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedReqFilter === filter
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter === 'ALL' ? 'Todos (9)' : filter === 'RF' ? 'Funcionales (4)' : filter === 'RNF' ? 'No Funcionales (3)' : 'Dominio (2)'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRequirements.map((req) => (
            <div 
              key={req.code}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                    req.type === 'RF' 
                      ? 'bg-blue-100 text-blue-800' 
                      : req.type === 'RNF' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-amber-100 text-amber-800'
                  }`}>
                    {req.code}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Verificado
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">{req.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{req.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-5 p-3 rounded-b-2xl">
                <div className="text-[11px] font-semibold text-slate-700">Criterio de Verificación:</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{req.verification}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 6: VENTAJAS CLAVE PARA DEFENDER EN EXPOSICIÓN */}
      <section id="section-defense" className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">06 · Argumentación Académica</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ventajas Clave para Defender en la Exposición</h2>
          </div>
          <button
            onClick={() => onSelectTab('presentation')}
            className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
          >
            Abrir Diapositivas de Defensa <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEFENSE_ADVANTAGES.map((adv, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-teal-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                  {adv.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">Punto {idx + 1}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">{adv.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{adv.description}</p>
              </div>

              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {adv.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Branding for Infographic Export */}
      <footer className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1">
        <div className="font-bold text-slate-700">
          Aura Band / 4ocean Guardian © 2026 · Proyecto de Seguridad Personal Pasiva con IA Biométrica
        </div>
        <div>
          Desarrollado para defensa académica · Fabricación Sostenible · Cifrado E2EE · Venta Libre
        </div>
      </footer>
    </div>
  );
};
