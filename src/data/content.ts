export const services = [
  {
    id: 'marketing',
    icon: '◎',
    title: 'Modelos de Marketing y Segmentación',
    problem: 'Las campañas genéricas queman presupuesto. Sin segmentación inteligente, el costo por adquisición escala y la conversión cae.',
    solution: 'Modelos de scoring, segmentación RFM y propensión a compra que identifican a quién impactar, con qué mensaje y en qué momento.',
    deliverables: ['Modelo de scoring de propensión', 'Segmentación RFM automatizada', 'Dashboard de performance de campañas', 'API de scores para integración'],
    impact: 'Reducción de hasta 35% en costo por adquisición. Incremento de conversión en campañas segmentadas de 2x a 4x.',
    tags: ['ML', 'Segmentación', 'ROI'],
  },
  {
    id: 'retencion',
    icon: '◈',
    title: 'Predicción de Churn y Retención',
    problem: 'Retener un cliente cuesta 5 veces menos que adquirir uno nuevo. Sin embargo, la mayoría de las empresas actúan cuando ya es tarde.',
    solution: 'Modelos predictivos de churn que identifican señales tempranas de abandono y sugieren acciones comerciales personalizadas por cliente.',
    deliverables: ['Modelo de predicción de churn', 'Score de riesgo por cliente', 'Acciones recomendadas automáticas', 'Alertas en tiempo real'],
    impact: 'Reducción del 20-40% en tasa de abandono. Recuperación de ingresos en riesgo antes de que se materialicen las bajas.',
    tags: ['Retención', 'IA', 'CRM'],
  },
  {
    id: 'geo',
    icon: '◉',
    title: 'Geolocalización y Calidad de Domicilios',
    problem: 'Direcciones incorrectas generan entregas fallidas, devoluciones costosas y datos sucios que contaminan todos los análisis downstream.',
    solution: 'Pipeline de normalización y geocodificación que valida, corrige y enriquece cada dirección con coordenadas, score de confianza y fuente.',
    deliverables: ['Motor de normalización de direcciones', 'Score de confianza por registro', 'Auditoría de calidad del padrón', 'API REST para integración real-time'],
    impact: 'Hasta 94% de tasa de validación. Reducción de entregas fallidas del 60%. Base de datos de clientes limpia y georeferenciada.',
    tags: ['Datos', 'Calidad', 'Geocodificación'],
  },
  {
    id: 'logistica',
    icon: '◆',
    title: 'Optimización Logística',
    problem: 'Las rutas manuales generan sobreconsumo de combustible, vehículos subutilizados y ventanas de entrega incumplidas.',
    solution: 'Algoritmos de optimización de rutas y asignación de carga que minimizan distancia, tiempo y costo respetando restricciones operativas.',
    deliverables: ['Motor de ruteo optimizado', 'Dashboard de operaciones en tiempo real', 'Simulador de escenarios', 'Integración con sistemas de flota'],
    impact: 'Reducción del 30-40% en costos logísticos. Aumento del 25% en ocupación de flota. Más entregas con la misma cantidad de vehículos.',
    tags: ['Optimización', 'Logística', 'Rutas'],
  },
  {
    id: 'dashboards',
    icon: '▣',
    title: 'Dashboards y Monitoreo de KPIs',
    problem: 'Los datos están, pero dispersos en silos. Sin una vista unificada, las decisiones se toman tarde, con información incompleta.',
    solution: 'Pipelines de datos + dashboards ejecutivos que consolidan fuentes heterogéneas en una única vista accionable, actualizada en tiempo real.',
    deliverables: ['Arquitectura de datos unificada', 'Dashboards ejecutivos y operativos', 'Alertas automáticas por umbral', 'Exportación y reportería automatizada'],
    impact: 'De días a minutos en la generación de reportes. Decisiones basadas en datos actualizados, no en intuición.',
    tags: ['Analytics', 'BI', 'Tiempo Real'],
  },
  {
    id: 'agentes',
    icon: '◬',
    title: 'Automatización con IA y Agentes',
    problem: 'Tareas repetitivas de alto volumen consumen tiempo de equipos que deberían estar enfocados en decisiones de mayor valor.',
    solution: 'Agentes de IA personalizados que automatizan flujos de trabajo complejos: análisis, clasificación y síntesis de información.',
    deliverables: ['Agentes de IA a medida', 'Integración con sistemas existentes', 'Panel de supervisión y control', 'Documentación y transferencia de conocimiento'],
    impact: 'Automatización del 70-90% de tareas operativas repetitivas. Reducción de errores y tiempos de respuesta de horas a segundos.',
    tags: ['IA Generativa', 'Agentes', 'Automatización'],
  },
]

