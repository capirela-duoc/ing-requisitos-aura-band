import { BiometricTelemetry, EmergencyContact, HardwareHotspot, RequirementItem } from '../types';

export const PROJECT_INFO = {
  name: "Aura Band",
  commercialName: "Aura Band / 4ocean Guardian (Versión Alerta SOS)",
  tagline: "Dispositivo de seguridad personal pasivo y discreto con IA biométrica",
  alliance: "4ocean (Alianza Socioambiental por Océanos Limpios)",
  vision: "Un dispositivo de seguridad personal pasivo y discreto que utiliza IA biométrica para detectar estados de pánico y activar automáticamente un protocolo de auxilio sin requerir manipulación manual de la víctima.",
  materials: "100% Cuerda de Polímero Marino Reciclado (HDPE/PET recogido del océano por 4ocean) + Cápsula de resina biológica mate hipoalergénica.",
  batteryLife: "7+ días continuos de autonomía (LiPo 85mAh de ultra-baja autodescarga)",
  connectivity: "Bluetooth Low Energy 5.3 (BLE) cifrado AES-256",
  weight: "14.2 gramos (peso pluma, sin sensación de reloj pesado)",
};

export const PROBLEM_PILLARS = [
  {
    id: "target",
    title: "Vulnerabilidad en Dispositivos Tradicionales",
    subtitle: "Blanco prioritario del agresor",
    description: "Los smartphones y smartwatches son el primer objetivo que un agresor busca neutralizar, arrebatar o exigir que se apaguen.",
    stat: "87%",
    statLabel: "de asaltos neutralizan primero el smartphone",
    impact: "Un smartwatch con pantalla encendida o botón evidente alerta al atacante y es despojado de inmediato.",
  },
  {
    id: "freeze",
    title: "Parálisis por Pánico / Imposibilidad Manual",
    subtitle: "Inhibición motriz bajo amenaza",
    description: "Durante una situación de pánico agudo, taquicardia extrema o agresión física, la víctima sufre parálisis psicomotora (respuesta 'Freeze') impidiendo desbloquear teléfonos o digitar.",
    stat: "<2s",
    statLabel: "tiempo de reacción disponible bajo agresión",
    impact: "La víctima no puede buscar una app, presionar combinaciones de teclas ni forcejear con su teléfono.",
  },
  {
    id: "social",
    title: "Estigma y Falsas Soluciones de Ataque",
    subtitle: "Barreras legales de armas no letales",
    description: "Alternativas como táseres portátiles o sprays conllevan riesgos penales por lesiones accidentales, permisos especiales o pueden ser arrebatados y usados contra la víctima.",
    stat: "100%",
    statLabel: "Venta libre y legalidad absoluta de Aura Band",
    impact: "Aura Band opta por el auxilio inteligente, legal, preventivo y solidario.",
  }
];

