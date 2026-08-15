import React, { useState } from 'react';
import { HARDWARE_HOTSPOTS, PROJECT_INFO } from '../data/projectData';
import { 
  Waves, 
  HeartPulse, 
  Zap, 
  Vibrate, 
  Cpu, 
  BatteryCharging, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  X, 
  Maximize2, 
  Download,
  Info,
  Layers,
  Award
} from 'lucide-react';

interface BraceletViewProps {
  braceletImgSrc: string;
  sensorImgSrc: string;
}

export const BraceletView: React.FC<BraceletViewProps> = ({
  braceletImgSrc,
  sensorImgSrc
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<string>('cord');
  const [activeImageMode, setActiveImageMode] = useState<'product' | 'sensors'>('product');

  const currentHotspotData = HARDWARE_HOTSPOTS.find(h => h.id === selectedHotspot) || HARDWARE_HOTSPOTS[0];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Referencia 3: Hardware y Diseño del Brazalete</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Aura Band / 4ocean Guardian
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Un diseño intencionalmente mimetizado como una pulsera de cuerda artesanal ecológica. Sin pantallas OLED brillantes, sin LEDs visibles ni botones que revelen su propósito de auxilio ante un agresor.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="flex items-center gap-1.5 text-teal-300">
              <ShieldCheck className="w-4 h-4" /> 100% Inadvertido para agresores
            </div>
            <div className="flex items-center gap-1.5 text-cyan-300">
              <Waves className="w-4 h-4" /> Polímero Marino Reciclado 4ocean
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <BatteryCharging className="w-4 h-4" /> 7 Días de Autonomía
            </div>
          </div>
        </div>
      </div>

      {/* Main Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Product Image with Viewer & Switcher */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md space-y-3">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-900">Vista Referencial del Producto:</span>
                <span className="text-xs text-slate-500">Fotografía de Estudio de Alta Resolución</span>
              </div>
              
              <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setActiveImageMode('product')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeImageMode === 'product' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
                  }`}
                >
                  Brazalete Completo
                </button>
                <button
                  onClick={() => setActiveImageMode('sensors')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeImageMode === 'sensors' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
                  }`}
                >
                  Macro Cápsula Biometría
                </button>
              </div>
            </div>

            {/* Image Box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
              <img
                src={activeImageMode === 'product' ? braceletImgSrc : sensorImgSrc}
                alt="Brazalete Aura Band 4ocean"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating tags */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-semibold">Módulo Estanco IP68</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs text-teal-300 font-bold">
                14.2 g (Ultra-ligero)
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center italic">
              {activeImageMode === 'product' 
                ? "Fotografía referencial: Trenzado de plástico marino 4ocean y cápsula central de polímero biológico mate."
                : "Detalle macro: Sensores biométricos (PPG + electrodos GSR) orientados hacia la piel del usuario."}
            </div>
          </div>

          {/* Sustainable Alliance Card */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-6 border border-teal-500/30 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Waves className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Alianza Socioambiental: 4ocean Partnership</h3>
                <p className="text-xs text-teal-200">Economía Circular y Retirada Activa de Plásticos</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cada brazalete Aura Band es manufacturado a partir de <strong>polímeros rPET recogidos del océano y costas</strong> por el equipo de limpieza de 4ocean. La pulsera no solo salva vidas ante situaciones de agresión, sino que también financia la regeneración de ecosistemas marinos.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-teal-500/20">
                <div className="font-bold text-teal-300 text-base">5 lbs</div>
                <div className="text-[10px] text-slate-400">Plástico retirado/unidad</div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-teal-500/20">
                <div className="font-bold text-teal-300 text-base">0% Carbon</div>
                <div className="text-[10px] text-slate-400">Huella compensada</div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-teal-500/20">
                <div className="font-bold text-teal-300 text-base">IP68</div>
                <div className="text-[10px] text-slate-400">Resistencia 50m agua</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Layer / Component Breakdown */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Desglose de Hardware</span>
                <h2 className="text-lg font-bold text-slate-900">Capas y Componentes Internos</h2>
              </div>
              <Layers className="w-5 h-5 text-slate-400" />
            </div>

            {/* Component Selector List */}
            <div className="space-y-2">
              {HARDWARE_HOTSPOTS.map((hotspot) => {
                const isSelected = selectedHotspot === hotspot.id;
                const IconComp = 
                  hotspot.icon === 'Waves' ? Waves :
                  hotspot.icon === 'HeartPulse' ? HeartPulse :
                  hotspot.icon === 'Zap' ? Zap :
                  hotspot.icon === 'Vibrate' ? Vibrate :
                  hotspot.icon === 'Cpu' ? Cpu : BatteryCharging;

                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setSelectedHotspot(hotspot.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'bg-teal-50/80 border-teal-500 shadow-sm' 
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isSelected ? 'text-teal-950' : 'text-slate-800'}`}>
                          {hotspot.title}
                        </div>
                        <div className="text-[11px] text-slate-500">{hotspot.subtitle}</div>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-white/80 text-slate-600 border border-slate-200/60">
                      {hotspot.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Component Detailed Panel */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Especificación Técnica Detallada
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">
                  {currentHotspotData.category.toUpperCase()}
                </span>
              </div>

              <h4 className="text-base font-bold text-white">{currentHotspotData.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{currentHotspotData.description}</p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <div className="text-[11px] font-bold text-slate-400">Características Técnicas:</div>
                <div className="grid grid-cols-1 gap-1.5">
                  {currentHotspotData.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Table: Smartwatch vs. Aura Band */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Matriz de Diferenciación</span>
            <h2 className="text-xl font-bold text-slate-900">¿Por qué NO es un Smartwatch?</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Comparativa de Supervivencia</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 bg-slate-50">
                <th className="py-3 px-4 font-bold">Característica</th>
                <th className="py-3 px-4 font-bold text-rose-700">Smartwatch Convencional</th>
                <th className="py-3 px-4 font-bold text-teal-700">Aura Band / 4ocean Guardian</th>
                <th className="py-3 px-4 font-bold">Ventaja en Situación Real</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Visibilidad ante el agresor</td>
                <td className="py-3 px-4 text-rose-600 font-semibold flex items-center gap-1.5">
                  <X className="w-4 h-4 text-rose-500" /> Pantalla OLED / Notificaciones visibles
                </td>
                <td className="py-3 px-4 text-teal-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-600" /> Cero pantallas ni luces (100% mimetizado)
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">El agresor no sospecha ni busca despojarlo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Activación de emergencia</td>
                <td className="py-3 px-4 text-rose-600 font-semibold flex items-center gap-1.5">
                  <X className="w-4 h-4 text-rose-500" /> Requiere presionar botones o pantalla
                </td>
                <td className="py-3 px-4 text-teal-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-600" /> 100% Pasiva mediante IA biométrica
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Actúa aun si la víctima está paralizada por pánico</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Autonomía de batería</td>
                <td className="py-3 px-4 text-slate-600">1 a 2 días (Carga diaria obligatoria)</td>
                <td className="py-3 px-4 text-teal-700 font-bold">7 a 10 días continuos</td>
                <td className="py-3 px-4 text-slate-600">Nunca te quedarás sin protección por olvido de carga</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Propósito y Estética</td>
                <td className="py-3 px-4 text-slate-600">Dispositivo tecnológico de alto valor de robo</td>
                <td className="py-3 px-4 text-teal-700 font-bold">Accesorio artesanal de cuerda ecológica</td>
                <td className="py-3 px-4 text-slate-600">Cero atractivo para ser sustraído en un atraco</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Costo de Producción</td>
                <td className="py-3 px-4 text-slate-600">$80 - $250 USD (Display costoso)</td>
                <td className="py-3 px-4 text-teal-700 font-bold">&lt; $12 USD (Edge AI en smartphone)</td>
                <td className="py-3 px-4 text-slate-600">Venta libre y masiva accesible para todas las mujeres</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
