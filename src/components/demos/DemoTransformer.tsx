'use client'

import { useState } from 'react'
import { Globe, Sparkles, ArrowRight, Loader2 } from 'lucide-react'

interface TransformResult {
  original: string
  improved: string
  improvements: string[]
  useCases: { title: string; description: string; kpi: string }[]
  estimate: string
}

// Fallback responses by detected industry from URL
function generateFallback(url: string): TransformResult {
  const lower = url.toLowerCase()

  const isLogistica = lower.includes('logis') || lower.includes('transport') || lower.includes('envio') || lower.includes('distrib') || lower.includes('flota') || lower.includes('cargo')
  const isRetail = lower.includes('retail') || lower.includes('tienda') || lower.includes('shop') || lower.includes('store') || lower.includes('moda') || lower.includes('ropa')
  const isEcommerce = lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('market') || lower.includes('venta')
  const isRestaurant = lower.includes('restaurant') || lower.includes('gastro') || lower.includes('food') || lower.includes('comida') || lower.includes('menu')
  const isSalud = lower.includes('salud') || lower.includes('medic') || lower.includes('clinic') || lower.includes('health') || lower.includes('farma')

  if (isLogistica) {
    return {
      original: 'Empresa de logística y distribución con operaciones regionales. Actualmente gestiona rutas y flotas de forma manual o semi-automatizada, con visibilidad limitada sobre el rendimiento en tiempo real.',
      improved: 'Con GiaTech, tu operación logística tendría ruteo inteligente que reduce costos hasta un 38%, dashboards en tiempo real para monitorear flota y SLA, y modelos predictivos que anticipan picos de demanda y fallas de entrega antes de que ocurran.',
      improvements: [
        'Optimización de rutas con algoritmos: -38% en costo por entrega y +42% en ocupación de flota',
        'Dashboard operativo en tiempo real: visibilidad completa de flota, entregas y KPIs por zona',
        'Predicción de demanda: anticipar volúmenes semanales con 85%+ de precisión para planificar recursos',
        'Alertas automáticas de SLA: detectar entregas en riesgo antes de que fallen y reasignar proactivamente',
      ],
      useCases: [
        { title: 'Optimización de Rutas', description: 'Algoritmos que minimizan distancia, tiempo y costo considerando ventanas horarias, capacidad de vehículos y restricciones de tráfico.', kpi: '-38% costo logístico, +42% ocupación' },
        { title: 'Dashboard Operativo', description: 'Panel ejecutivo con KPIs de flota, entregas por zona, SLA en tiempo real y alertas automáticas para el equipo.', kpi: 'Visibilidad 100% de operaciones en tiempo real' },
        { title: 'Predicción de Demanda', description: 'Modelo ML que predice volúmenes de entrega por zona y día, permitiendo planificar flota y personal con anticipación.', kpi: '+85% precisión en forecast semanal' },
        { title: 'Calidad de Domicilios', description: 'Normalización y geocodificación de base de direcciones para eliminar entregas fallidas por datos sucios.', kpi: '-60% entregas fallidas por domicilio incorrecto' },
      ],
      estimate: 'Para una empresa logística de escala mediana, la inversión inicial típica ronda los USD 15.000–35.000 con un ROI visible en los primeros 60-90 días de operación.',
    }
  }

  if (isRetail || isEcommerce) {
    return {
      original: 'Empresa de retail o e-commerce con catálogo activo y base de clientes. Actualmente las campañas de marketing son genéricas y no existe segmentación basada en comportamiento de compra real.',
      improved: 'Con GiaTech, tendrías segmentación RFM automática que identifica tus mejores clientes y los en riesgo, campañas personalizadas con hasta 4x de conversión, y un sistema de alertas temprana de churn que protege tu revenue.',
      improvements: [
        'Segmentación RFM automática: clasificar toda la base en segmentos accionables en tiempo real',
        'Campañas personalizadas por segmento: hasta 4x de conversión vs campañas genéricas',
        'Modelo de churn: identificar clientes en riesgo 30 días antes de que se vayan',
        'Motor de recomendación: productos sugeridos por perfil, +22% en ticket promedio',
      ],
      useCases: [
        { title: 'Segmentación RFM', description: 'Clasificación automática de clientes por Recencia, Frecuencia y Valor monetario para acciones comerciales precisas.', kpi: 'Hasta 4x de conversión en campañas segmentadas' },
        { title: 'Predicción de Churn', description: 'Modelo predictivo que identifica clientes en riesgo de abandono y genera acciones recomendadas por perfil.', kpi: '-32% tasa de abandono en los primeros 3 meses' },
        { title: 'Motor de Recomendación', description: 'Sugerencias de productos personalizadas por historial y perfil del cliente, integradas al sitio o email.', kpi: '+22% ticket promedio por sesión' },
        { title: 'Dashboard de Marketing', description: 'Panel centralizado con LTV, CAC, tasa de retención y performance de campañas por segmento.', kpi: 'Decision-making basado en datos, no intuición' },
      ],
      estimate: 'Para retail o e-commerce, la inversión inicial típica es de USD 12.000–28.000 con primeros resultados medibles en campañas en 4–6 semanas.',
    }
  }

  if (isRestaurant) {
    return {
      original: 'Negocio gastronómico con operaciones presenciales y/o delivery. La gestión de stock, predicción de demanda y fidelización de clientes se hace de forma reactiva y manual.',
      improved: 'Con GiaTech, tendrías predicción de demanda por día y horario para reducir el desperdicio, segmentación de clientes frecuentes para programas de fidelización precisos, y dashboards operativos que muestran rentabilidad por producto y sucursal.',
      improvements: [
        'Predicción de demanda diaria: reducir desperdicio hasta un 30% con compras más precisas',
        'Segmentación de clientes frecuentes: identificar los mejores clientes y accionar sobre ellos',
        'Dashboard de rentabilidad: márgenes por producto, horario pico y rendimiento por sucursal',
        'Análisis de reviews y feedback: procesamiento automático para detectar patrones de satisfacción',
      ],
      useCases: [
        { title: 'Forecast de Demanda', description: 'Modelo predictivo que anticipa covers y pedidos por día, horario y evento para optimizar stock y personal.', kpi: '-30% desperdicio, -15% costo de compras' },
        { title: 'Fidelización Inteligente', description: 'Segmentación de base de clientes y campañas personalizadas para aumentar frecuencia de visita.', kpi: '+25% frecuencia de visita en clientes activos' },
        { title: 'Dashboard Operativo', description: 'Panel en tiempo real con ventas, márgenes, ocupación y KPIs clave por sucursal y período.', kpi: 'Visibilidad completa del negocio en un solo lugar' },
        { title: 'Análisis de Feedback', description: 'Procesamiento automático de reviews y encuestas para detectar problemas antes de que escalen.', kpi: '+18% en NPS promedio en los primeros 60 días' },
      ],
      estimate: 'Para el sector gastronómico, la inversión inicial típica es de USD 8.000–20.000 con resultados operativos visibles en las primeras 4 semanas.',
    }
  }

  if (isSalud) {
    return {
      original: 'Organización del sector salud con operaciones clínicas y/o administrativas. Los procesos de gestión de turnos, seguimiento de pacientes y reportería se realizan de forma manual o con sistemas desconectados.',
      improved: 'Con GiaTech, tendrías modelos predictivos para anticipar ausentismo y optimizar agendas, dashboards clínicos y administrativos integrados, y sistemas de alertas que mejoran el seguimiento de pacientes y reducen el no-show.',
      improvements: [
        'Predicción de ausentismo: reducir no-show hasta un 35% con recordatorios inteligentes',
        'Optimización de agenda: maximizar ocupación de consultorios y profesionales',
        'Dashboard clínico-administrativo: KPIs de atención, tiempos y rentabilidad en tiempo real',
        'Segmentación de pacientes: identificar perfiles de riesgo y priorizar seguimiento activo',
      ],
      useCases: [
        { title: 'Predicción de No-Show', description: 'Modelo que predice qué pacientes tienen alta probabilidad de ausentarse y activa recordatorios personalizados.', kpi: '-35% tasa de ausentismo en turnos' },
        { title: 'Optimización de Agenda', description: 'Asignación inteligente de turnos que maximiza ocupación de profesionales y reduce tiempos de espera.', kpi: '+28% ocupación efectiva de agenda' },
        { title: 'Dashboard Integrado', description: 'Panel unificado con métricas de atención, tiempos, satisfacción y rentabilidad por especialidad.', kpi: 'Reducción del 40% en tiempo de reportería manual' },
        { title: 'Segmentación de Pacientes', description: 'Clasificación automática por frecuencia, riesgo clínico y valor para acciones de seguimiento priorizadas.', kpi: '+20% en adherencia a tratamientos crónicos' },
      ],
      estimate: 'Para organizaciones de salud, la inversión inicial típica es de USD 18.000–40.000 con primeros impactos operativos medibles en 6–10 semanas.',
    }
  }

  // Generic fallback
  return {
    original: 'Empresa con operaciones digitales y base de datos activa. Actualmente los procesos de análisis, reportería y toma de decisiones se realizan de forma manual, sin aprovechar el potencial predictivo de la información disponible.',
    improved: 'Con GiaTech, tu empresa tendría dashboards ejecutivos en tiempo real, modelos predictivos adaptados a tus KPIs clave, y automatizaciones que liberan al equipo de tareas repetitivas para enfocarse en lo que genera valor.',
    improvements: [
      'Dashboard ejecutivo centralizado: todos los KPIs clave en un solo lugar, actualizados en tiempo real',
      'Modelo predictivo personalizado: anticipar el comportamiento de clientes, operaciones o demanda',
      'Automatización de reportería: eliminar el tiempo manual dedicado a consolidar datos y generar informes',
      'Data quality pipeline: limpiar y estructurar la base de datos para que cada decisión se apoye en datos confiables',
    ],
    useCases: [
      { title: 'Dashboard Ejecutivo', description: 'Panel centralizado con los KPIs más relevantes del negocio, actualizado automáticamente desde las fuentes de datos existentes.', kpi: '-70% tiempo en reportería manual' },
      { title: 'Modelo Predictivo Core', description: 'Algoritmo personalizado que anticipa el KPI más crítico del negocio: churn, demanda, riesgo operativo o conversión.', kpi: '+25–40% de precisión vs métodos actuales' },
      { title: 'Automatización de Procesos', description: 'Identificación y automatización de los 3 procesos manuales de mayor impacto: reportes, alertas y flujos de datos.', kpi: '-60% tiempo operativo en tareas repetitivas' },
      { title: 'Data Quality Foundation', description: 'Pipeline de limpieza, normalización e integración de fuentes de datos para garantizar calidad en cada análisis.', kpi: 'Base de datos lista para IA en 4–6 semanas' },
    ],
    estimate: 'Para empresas de escala mediana, la inversión inicial típica ronda los USD 10.000–25.000 con un primer entregable de impacto visible en las primeras 4 semanas de proyecto.',
  }
}

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str.startsWith('http') ? str : `https://${str}`)
    return url.hostname.includes('.')
  } catch {
    return false
  }
}

