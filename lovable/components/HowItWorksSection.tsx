import { motion } from "framer-motion";
import { Search, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Paso 1",
    title: "Diagnóstico y alcance",
    desc: "Revisamos tu situación actual, prioridades comerciales u operativas y definimos el alcance recomendado para avanzar con claridad.",
  },
  {
    icon: Rocket,
    phase: "Paso 2",
    title: "Diseño e implementación",
    desc: "Ejecutamos el proyecto según el tipo de solución: página web, rediseño o sistema interno adaptado a tus necesidades.",
  },
  {
    icon: RefreshCw,
    phase: "Paso 3",
    title: "Seguimiento y mejora",
    desc: "Si el proyecto lo requiere, continuamos con soporte, ajustes, mantenimiento y evolución por etapas.",
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
        <h2 className="section-title text-foreground mt-3">Un proceso claro para ejecutar cada proyecto</h2>
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
        El modelo de trabajo se adapta al tipo de proyecto y a la operación de cada empresa.
      </motion.p>
    </div>
  </section>
);

export default HowItWorksSection;
