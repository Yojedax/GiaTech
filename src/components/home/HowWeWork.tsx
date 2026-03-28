const steps = [
  {
    number: '01',
    title: 'Diagnostico de datos y negocio',
    description: 'Analizamos el estado actual de sus datos, sistemas y procesos. Identificamos los quick wins con mayor potencial de impacto en los primeros 30 dias.',
  },
  {
    number: '02',
    title: 'Diseno de solucion',
    description: 'Definimos la arquitectura, el stack y los entregables. Sin over-engineering: la solucion adecuada para el problema real, no la mas tecnologicamente impresionante.',
  },
  {
    number: '03',
    title: 'Desarrollo iterativo',
    description: 'Entregamos en sprints cortos. Cada iteracion genera algo medible y utilizable por el equipo. Validamos con usuarios reales del negocio, no solo con tecnicos.',
  },
  {
    number: '04',
    title: 'Transferencia y escalado',
    description: 'Documentamos, capacitamos y dejamos la solucion operando de forma autonoma. El equipo interno puede mantener y extender lo construido sin depender de nosotros.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-28">
            <div className="badge badge-neon mb-4">Metodologia</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Rapido de implementar.<br />
              <span className="gradient-text">Facil de operar.</span>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Nuestros proyectos generan resultados medibles desde las primeras semanas. No construimos soluciones que terminan en un cajon: construimos herramientas que el equipo usa todos los dias.
            </p>
            <div className="p-5 rounded-xl border-l-4" style={{ borderColor: 'var(--neon)', background: 'var(--neon-glow)' }}>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                &ldquo;El 80% del impacto viene del 20% de los datos. Identificamos ese 20% antes de escribir una linea de codigo.&rdquo;
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
                {/* Line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-12 bottom-0 w-px"
                    style={{ background: 'var(--border-light)' }}
                  />
                )}

                {/* Number */}
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
