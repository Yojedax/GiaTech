import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "marketing",
    icon: "Target",
    title: "Modelos de Marketing y Segmentación",
    tags: ["Marketing"],
    problem: "Los equipos de marketing invierten presupuesto de forma uniforme sin saber qué clientes tienen mayor potencial de compra o riesgo de abandono.",
    solution: "Construimos modelos de segmentación RFM, scoring de propensión y clustering comportamental que permiten personalizar cada acción comercial.",
    deliverables: ["Modelo RFM con segmentos accionables", "Score de propensión a compra", "Dashboard de seguimiento de segmentos", "Playbook de acciones por segmento"],
    impact: "Reducción del 30-40% en costo de adquisición. Incremento del 20% en conversión de campañas.",
    
  },
  {
    id: "churn",
    icon: "UserCheck",
    title: "Predicción de Churn y Retención",
    tags: ["Retención"],
    problem: "Las empresas pierden clientes sin señales de alerta previas, respondiendo siempre de forma reactiva y a destiempo.",
    solution: "Modelos predictivos de abandono con entre 2 y 8 semanas de anticipación, integrados a los flujos de gestión comercial.",
    deliverables: ["Modelo predictivo de churn (ML)", "Lista semanal de clientes en riesgo", "Score de riesgo individual", "Recomendación de acción por cliente"],
    impact: "Recuperación del 15-25% de clientes en riesgo. Reducción del churn anual entre 8 y 18 puntos porcentuales.",
    
  },
  {
    id: "geo",
    icon: "MapPin",
    title: "Geolocalización y Calidad de Domicilios",
    tags: ["Geolocalización"],
    problem: "Bases de domicilios con errores, duplicados y formatos inconsistentes generan fallos en entregas, costos logísticos evitables y métricas de cobertura poco confiables.",
    solution: "Pipeline de normalización, geocodificación y scoring de calidad de direcciones con trazabilidad completa de cada registro.",
    deliverables: ["Score de calidad por domicilio", "Dirección normalizada y geocodificada", "Reporte de auditoría de base", "Pipeline automatizable"],
    impact: "Reducción del 60-80% de entregas fallidas por domicilio. Mejora inmediata en la calidad de la base de clientes.",
    
  },
  {
    id: "logistica",
    icon: "Truck",
    title: "Optimización Logística",
    tags: ["Logística"],
    problem: "Las rutas de reparto se diseñan manualmente o con criterios históricos, sin considerar demanda real, restricciones de vehículos ni ventanas horarias.",
    solution: "Algoritmos de optimización combinatoria (VRP) que minimizan distancia, costo y tiempo manteniendo cobertura total.",
    deliverables: ["Modelo de ruteo optimizado", "Asignación dinámica de vehículos", "Simulador de escenarios", "KPIs de eficiencia operativa"],
    impact: "Ahorro del 15-30% en costo logístico. Reducción del 20% en tiempo promedio de entrega.",
    
  },
  {
    id: "dashboards",
    icon: "BarChart3",
    title: "Dashboards y Monitoreo de KPIs",
    tags: ["Analytics"],
    problem: "La toma de decisiones se basa en reportes estáticos, con demora de días y sin capacidad de drill-down ni alertas automáticas.",
    solution: "Diseño e implementación de dashboards ejecutivos y operativos conectados a fuentes de datos en tiempo real, con alertas configurables.",
    deliverables: ["Dashboard ejecutivo interactivo", "Alertas automáticas por umbral", "Integración a fuentes de datos existentes", "Documentación de KPIs"],
    impact: "Reducción del 70% del tiempo de preparación de reportes. Decisiones basadas en datos actualizados.",
    
  },
  {
    id: "ia",
    icon: "Bot",
    title: "Automatización con IA y Agentes",
    tags: ["Inteligencia Artificial"],
    problem: "Tareas repetitivas de alto volumen consumen tiempo de equipos calificados: clasificación, resúmenes, respuestas, extracción de información.",
    solution: "Diseño e implementación de agentes de IA con LLMs para automatizar flujos de trabajo, integrados a los sistemas existentes de la empresa.",
    deliverables: ["Agente de IA a medida", "Integración a CRM / ERP / email", "Panel de monitoreo y control", "Capacitación del equipo"],
    impact: "Automatización del 60-80% de tareas repetitivas. Liberación de capacidad humana para tareas de mayor valor.",
    
  },
];
