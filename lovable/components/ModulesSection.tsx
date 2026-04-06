import { motion } from "framer-motion";
import { Users, FileText, FolderKanban, Wallet, Package, Camera, Shield, BarChart3 } from "lucide-react";

const modules = [
  { icon: Users, name: "Clientes y proveedores", desc: "Centraliza catálogos, historial y relación con la operación." },
  { icon: FileText, name: "Cotizaciones", desc: "Estandariza propuestas, conceptos, seguimiento y control comercial." },
  { icon: FolderKanban, name: "Proyectos", desc: "Organiza obras, servicios o iniciativas por responsable, estatus y avance." },
  { icon: Wallet, name: "Presupuestos y control de gastos", desc: "Da visibilidad al gasto real contra lo planeado por proyecto, área o periodo." },
  { icon: Package, name: "Inventarios", desc: "Controla entradas, salidas, existencias y movimientos clave." },
  { icon: Camera, name: "Evidencias y documentos", desc: "Relaciona facturas, comprobantes y archivos con el registro operativo correspondiente." },
  { icon: Shield, name: "Roles y permisos", desc: "Asigna accesos según perfil y responsabilidad dentro de la empresa." },
  { icon: BarChart3, name: "Dashboard operativo", desc: "Consulta indicadores y vistas de seguimiento para dirección y operación." },
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
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Plataforma</span>
        <h2 className="section-title text-foreground mt-3">Módulos disponibles hoy</h2>
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
