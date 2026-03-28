const steps = [
  {
    number: '01',
    title: 'Diagnóstico de datos y negocio',
    description: 'Analizamos el estado actual de sus datos, sistemas y procesos. Identificamos los quick wins con mayor potencial de impacto en los primeros 30 días.',
  },
  {
    number: '02',
    title: 'Diseño de solución',
    description: 'Definimos la arquitectura, el stack y los entregables. Sin over-engineering: la solución adecuada para el problema real, no la más tecnológicamente impresionante.',
  },
  {
    number: '03',
    title: 'Desarrollo iterativo',
    description: 'Entregamos en sprints cortos. Cada iteración genera algo medible y utilizable por el equipo. Validamos con usuarios reales del negocio, no solo con técnicos.',
  },
  {
    number: '04',
    title: 'Transferencia y escalado',
    description: 'Documentamos, capacitamos y dejamos la solución operando de forma autónoma. El equipo interno puede mantener y extender lo construido sin depender de nosotros.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — sticky only on desktop; on mobile renders normally in flow */}
          <div className="lg:sticky lg:top-28">
            <div className="badge badge-neon mb-4">Metodología</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Rápido de implementar.<br />
              <span className="gradient-text">Fácil de operar.</span>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Nuestros proyectos generan resultados medibles desde las primeras semanas. No construimos soluciones que terminan en un cajón: construimos herramientas que el equipo usa todos los días.
            </p>
            <div className="p-5 rounded-xl border-l-4" style={{ borderColor: 'var(--neon)', background: 'var(--neon-glow)' }}>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                &ldquo;El 80% del impacto viene del 20% de los datos. Identificamos ese 20% antes de escribir una línea de código.&rdquo;
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>— Principio de trabajo GiaTech</p>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-12 bottom-0 w-px"
                    style={{ background: 'var(--border-light)' }}
                  />
                )}

                {/* Number bubble */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono z-10"
                  style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
