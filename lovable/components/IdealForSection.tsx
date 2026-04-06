import { motion } from "framer-motion";
import { Building2, FileSpreadsheet, FolderOpen, GitBranch, BarChart } from "lucide-react";

const profiles = [
  { icon: Building2, text: "Empresas de servicios, operación o proyectos" },
  { icon: FileSpreadsheet, text: "Negocios que trabajan con cotizaciones, gastos, inventarios o presupuestos" },
  { icon: FolderOpen, text: "Empresas con información dispersa" },
  { icon: GitBranch, text: "Equipos que necesitan trazabilidad y orden" },
  { icon: BarChart, text: "Dirección que requiere reportes claros para decidir" },
];

const IdealForSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Perfil ideal</span>
        <h2 className="section-title text-foreground mt-3">¿Para quién es ideal 2R?</h2>
        <p className="section-subtitle mt-4">
          Para empresas que ya necesitan más control operativo y visibilidad administrativa, pero no quieren entrar a un ERP rígido o a un desarrollo completamente desde cero.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((p, i) => (
          <motion.div
            key={p.text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-background"
          >
            <div className="p-2 rounded-lg bg-accent/10 mt-0.5">
              <p.icon size={18} className="text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground leading-snug">{p.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IdealForSection;
