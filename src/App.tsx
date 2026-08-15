import React, { useState } from 'react';
import { AppViewTab } from './types';
import { Navbar } from './components/Navbar';
import { InfographicView } from './components/InfographicView';
import { BraceletView } from './components/BraceletView';
import { AppView } from './components/AppView';
import { PresentationView } from './components/PresentationView';
import { IncognitoOverlay } from './components/IncognitoOverlay';

// Asset references
import braceletImg from './assets/images/bracelet_reference_1786816892162.jpg';
import appImg from './assets/images/app_reference_1786816902165.jpg';
import sensorImg from './assets/images/sensor_schematic_1786816914485.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppViewTab>('infographic');
  const [isIncognitoOpen, setIsIncognitoOpen] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenIncognito={() => setIsIncognitoOpen(true)}
        onPrintInfographic={handlePrint}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'infographic' && (
          <InfographicView
            onSelectTab={setActiveTab}
            braceletImgSrc={braceletImg}
            appImgSrc={appImg}
          />
        )}

        {activeTab === 'bracelet' && (
          <BraceletView
            braceletImgSrc={braceletImg}
            sensorImgSrc={sensorImg}
          />
        )}

        {activeTab === 'app' && (
          <AppView
            appImgSrc={appImg}
          />
        )}

        {activeTab === 'presentation' && (
          <PresentationView
            braceletImgSrc={braceletImg}
            appImgSrc={appImg}
          />
        )}
      </main>

      {/* Interactive Fullscreen Camouflage Simulation Modal */}
      <IncognitoOverlay
        isOpen={isIncognitoOpen}
        onClose={() => setIsIncognitoOpen(false)}
      />
    </div>
  );
}
