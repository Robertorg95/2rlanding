import { motion } from "framer-motion";
import { ArrowRight, Play, Layers, Settings, Puzzle } from "lucide-react";

const badges = [
  { icon: Layers, text: "Implementación por fases" },
  { icon: Settings, text: "Setup + suscripción" },
  { icon: Puzzle, text: "Semi-personalizado a tu operación" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

    <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-brand-white/10 text-brand-white/80 border border-brand-white/10">
          Plataforma administrativa modular
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-primary-foreground font-display">
          Control, orden y visibilidad operativa para tu empresa
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/70 max-w-2xl">
          Centraliza proyectos, cotizaciones, presupuestos, gastos, inventarios y procesos clave en una sola plataforma semi-personalizada.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-white text-primary font-semibold text-sm hover:bg-brand-white/90 transition-colors">
            Agendar diagnóstico <ArrowRight size={16} />
          </a>
          <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium text-sm hover:bg-brand-white/5 transition-colors">
            <Play size={16} /> Ver cómo funciona
          </a>
        </div>
      </motion.div>

      {/* Mini badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 flex flex-wrap gap-4"
      >
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-brand-white/5 border border-brand-white/10">
            <b.icon size={16} className="text-brand-blue-light" />
            <span className="text-sm text-primary-foreground/80 font-medium">{b.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
