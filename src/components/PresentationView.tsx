import React, { useState } from 'react';
import { 
  PROJECT_INFO, 
  PROBLEM_PILLARS, 
  DEFENSE_ADVANTAGES, 
  REQUIREMENTS_DATA, 
  AI_DETECTION_MATRIX,
  PROTOCOL_STEPS 
} from '../data/projectData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Presentation, 
  Sparkles, 
  ShieldCheck, 
  Brain, 
  Waves, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  EyeOff, 
  Zap,
  HelpCircle
} from 'lucide-react';

interface PresentationViewProps {
  braceletImgSrc: string;
  appImgSrc: string;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  braceletImgSrc,
  appImgSrc
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      title: "1. Introducción y Nombre del Proyecto",
      subtitle: "Aura Band / 4ocean Guardian (Versión Alerta SOS)",
      category: "Visión General",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
            <div className="bg-teal-500/10 border border-teal-500/30 p-4 rounded-2xl">
              <span className="font-bold text-teal-300 block mb-1">Tesis Central:</span>
              La seguridad personal de las mujeres no puede depender de que la víctima forcejee con su smartphone o desbloquee pantallas durante un asalto o ataque de pánico.
            </div>
            <p>
              <strong>Aura Band</strong> es un dispositivo de seguridad personal pasivo y discreto que utiliza IA biométrica multivariable para detectar estados de pánico y activar automáticamente un protocolo de auxilio sin requerir manipulación manual.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs border border-slate-700 text-teal-300 font-semibold">
                Alianza 4ocean
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs border border-slate-700 text-cyan-300 font-semibold">
                Biometría VRC + GSR
              </span>
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs border border-slate-700 text-amber-300 font-semibold">
                Cero Pantallas
              </span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-700 shadow-xl">
            <img src={braceletImgSrc} alt="Brazalete" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
      speakerNote: "Enfatizar al jurado que el 87% de los agresores neutralizan primero el teléfono. La innovación radica en eliminar la necesidad de acción manual por parte de la víctima."
    },
    {
      title: "2. Definición del Problema",
      subtitle: "Vulnerabilidad de Dispositivos y Parálisis Psicomotriz",
      category: "Diagnóstico",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROBLEM_PILLARS.map((p, i) => (
            <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-2xl font-extrabold text-teal-400">{p.stat}</div>
              <h4 className="text-sm font-bold text-white">{p.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                {p.impact}
              </div>
            </div>
          ))}
        </div>
      ),
      speakerNote: "Explicar la respuesta de parálisis involuntaria ('Freeze'): el cerebro primitivo bloquea la motricidad fina, haciendo imposible teclear un PIN o marcar números."
    },
    {
      title: "3. Hardware Mimetizado & Alianza 4ocean",
      subtitle: "Diseño Pasivo sin Pantallas en Plástico Marino Reciclado",
      category: "Hardware & ESG",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 space-y-3 text-xs text-slate-200">
            <p className="text-sm font-semibold text-teal-300">
              ¿Por qué mimetizado como pulsera artesanal?
            </p>
            <p className="leading-relaxed">
              Un smartwatch convencional atrae al ladrón por su valor económico y pantalla. Aura Band simula una pulsera ecológica común, desorientando al agresor.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 bg-slate-800 p-2 rounded-xl">
                <Waves className="w-4 h-4 text-cyan-400" />
                <span>100% Cuerda de Polímero Marino Reciclado (Alianza 4ocean)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 p-2 rounded-xl">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span>Sensores PPG (Óptico) y GSR (Electrodérmico)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 p-2 rounded-xl">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Batería de 7+ días y micro-vibración háptica silenciosa</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-700 shadow-xl">
            <img src={braceletImgSrc} alt="Hardware" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
      speakerNote: "Destacar el modelo de economía circular: cada pulsera retira 5 libras de plástico del mar, agregando un pilar ESG fundamental para la atracción de financiamiento público y privado."
    },
    {
      title: "4. El Cerebro: IA Biométrica Multivariable",
      subtitle: "Diferenciación entre Ejercicio Aeróbico y Ataque de Pánico",
      category: "Inteligencia Artificial",
      content: (
        <div className="space-y-4 text-xs">
          <p className="text-slate-300">
            El mayor desafío de los wearables biométricos es evitar falsos positivos. Nuestra IA compara la firma multivariable con la calibración del usuario:
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-xl">
              <div className="font-bold text-emerald-300">Reposo / Calma</div>
              <div className="text-slate-300 text-[11px] mt-1">HR: 60-75 bpm</div>
              <div className="text-slate-300 text-[11px]">VRC: Alta (75ms)</div>
              <div className="text-slate-300 text-[11px]">GSR: Línea base</div>
              <div className="mt-2 text-emerald-400 font-semibold text-[10px]">Monitoreo Pasivo</div>
            </div>
            <div className="bg-blue-950/60 border border-blue-500/40 p-3 rounded-xl">
              <div className="font-bold text-blue-300">Actividad Física</div>
              <div className="text-slate-300 text-[11px] mt-1">HR: 130-170 bpm</div>
              <div className="text-slate-300 text-[11px]">VRC: Caída gradual</div>
              <div className="text-slate-300 text-[11px]">Temp: Aumentada</div>
              <div className="mt-2 text-blue-400 font-semibold text-[10px]">IA Identifica Deporte</div>
            </div>
            <div className="bg-rose-950/60 border border-rose-500/50 p-3 rounded-xl">
              <div className="font-bold text-rose-300">Pánico / Amenaza</div>
              <div className="text-slate-300 text-[11px] mt-1">HR: Salto &gt;140 en &lt;4s</div>
              <div className="text-slate-300 text-[11px]">VRC: Colapso súbito</div>
              <div className="text-slate-300 text-[11px]">GSR: Pico sudor miedo</div>
              <div className="mt-2 text-rose-400 font-bold text-[10px] animate-pulse">ALERTA HÁPTICA SOS</div>
            </div>
          </div>
        </div>
      ),
      speakerNote: "Puntualizar que el colapso del VRC combinado con el pico de conductancia galvánica en menos de 4 segundos es una firma inequívoca de activación del sistema simpático por miedo agudo."
    },
    {
      title: "5. Protocolo de Confirmación y Derivación SOS",
      subtitle: "Secuencia Silenciosa y Modo Incógnito de Camuflaje",
      category: "Protocolo Operativo",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 text-xs text-slate-200">
            <div className="space-y-2">
              {PROTOCOL_STEPS.map((s) => (
                <div key={s.step} className="flex items-start gap-2 bg-slate-800/70 p-2 rounded-xl border border-slate-700">
                  <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <span className="font-bold text-white">{s.title}</span>
                    <p className="text-[11px] text-slate-400">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[9/10] bg-slate-950 border border-slate-700 shadow-xl">
            <img src={appImgSrc} alt="App UI" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
        </div>
      ),
      speakerNote: "Enfatizar el 'Modo Incógnito': si el atacante revisa el teléfono, la app simula una pantalla de Clima o Notas comunes, manteniendo la seguridad de la usuaria sin delatar el protocolo de auxilio."
    },
    {
      title: "6. Ventajas Clave para Defender en Exposición",
      subtitle: "Legalidad, No Letalidad, Sostenibilidad y Escalabilidad",
      category: "Defensa Académica",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DEFENSE_ADVANTAGES.map((adv, i) => (
            <div key={i} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                {adv.badge}
              </span>
              <h4 className="text-sm font-bold text-white">{adv.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      ),
      speakerNote: "Ante la clásica pregunta del tribunal: '¿Por qué no una descarga eléctrica?', responder con la inviabilidad jurídica del táser (riesgo penal, portación ilegal, riesgo de autolesión) vs. la alta viabilidad de auxilio de Aura Band."
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="space-y-8 pb-16">
      {/* Slide Presentation Container */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
        {/* Top Control Navigation */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <Presentation className="w-5 h-5 text-teal-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Diapositivas para Defensa Académica ({currentSlide + 1} / {slides.length})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentSlide((s) => Math.max(0, s - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              {currentSlide + 1} de {slides.length}
            </span>
            <button
              onClick={() => setCurrentSlide((s) => Math.min(slides.length - 1, s + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="space-y-4 min-h-[400px]">
          <div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-teal-400 border border-slate-700">
              {currentSlideData.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {currentSlideData.title}
            </h2>
            <p className="text-slate-400 text-sm">{currentSlideData.subtitle}</p>
          </div>

          <div className="py-4">
            {currentSlideData.content}
          </div>
        </div>

        {/* Speaker Notes Callout for the Student / Presenter */}
        <div className="bg-slate-900/90 border border-teal-500/30 p-4 rounded-2xl flex items-start gap-3 text-xs">
          <HelpCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-teal-300 block mb-0.5">Nota para el Expositor / Defensa ante el Tribunal:</span>
            <p className="text-slate-300 leading-relaxed">{currentSlideData.speakerNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