export const HARDWARE_HOTSPOTS: HardwareHotspot[] = [
  {
    id: "cord",
    title: "Cuerda Artesanal 4ocean Reciclada",
    subtitle: "Camuflaje estético y sostenibilidad circular",
    description: "Tejido resistente al agua confeccionado con microfilamentos de plástico recolectado del océano y costas. A simple vista parece una pulsera artesanal o de surfista ecológica.",
    category: "material",
    specs: ["Polímero 100% rPET certificado", "Tejido trenzado antidesgarro", "Hipoalergénico y lavable"],
    icon: "Waves"
  },
  {
    id: "ppg",
    title: "Sensor Óptico PPG (VRC / Ritmo Cardíaco)",
    subtitle: "Monitoreo continuo de micro-variabilidad cardíaca",
    description: "Emisor fotopletismográfico de baja potencia en longitud de onda verde/infrarroja que mide la Variabilidad del Ritmo Cardíaco (VRC) milisegundo a milisegundo.",
    category: "sensor",
    specs: ["Frecuencia de muestreo 50Hz", "Resolución 24-bit ADC", "Consumo <40µA en reposo"],
    icon: "HeartPulse"
  },
  {
    id: "gsr",
    title: "Electrodos Galvánicos de la Piel (GSR)",
    subtitle: "Respuesta electrodérmica y conductancia de sudor",
    description: "Dos microcontactos metálicos biocompatibles que detectan la variación en la conductancia eléctrica de la dermis causada por descargas simpáticas del sistema nervioso.",
    category: "sensor",
    specs: ["Detección de micro-sudoración en <200ms", "Cero irritación cutánea", "Rango 0.1 a 100 µSiemens"],
    icon: "Zap"
  },
  {
    id: "haptic",
    title: "Actuador Háptico LRA (Micro-vibración)",
    subtitle: "Aviso táctil completamente inaudible",
    description: "Motor de resonancia lineal diseñado para transmitir un pulso suave directo a la piel del usuario, imperceptible para personas a más de 10 cm de distancia.",
    category: "power",
    specs: ["Vibración direccional a 170 Hz", "Silencioso (<15 dB acústico)", "Patrón háptico codificado de 3 pulsos"],
    icon: "Vibrate"
  },
  {
    id: "ble",
    title: "Microcontrolador SoC BLE 5.3",
    subtitle: "Cerebro embebido de ultra bajo consumo",
    description: "Chip ARM Cortex-M4 con módulo de radiofrecuencia de largo alcance y cifrado por hardware AES-256 para enlazar con la app móvil.",
    category: "connectivity",
    specs: ["Bluetooth 5.3 Long Range", "Cifrado E2EE integrado", "Gestión energética inteligente"],
    icon: "Cpu"
  },
  {
    id: "battery",
    title: "Microbatería LiPo y Carga Magnética",
    subtitle: "7 días de vigilancia ininterrumpida",
    description: "Celda de polímero de litio sellada que provee más de una semana de funcionamiento con carga completa en solo 45 minutos vía pin magnético estanco IP68.",
    category: "power",
    specs: ["Capacidad 85 mAh", "Autonomía de 7 a 10 días", "Sumergible hasta 50 metros (5 ATM)"],
    icon: "BatteryCharging"
  }
];

export const AI_DETECTION_MATRIX = [
  {
    state: "Reposo / Calma",
    hr: "60 - 75 bpm",
    hrv: "Alto (65 - 90 ms)",
    gsr: "Bajo (0.5 - 1.8 µS)",
    temp: "36.5 °C",
    aiDiagnosis: "Línea Base Normal",
    action: "Monitoreo pasivo de rutina",
    color: "emerald"
  },
  {
    state: "Actividad Física / Ejercicio",
    hr: "130 - 170 bpm",
    hrv: "Progresivo medio (40 - 55 ms)",
    gsr: "Subida gradual térmica",
    temp: "37.1 °C (elevada)",
    aiDiagnosis: "Esfuerzo Aeróbico Gradual",
    action: "IA clasifica como deporte (No dispara alarma)",
    color: "blue"
  },
  {
    state: "Pánico / Amenaza Inminente",
    hr: "Pico abrupto >140 bpm en <4s",
    hrv: "Colapso súbito (<25 ms)",
    gsr: "Disparo vertical de conductancia (>12 µS)",
    temp: "35.8 °C (vasoconstricción periférica)",
    aiDiagnosis: "Respuesta de Pánico / Lucha o Huida",
    action: "ACTIVACIÓN PROTOCOLO HÁPTICO SOS INMEDIATO",
    color: "red"
  }
];

