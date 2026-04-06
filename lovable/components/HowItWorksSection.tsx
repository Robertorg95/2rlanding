import { motion } from "framer-motion";
import { Search, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Fase 0",
    title: "Diagnóstico y diseño operativo",
    desc: "Analizamos tu operación actual, definimos estructura, responsables, flujos, reglas de negocio y alcance de implementación.",
  },
  {
    icon: Rocket,
    phase: "Setup",
    title: "Puesta en marcha",
    desc: "Configuramos la plataforma, activamos módulos, cargamos catálogos, definimos accesos y dejamos el sistema listo para operar.",
  },
  {
    icon: RefreshCw,
    phase: "Suscripción",
    title: "Operación continua",
    desc: "Incluye licencia de uso, hosting estándar, mantenimiento técnico, respaldos, soporte base y mejoras generales del sistema.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Cómo funciona</span>
        <h2 className="section-title text-foreground mt-3">Un modelo de implementación simple y escalable</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative glass-card p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <s.icon size={20} className="text-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{s.phase}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground font-display">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center text-base font-medium text-foreground/80 max-w-2xl mx-auto"
      >
        No partimos de cero en cada proyecto. Implementamos una base sólida que se adecúa a la operación de tu empresa.
      </motion.p>
    </div>
  </section>
);

export default HowItWorksSection;