export const industries = [
  { id: 'logistica', name: 'Logística y Distribución', icon: '🚚', description: 'Optimizamos flotas, rutas y procesos de entrega para reducir costos y mejorar el nivel de servicio.', useCases: ['Optimización de rutas', 'Predicción de demanda', 'Control de flota', 'KPIs operativos'] },
  { id: 'retail', name: 'Retail y Distribución', icon: '🏪', description: 'Segmentamos clientes, predecimos demanda y optimizamos el mix de productos para maximizar el margen.', useCases: ['RFM y segmentación', 'Forecasting de stock', 'Pricing dinámico', 'Análisis de canastas'] },
  { id: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'Reducimos el abandono, mejoramos la conversión y activamos a los usuarios correctos en el momento justo.', useCases: ['Churn prediction', 'Recomendaciones', 'Calidad de domicilios', 'Atribución de campañas'] },
  { id: 'marketing', name: 'Áreas de Marketing', icon: '📊', description: 'Transformamos presupuestos de campaña en conversiones medibles con modelos de propensión y audiencias inteligentes.', useCases: ['Scoring de propensión', 'Segmentación dinámica', 'ROI de campañas', 'Look-alike audiences'] },
  { id: 'customer', name: 'Customer Analytics', icon: '👥', description: 'Construimos una visión 360° del cliente que permite personalizar experiencias y anticipar necesidades.', useCases: ['Customer journey', 'LTV prediction', 'NPS predictivo', 'Señales de abandono'] },
  { id: 'operaciones', name: 'Operaciones', icon: '⚙️', description: 'Automatizamos procesos, detectamos ineficiencias y monitoreamos KPIs operativos en tiempo real.', useCases: ['Automatización de flujos', 'Detección de anomalías', 'Control de gestión', 'Reportería ejecutiva'] },
]

export const testimonials = [
  { id: 'T01', name: 'Hernán Villanueva', role: 'Director Comercial', company: 'Distribuidora Atlántica', industry: 'Logística', quote: 'En tres meses pasamos de tomar decisiones en base a intuición a tener un dashboard con alertas en tiempo real. La reducción de costos logísticos fue inmediata y medible.' },
  { id: 'T02', name: 'Marcela Ríos', role: 'Gerente de Marketing', company: 'RetailNow Argentina', industry: 'Retail', quote: 'El modelo de segmentación nos permitió identificar exactamente a qué clientes llamar antes de que se fueran. La tasa de churn bajó un 28% en el primer trimestre.' },
  { id: 'T03', name: 'Pablo Acosta', role: 'CTO', company: 'E-Commerce Express', industry: 'E-Commerce', quote: 'Lo que más valoramos fue que el equipo entiende tanto de datos como de negocio. No nos entregaron un modelo, nos entregaron una solución que el equipo pudo usar desde el día uno.' },
]

export const faqs = [
  { question: '¿Necesitamos tener datos perfectamente ordenados para empezar?', answer: 'No. La mayoría de nuestros proyectos comienzan con un diagnóstico de calidad de datos. Parte de nuestro trabajo es limpiar, estructurar y enriquecer la información existente antes de construir cualquier modelo.' },
  { question: '¿Cuánto tiempo toma ver resultados?', answer: 'Dependiendo del proyecto, los primeros quick wins se pueden observar entre 4 y 8 semanas. Priorizamos entregar valor incremental desde las primeras iteraciones, no al final de un proyecto largo.' },
  { question: '¿Se integran las soluciones con nuestros sistemas actuales?', answer: 'Sí. Diseñamos las soluciones para integrarse con los sistemas existentes: CRM, ERP, plataformas de e-commerce, etc. Entregamos APIs, conectores y documentación para facilitar la adopción.' },
  { question: '¿Trabajan con empresas que no tienen equipo de datos interno?', answer: 'Es nuestro caso de uso principal. Actuamos como el equipo de datos externo de la empresa: desde la infraestructura hasta los modelos y la visualización, cubriendo todo el stack.' },
  { question: '¿Cómo se mide el ROI de los proyectos?', answer: 'Antes de comenzar, definimos conjuntamente los KPIs de impacto: ahorro en costos, incremento en conversión, reducción de churn, etc. Todas las soluciones son diseñadas para ser medibles desde el inicio.' },
]

export const techStack = [
  { name: 'Python', category: 'Lenguajes' }, { name: 'SQL', category: 'Lenguajes' },
  { name: 'scikit-learn', category: 'ML' }, { name: 'XGBoost', category: 'ML' }, { name: 'PyTorch', category: 'ML' },
  { name: 'LangChain', category: 'IA Generativa' }, { name: 'OpenAI / Anthropic', category: 'IA Generativa' },
  { name: 'dbt', category: 'Data Engineering' }, { name: 'Airflow', category: 'Data Engineering' },
  { name: 'BigQuery', category: 'Cloud' }, { name: 'Snowflake', category: 'Cloud' }, { name: 'AWS', category: 'Cloud' },
  { name: 'Looker Studio', category: 'Visualización' }, { name: 'Power BI', category: 'Visualización' },
  { name: 'Next.js', category: 'Frontend' },
]