export const PROTOCOL_STEPS = [
  {
    step: 1,
    title: "Monitoreo Biométrico Continuo",
    badge: "Hardware Pasivo",
    description: "El brazalete captura VRC y GSR continuamente y transmite paquetes de telemetría livianos vía BLE hacia la app local.",
    timing: "Tiempo real (50Hz)"
  },
  {
    step: 2,
    title: "Análisis Inferencial IA Local",
    badge: "Edge AI en Smartphone",
    description: "El modelo de IA compara los datos con la calibración base del usuario, diferenciando taquicardia por cardio vs pánico agudo con colapso de VRC.",
    timing: "<1 segundo de latencia"
  },
  {
    step: 3,
    title: "Confirmación Háptica Discreta",
    badge: "Verificación de Seguridad",
    description: "El brazalete vibra silenciosamente en la muñeca y la app inicia un temporizador de cuenta regresiva (10-15s).",
    timing: "Ventana de 10-15s"
  },
  {
    step: 4,
    title: "Cancelación o Disparo Automático",
    badge: "Gesto o Timeout",
    description: "Si el usuario no cancela (o confirma con gesto), el sistema asume peligro real e inicia la derivación de emergencia.",
    timing: "T = 0s"
  },
  {
    step: 5,
    title: "Derivación SOS Multiplataforma",
    badge: "Red de Auxilio",
    description: "Captura de coordenadas GPS en vivo y envío automático a los 3 contactos de confianza vía SMS, WhatsApp API y Notificación Push.",
    timing: "≤5 segundos (RNF-02)"
  }
];

export const REQUIREMENTS_DATA: RequirementItem[] = [
  {
    code: "RF-01",
    type: "RF",
    title: "Transmisión Biométrica Continua",
    description: "Transmisión continua de datos biométricos (ritmo cardíaco, VRC y respuesta galvánica de la piel) vía BLE desde el brazalete a la app móvil.",
    verification: "Pruebas de conectividad con paquetes BLE sincronizados a 50Hz sin pérdida de tramas.",
    status: "verified"
  },
  {
    code: "RF-02",
    type: "RF",
    title: "Análisis Inferencial de Patrones de Estrés por IA",
    description: "Modelo de IA local que clasifica en tiempo real picos de estrés/pánico diferenciándolos de ejercicio físico mediante calibración de línea base.",
    verification: "Validación de matriz de confusión con umbrales de VRC < 25ms y salto súbito en GSR.",
    status: "verified"
  },
  {
    code: "RF-03",
    type: "RF",
    title: "Alerta Háptica y Temporizador de Cancelación",
    description: "Emisión de micro-vibración silenciosa en el brazalete y ejecución de cuenta regresiva de 10 a 15 segundos en la aplicación móvil.",
    verification: "Temporizador decreciente con opciones de descarte por botón seguro o gesto de muñeca.",
    status: "verified"
  },
  {
    code: "RF-04",
    type: "RF",
    title: "Disparo de Mensajes SOS Multiplataforma",
    description: "Disparo automático de mensajes SOS con coordenadas GPS en tiempo real a la red de 3 contactos de confianza vía SMS, WhatsApp API o Push.",
    verification: "Generación de enlaces de geolocalización dinámica y entrega simultánea a los 3 destinatarios.",
    status: "verified"
  },
  {
    code: "RNF-01",
    type: "RNF",
    title: "Discreción y Mimetismo Total",
    description: "Ausencia total de pantallas OLED, displays brillantes o luces LED visibles que delaten la función de seguridad del brazalete.",
    verification: "Inspección de diseño industrial: apariencia 100% de pulsera artesanal ecológica.",
    status: "verified"
  },
  {
    code: "RNF-02",
    type: "RNF",
    title: "Latencia de Emergencia Crítica",
    description: "Tiempo de emisión y despacho de la alerta SOS ≤ 5 segundos una vez expirada la ventana de confirmación.",
    verification: "Benchmarking de red de telecomunicaciones con retardo medido de < 2.8s promedio.",
    status: "verified"
  },
  {
    code: "RNF-03",
    type: "RNF",
    title: "Autonomía Energética Extendida",
    description: "Batería con duración mínima de 7 días continuos de monitoreo ininterrumpido sin necesidad de recarga.",
    verification: "Pruebas de descarga con batería LiPo 85mAh en modo BLE ultra low-power (> 180 horas).",
    status: "verified"
  },
  {
    code: "RDO-01",
    type: "RDO",
    title: "Protección y Cifrado de Datos Personales",
    description: "Cifrado de extremo a extremo (E2EE) con AES-256 en datos biométricos y coordenadas de geolocalización conforme a GDPR y leyes locales de privacidad.",
    verification: "Cifrado de tramas BLE y almacenamiento local seguro en enclave criptográfico del teléfono.",
    status: "verified"
  },
  {
    code: "RDO-02",
    type: "RDO",
    title: "Viabilidad Normativa y Venta Libre",
    description: "Cumplimiento total con normativas de telecomunicaciones (FCC, CE) y sin restricciones legales sobre armas o descargas eléctricas.",
    verification: "Certificaciones de radiación no ionizante y libre comercialización para el público femenino y general.",
    status: "verified"
  }
];

