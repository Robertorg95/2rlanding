import { motion } from "framer-motion";
import { Globe, RefreshCcw, Settings, Workflow } from "lucide-react";

const modules = [
  {
    icon: Globe,
    name: "Páginas web para empresas",
    desc: "Sitios claros, responsivos y profesionales para presentar tus servicios, generar confianza y facilitar que tus clientes te contacten.",
  },
  {
    icon: RefreshCcw,
    name: "Rediseño de sitios web",
    desc: "Modernización de páginas antiguas, poco claras o desactualizadas para mejorar imagen, estructura, navegación y contacto.",
  },
  {
    icon: Settings,
    name: "Sistemas internos",
    desc: "Desarrollo de herramientas para cotizaciones, inventarios, clientes, reportes, proyectos o control operativo, según las necesidades reales de la empresa.",
  },
  {
    icon: Workflow,
    name: "Mejora y digitalización de procesos",
    desc: "Análisis y digitalización de procesos que hoy se llevan en Excel, papel, WhatsApp o archivos dispersos.",
  },
];

const ModulesSection = () => (
  <section id="modulos" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Servicios</span>
        <h2 className="section-title text-foreground mt-3">Cómo te podemos ayudar</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group p-6 rounded-xl border border-border bg-background hover:border-accent/30 hover:shadow-md transition-all"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/15 transition-colors">
              <m.icon size={20} className="text-accent" />
            </div>
            <h3 className="text-sm font-bold text-foreground font-display">{m.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
