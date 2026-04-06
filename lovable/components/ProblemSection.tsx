import { motion } from "framer-motion";
import { AlertTriangle, FileX, DollarSign, Package, MessageSquare, Users, Eye } from "lucide-react";

const pains = [
  { icon: FileX, text: "Cotizaciones sin seguimiento claro" },
  { icon: DollarSign, text: "Gastos sin control por proyecto" },
  { icon: Package, text: "Inventarios poco confiables" },
  { icon: MessageSquare, text: "Información dispersa entre áreas" },
  { icon: Users, text: "Procesos que dependen de personas clave" },
  { icon: Eye, text: "Falta de visibilidad para dirección" },
];

const ProblemSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle size={20} className="text-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">El problema</span>
        </div>
        <h2 className="section-title text-foreground">
          Cuando la operación crece, Excel y los procesos sueltos dejan de ser suficientes
        </h2>
        <p className="section-subtitle mt-4">
          Muchas empresas operan con información dispersa entre archivos, WhatsApp, correos y procesos manuales. Eso provoca retrabajos, errores, poca trazabilidad y dificultad para tomar decisiones con información clara.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pains.map((p, i) => (
          <motion.div
            key={p.text}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-background hover:border-accent/30 transition-colors"
          >
            <div className="mt-0.5 p-2 rounded-lg bg-accent/10">
              <p.icon size={18} className="text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground leading-snug">{p.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
