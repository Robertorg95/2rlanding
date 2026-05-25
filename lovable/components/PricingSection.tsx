import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PricingSection = () => (
  <section id="inversion" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Modalidades</span>
        <h2 className="section-title text-foreground mt-3">Modalidades de trabajo</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Cada proyecto se cotiza según alcance, nivel de personalización, funciones requeridas y operación del cliente.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Opción 1</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Proyecto único</h3>
          <p className="mt-4 text-sm text-muted-foreground">Ideal para páginas web, rediseños o soluciones puntuales.</p>
          <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Solicita una evaluación <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Opción 2</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Implementación + soporte</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Ideal para sistemas internos que requieren nube, mantenimiento, respaldos y acompañamiento.
          </p>
          <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Solicita una evaluación <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative glass-card p-8 text-center border-accent/30"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
            Flexible
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Opción 3</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Desarrollo por etapas</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Ideal para empresas que quieren iniciar con una primera versión y crecer después.
          </p>
          <a href="#contacto" className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors">
            Cuéntame qué necesitas mejorar <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

    </div>
  </section>
);

export default PricingSection;
