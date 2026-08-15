import React from 'react';
import { AppViewTab } from '../types';
import { Shield, Sparkles, Smartphone, Watch, Presentation, Download, EyeOff } from 'lucide-react';

interface NavbarProps {
  activeTab: AppViewTab;
  onTabChange: (tab: AppViewTab) => void;
  onOpenIncognito: () => void;
  onPrintInfographic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenIncognito,
  onPrintInfographic
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onTabChange('infographic')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20 ring-2 ring-teal-400/30">
              <Shield className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
                  Aura Band
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  4ocean Guardian
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                IA Biométrica Pasiva · Seguridad SOS Discreta
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              id="nav-tab-infographic"
              onClick={() => onTabChange('infographic')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'infographic'
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden md:inline">1. Infografía Explicativa</span>
              <span className="md:hidden">Infografía</span>
            </button>

            <button
              id="nav-tab-bracelet"
              onClick={() => onTabChange('bracelet')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'bracelet'
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Watch className="w-4 h-4" />
              <span className="hidden md:inline">2. Brazalete (Ref.)</span>
              <span className="md:hidden">Brazalete</span>
            </button>

            <button
              id="nav-tab-app"
              onClick={() => onTabChange('app')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'app'
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">3. App Móvil & IA</span>
              <span className="md:hidden">App Móvil</span>
            </button>

            <button
              id="nav-tab-presentation"
              onClick={() => onTabChange('presentation')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'presentation'
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span className="hidden lg:inline">Defensa / Exposición</span>
              <span className="lg:hidden">Defensa</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2">
            <button
              id="nav-btn-incognito-demo"
              onClick={onOpenIncognito}
              title="Probar Camuflaje (Modo Incógnito)"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:border-slate-600 shadow-sm"
            >
              <EyeOff className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Camuflaje</span>
            </button>

            <button
              id="nav-btn-print"
              onClick={onPrintInfographic}
              title="Descargar / Imprimir Documento"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all shadow-md shadow-teal-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar / Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
