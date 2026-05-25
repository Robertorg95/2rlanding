import { motion } from "framer-motion";
import { AlertTriangle, FileX, DollarSign, Package, MessageSquare, Users, Eye } from "lucide-react";

const pains = [
  { icon: FileX, text: "Sitio web desactualizado o poco claro" },
  { icon: MessageSquare, text: "Canales de contacto poco visibles o desordenados" },
  { icon: Users, text: "Servicios difíciles de entender para nuevos clientes" },
  { icon: DollarSign, text: "Cotizaciones y seguimiento comercial sin estructura" },
  { icon: Package, text: "Procesos internos operando en Excel o papel" },
  { icon: Eye, text: "Poca visibilidad para tomar decisiones oportunas" },
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
          Señales de que tu empresa necesita mejorar presencia digital y operación interna
        </h2>
        <p className="section-subtitle mt-4">
          Muchas empresas tienen una página web que no comunica bien su valor o procesos internos dispersos en archivos, chats y tareas manuales. Eso genera retrabajo, baja conversión y menos control operativo.
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