export const DEFENSE_ADVANTAGES = [
  {
    title: "Alta Viabilidad Legal y Cero Riesgo Penal",
    badge: "Frente a Armas No Letales / Taser",
    icon: "Scale",
    description: "A diferencia de prototipos con descarga eléctrica o químicos, Aura Band no enfrenta restricciones de armas reguladas, prohibiciones de importación ni peligro de agresión revertida.",
    bullets: [
      "No requiere permisos de porte de armas",
      "Imposible de ser usado por el agresor para herir a la víctima",
      "Aprobado para uso en transporte público, aeropuertos y recintos educativos"
    ]
  },
  {
    title: "Camuflaje Mimetizado Insuperable",
    badge: "Psicología del Agresor",
    icon: "EyeOff",
    description: "El agresor ignora por completo la pulsera al confundirla con un accesorio artesanal juvenil de cuerda ecológica, permitiendo que el protocolo se ejecute sin levantar sospechas.",
    bullets: [
      "Sin pantallas brillantes ni botones rojos delatores",
      "App con 'Modo Incógnito' que simula app de Clima o Notas",
      "Vibración táctil imperceptible para terceros"
    ]
  },
  {
    title: "Alianza Socioambiental con 4ocean",
    badge: "Triple Impacto (ESG)",
    icon: "Waves",
    description: "Combina la protección de la integridad de las mujeres con la retirada activa de plástico de los océanos, creando un producto ético, deseable y con fuerte narrativa de marketing.",
    bullets: [
      "Cada pulsera financia la extracción de 5 libras de plástico marino",
      "Fabricación circular con polímeros rPET trazables",
      "Alta tracción para fondos de inversión de impacto y subsidios públicos"
    ]
  },
  {
    title: "Escalabilidad Masiva y Accesibilidad",
    badge: "Costo-Efectividad",
    icon: "TrendingUp",
    description: "Al eliminar pantallas OLED costosas y procesadores pesados delegando el cómputo al smartphone del usuario, el costo de manufactura se reduce drásticamente.",
    bullets: [
      "BOM (Bill of Materials) optimizado < $12 USD a escala",
      "Venta libre en retail, universidades y farmacias",
      "Fácil adopción sin curva de aprendizaje"
    ]
  }
];

export const INITIAL_CONTACTS: EmergencyContact[] = [
  {
    id: "c1",
    name: "Mamá (Carmen R.)",
    relationship: "Madre",
    phone: "+34 612 345 678",
    notifyVia: "WhatsApp",
    status: "active"
  },
  {
    id: "c2",
    name: "Alejandro M. (Hermano)",
    relationship: "Hermano",
    phone: "+34 689 987 654",
    notifyVia: "SMS",
    status: "active"
  },
  {
    id: "c3",
    name: "Sofía T. (Mejor Amiga)",
    relationship: "Contacto de Emergencia",
    phone: "+34 655 432 109",
    notifyVia: "Push",
    status: "active"
  }
];
