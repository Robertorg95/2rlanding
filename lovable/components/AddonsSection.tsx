import { motion } from "framer-motion";
import { Radar, ShoppingCart, UserCog, FileBarChart, Plug } from "lucide-react";

const addons = [
  { icon: Radar, name: "Radar Fiscal" },
  { icon: ShoppingCart, name: "POS" },
  { icon: UserCog, name: "Recursos Humanos" },
  { icon: FileBarChart, name: "Reportes avanzados" },
  { icon: Plug, name: "Integraciones específicas" },
];

const AddonsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Evolución</span>
        <h2 className="section-title text-foreground mt-3">Módulos y evolución futura</h2>
        <p className="section-subtitle mt-4 mx-auto">
          2R está pensado como una plataforma modular. Pueden integrarse componentes adicionales o activarse nuevas capacidades conforme la operación lo requiera.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        {addons.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-dashed border-accent/30 bg-accent/5"
          >
            <a.icon size={18} className="text-accent" />
            <span className="text-sm font-semibold text-foreground">{a.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AddonsSection;
