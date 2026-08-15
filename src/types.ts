export interface BiometricTelemetry {
  heartRate: number; // bpm
  hrv: number; // ms (Variabilidad del ritmo cardíaco)
  gsr: number; // µS (Conductancia de la piel / sudoración)
  skinTemp: number; // °C
  stressIndex: number; // 0 - 100
  state: 'REPOSO' | 'ACTIVIDAD_FISICA' | 'ESTRES_MODERADO' | 'PANICO_DETECTADO';
  timestamp: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  notifyVia: 'WhatsApp' | 'SMS' | 'Push';
  status: 'active' | 'standby';
}

export interface HardwareHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'sensor' | 'material' | 'connectivity' | 'power';
  specs: string[];
  icon: string;
}

export interface RequirementItem {
  code: string;
  title: string;
  description: string;
  verification: string;
  type: 'RF' | 'RNF' | 'RDO';
  status: 'implemented' | 'verified';
}

export type AppViewTab = 'infographic' | 'bracelet' | 'app' | 'presentation';

export type CamouflageMode = 'none' | 'weather' | 'notes';
