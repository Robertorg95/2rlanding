import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "1 razón social",
  "Hasta 8 usuarios",
  "Configuración inicial de módulos base",
  "Parametrización general del sistema",
  "Carga inicial de catálogos principales",
  "Roles y accesos",
  "Capacitación inicial",
  "Acompañamiento de arranque",
];

const BaseIncludesSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Implementación base</span>
          <h2 className="section-title text-foreground mt-3">Qué incluye la base</h2>
          <p className="section-subtitle mt-4">
            La implementación base está pensada para empresas que necesitan orden operativo sin entrar desde el inicio a una personalización compleja.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8"
        >
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-accent/10">
                  <Check size={14} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BaseIncludesSection;
