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
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Inversión</span>
        <h2 className="section-title text-foreground mt-3">Esquema de inversión</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Fase 0 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Fase 0</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Diagnóstico y diseño</h3>
          <p className="mt-4 text-sm text-muted-foreground">Inversión única según alcance del proyecto.</p>
          <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Solicitar cotización <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Setup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Setup</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Puesta en marcha</h3>
          <p className="mt-4 text-sm text-muted-foreground">Inversión única de configuración e implementación.</p>
          <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            Solicitar cotización <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Suscripción */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative glass-card p-8 text-center border-accent/30"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
            Recurrente
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Suscripción</span>
          <h3 className="mt-3 text-lg font-bold text-foreground font-display">Operación continua</h3>
          <div className="mt-4">
            <span className="text-3xl font-bold text-foreground font-display">$6,000</span>
            <span className="text-sm text-muted-foreground ml-1">MXN + IVA / mes</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Desde</p>
          <a href="#contacto" className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors">
            Agendar diagnóstico <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground max-w-lg mx-auto">
        La inversión final puede variar según número de usuarios, módulos activados y nivel de adecuación requerido.
      </p>
    </div>
  </section>
);

export default PricingSection;
