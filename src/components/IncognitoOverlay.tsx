import React, { useState } from 'react';
import { 
  X, 
  EyeOff, 
  Sun, 
  CloudSun, 
  FileText, 
  Droplets, 
  Wind, 
  Shield, 
  Lock,
  RotateCcw
} from 'lucide-react';

interface IncognitoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IncognitoOverlay: React.FC<IncognitoOverlayProps> = ({
  isOpen,
  onClose
}) => {
  const [activeCamouflage, setActiveCamouflage] = useState<'weather' | 'notes'>('weather');
  const [clickCount, setClickCount] = useState<number>(0);

  if (!isOpen) return null;

  const handleSecretTap = () => {
    setClickCount(c => {
      const next = c + 1;
      if (next >= 3) {
        onClose();
        return 0;
      }
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-slate-900 rounded-[2.5rem] p-4 border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[640px]">
        {/* Top bar with simulation hint and close */}
        <div className="flex items-center justify-between px-2 pt-1 pb-3 text-xs border-b border-slate-800">
          <div className="flex items-center space-x-1.5 text-amber-400 font-semibold">
            <EyeOff className="w-4 h-4" />
            <span>Simulador de Camuflaje en Vivo</span>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setActiveCamouflage(c => c === 'weather' ? 'notes' : 'weather')}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px]"
            >
              Cambiar a {activeCamouflage === 'weather' ? 'Notas' : 'Clima'}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Camouflage UI */}
        {activeCamouflage === 'weather' ? (
          <div className="flex-1 flex flex-col justify-between py-4 text-white bg-gradient-to-b from-sky-600 via-sky-700 to-slate-900 rounded-3xl p-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-sky-200">
                <span className="font-semibold">Santiago de Chile</span>
                <span>Actualizado hace 2 min</span>
              </div>

              <div className="text-center py-6 space-y-2">
                <Sun className="w-20 h-20 text-amber-300 mx-auto animate-spin-slow" />
                <div className="text-6xl font-black tracking-tight">22°C</div>
                <div className="text-sm font-medium text-sky-100">Despejado con brisa suave</div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-sky-900/60 p-3 rounded-2xl border border-sky-500/30 text-center text-xs">
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

            {/* Hidden Secret Trigger Area */}
            <div 
              onClick={handleSecretTap}
              className="cursor-pointer text-center pt-4 border-t border-sky-500/30 select-none"
            >
              <div className="text-[10px] text-sky-200/50">
                (Toca aquí 3 veces para salir del modo incógnito: {clickCount}/3)
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between py-4 text-slate-100 bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Bloc de Notas
                </span>
                <span>Carpeta Personal</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs">
                  <div className="font-bold text-slate-200">Lista del Supermercado</div>
                  <div className="text-slate-400 text-[11px] mt-1">• Leche de almendras, café, avena, frutas</div>
                </div>

                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs">
                  <div className="font-bold text-slate-200">Recordatorios de Estudio</div>
                  <div className="text-slate-400 text-[11px] mt-1">• Repasar requisitos funcionales y no funcionales</div>
                </div>

                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs">
                  <div className="font-bold text-slate-200">Reunión de Grupo</div>
                  <div className="text-slate-400 text-[11px] mt-1">• Jueves a las 17:00 en la biblioteca</div>
                </div>
              </div>
            </div>

            {/* Hidden Secret Trigger Area */}
            <div 
              onClick={handleSecretTap}
              className="cursor-pointer text-center pt-4 border-t border-slate-800 select-none"
            >
              <div className="text-[10px] text-slate-500">
                (Toca aquí 3 veces para desbloquear el panel de seguridad: {clickCount}/3)
              </div>
            </div>
          </div>
        )}

        {/* Footer info note */}
        <div className="pt-2 text-center text-[11px] text-slate-400">
          El agresor que revise el móvil no verá ninguna aplicación de pánico ni rastreadores visibles.
        </div>
      </div>
    </div>
  );
};
