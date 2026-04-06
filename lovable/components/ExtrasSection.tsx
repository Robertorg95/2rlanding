import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const extras = [
  "Multiempresa",
  "Usuarios adicionales",
  "Reportes especiales",
  "Personalización avanzada",
  "Integraciones con otros sistemas",
  "Migración histórica amplia",
  "Automatizaciones especiales",
  "Módulos futuros",
];

const ExtrasSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-2 lg:order-1 glass-card p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {extras.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background">
                <Plus size={14} className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            La idea es mantener una base clara, escalable y bien delimitada desde el inicio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Personalización</span>
          <h2 className="section-title text-foreground mt-3">Qué se cotiza por separado</h2>
          <p className="section-subtitle mt-4">
            Estas funcionalidades se cotizan de forma independiente según las necesidades específicas de tu operación.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExtrasSection;