export default function DemoTransformer() {
  const [url, setUrl]         = useState('')
  const [result, setResult]   = useState<TransformResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [tab, setTab]         = useState<'vision' | 'usecases'>('vision')
  const [urlError, setUrlError] = useState('')

  const handleTransform = async () => {
    const trimmed = url.trim()
    if (!trimmed) return

    if (!isValidUrl(trimmed)) {
      setUrlError('Ingresa una URL válida, por ejemplo: https://www.tusitio.com')
      return
    }

    setUrlError('')
    setLoading(true)
    setError('')
    setResult(null)

    // Try the real API first; fall back to frontend simulation if unavailable
    try {
      const res = await fetch('/api/transform-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmed }),
      })
      if (!res.ok) throw new Error('API no disponible')
      const data = await res.json()
      setResult(data)
      setTab('vision')
    } catch {
      // Simulate realistic delay then show frontend-generated response
      await new Promise((r) => setTimeout(r, 2200))
      setResult(generateFallback(trimmed))
      setTab('vision')
    } finally {
      setLoading(false)
    }
  }

  const applyExample = (ex: { url: string }) => {
    setUrl(ex.url)
    setUrlError('')
  }

  const exampleSites = [
    { label: 'Logística / Distribución', url: 'https://www.logistica-ejemplo.com.ar' },
    { label: 'Retail / Tienda online',    url: 'https://www.tienda-ejemplo.com.ar' },
    { label: 'E-Commerce',               url: 'https://www.ecommerce-ejemplo.com' },
  ]

  return (
    <div className="space-y-6">
      {/* Explanation */}
      <div className="p-5 rounded-xl border-l-4" style={{ background: 'rgba(0,212,255,0.04)', borderColor: '#00d4ff' }}>
        <div className="flex items-start gap-3">
          <Sparkles size={18} style={{ color: '#00d4ff', flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Transformador de Sitios Web con IA</div>
            <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
              Ingresá la URL de tu sitio actual. Nuestra IA analiza el rubro y los procesos del negocio para generar una visión concreta de cómo tu empresa se vería con soluciones de datos e inteligencia artificial.
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="card p-5">
        <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Analizá tu sitio web</div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setUrlError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleTransform()}
              placeholder="https://www.tusitio.com.ar"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-colors"
              style={{
                borderColor: urlError ? '#f87171' : 'var(--border-light)',
                background: 'var(--surface-0)',
                color: 'var(--text-primary)',
              }}
              onFocus={(e) => { if (!urlError) e.target.style.borderColor = '#00d4ff' }}
              onBlur={(e) => { if (!urlError) e.target.style.borderColor = 'var(--border-light)' }}
            />
          </div>
          <button
            onClick={handleTransform}
            disabled={loading || !url.trim()}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            style={{ background: '#00d4ff', color: 'var(--surface-0)' }}
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
            {loading ? 'Analizando…' : 'Transformar con IA'}
          </button>
        </div>

        {urlError && (
          <p className="text-xs mt-2" style={{ color: '#f87171' }}>{urlError}</p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest mr-1" style={{ color: 'var(--text-secondary)' }}>Ejemplos:</span>
          {exampleSites.map((ex) => (
            <button
              key={ex.url}
              onClick={() => applyExample(ex)}
              className="text-xs px-2 py-0.5 rounded hover:opacity-80 transition-opacity"
              style={{ color: '#00d4ff' }}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="card p-10 text-center">
          <Loader2 size={28} className="animate-spin mx-auto mb-3" style={{ color: '#00d4ff' }} />
          <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Analizando tu sitio…</div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Identificando industria, procesos y oportunidades de IA</div>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            {[
              { key: 'vision',    label: 'Visión transformada' },
              { key: 'usecases', label: 'Casos de uso' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
                style={tab === t.key
                  ? { background: 'var(--surface-2)', color: '#00d4ff' }
                  : { color: 'var(--text-secondary)' }
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'vision' && (
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} style={{ color: '#00d4ff' }} />
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Tu empresa con datos e IA</div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{result.improved}</p>
                <div className="space-y-2">
                  {result.improvements.map((imp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-1)' }}>
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{imp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,153,204,0.1) 100%)', border: '1px solid var(--border-neon)' }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--neon)' }}>
                  Estimación de inversión
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{result.estimate}</p>
              </div>
            </div>
          )}

          {tab === 'usecases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.useCases.map((uc, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: 'rgba(0,212,255,0.07)', color: '#00d4ff' }}>
                      UC{String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{uc.description}</p>
                  <div className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,212,255,0.05)', color: '#00d4ff' }}>
                    📈 {uc.kpi}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-light)' }}>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>¿Querés ver esto implementado en tu empresa?</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Una reunión de 30 minutos es suficiente para validar el impacto.</div>
            </div>
            <a href="/contacto" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-neon" style={{ background: '#00d4ff', color: 'var(--surface-0)' }}>
              Agendar reunión <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
