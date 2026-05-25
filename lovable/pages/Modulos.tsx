import { motion } from "framer-motion";
import { Users, FileText, FolderKanban, Wallet, Package, Camera, Shield, BarChart3, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    icon: Users,
    name: "Clientes y proveedores",
    short: "Centraliza contactos, historial comercial, servicios, compras, cotizaciones y proyectos relacionados con cada cliente o proveedor.",
    detail: "Centraliza la información clave de clientes y proveedores en un solo lugar. Para proveedores, permite consultar datos de contacto, historial de compras, servicios prestados y relación con proyectos u operaciones. Para clientes, concentra contacto, cotizaciones generadas, proyectos realizados e historial de seguimiento comercial y operativo.",
  },
  {
    icon: FileText,
    name: "Cotizaciones",
    short: "Estandariza propuestas y conecta servicios y productos para agilizar cotizaciones personalizadas.",
    detail: "Estandariza el proceso de cotización mediante formatos estructurados y conectados al catálogo de servicios y productos de la empresa. Esto permite generar propuestas más rápidas, claras y personalizadas para cada cliente, reduciendo errores manuales y mejorando el control comercial.",
  },
  {
    icon: FolderKanban,
    name: "Proyectos",
    short: "Gestiona proyectos desde la cotización autorizada o creación directa, con trazabilidad, evidencias, estatus y avances.",
    detail: "Permite gestionar proyectos desde una cotización autorizada o mediante su creación directa dentro del sistema. Reúne la información general del proyecto, evidencias, trazabilidad de acciones, tiempos, estatus, avances y seguimiento operativo, facilitando una visión clara de cada etapa del trabajo.",
  },
  {
    icon: Wallet,
    name: "Presupuestos y control de gastos",
    short: "Controla presupuesto, gastos, avances y desempeño financiero de cada proyecto.",
    detail: "Organiza el control financiero de cada proyecto desde su propio panel. Aquí se registran gastos, avances del equipo, presupuesto asignado, consumo real y desempeño monetario del proyecto, permitiendo comparar lo planeado contra lo ejecutado y mejorar la toma de decisiones.",
  },
  {
    icon: Package,
    name: "Inventarios",
    short: "Administra entradas, salidas, movimientos, existencias, códigos, escaneo y organización por almacén o estantería.",
    detail: "Facilita el control y administración del inventario de la empresa, incluyendo entradas, salidas, movimientos y existencias. Puede integrarse con escaneo, generación de códigos o claves, y organización por estanterías, almacenes o ubicaciones, dando mayor orden y trazabilidad al inventario operativo.",
  },
  {
    icon: Camera,
    name: "Evidencias y documentos",
    short: "Resguarda evidencias operativas y documentos clave vinculados a proyectos y procesos.",
    detail: "Concentra las evidencias operativas de los proyectos y el resguardo de documentos esenciales para la empresa. Permite asociar archivos, comprobantes, imágenes, facturas u otros documentos al registro correspondiente, manteniendo la información ordenada, accesible y vinculada a la operación real.",
  },
  {
    icon: Shield,
    name: "Roles y permisos",
    short: "Define accesos y restricciones por usuario según su función dentro de la empresa.",
    detail: "Controla el acceso de los usuarios al sistema según su rol, función o nivel de intervención. Permite asignar, restringir o remover permisos por módulo, acción o tipo de usuario, ayudando a mantener orden, seguridad y control sobre la información.",
  },
  {
    icon: BarChart3,
    name: "Dashboard operativo",
    short: "Visualiza indicadores y métricas de los distintos módulos para seguimiento y control.",
    detail: "Reúne la analítica e indicadores clave de la operación en un solo espacio visual. Permite consultar métricas de proyectos, gastos, presupuestos, inventarios y otros módulos, brindando visibilidad clara para seguimiento administrativo, control operativo y toma de decisiones.",
  },
];

const scrollToCTA = () => {
  window.location.href = "/#contacto";
};

const ModulosPage = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-wider text-accent"
        >
          Plataforma modular
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl md:text-5xl font-bold font-display text-foreground leading-tight"
        >
          Módulos que se adaptan a tu operación
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Cada módulo resuelve una necesidad operativa específica. Actívalos según lo que tu empresa requiera hoy y escala conforme crezcas.
        </motion.p>
      </div>
    </section>

    {/* Modules detail */}
    <section className="section-padding bg-card pb-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {modules.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all"
          >
            <div className="flex-shrink-0">
              <div className="p-3 rounded-xl bg-accent/10 w-fit group-hover:bg-accent/15 transition-colors">
                <m.icon size={28} className="text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-foreground font-display">{m.name}</h2>
              <p className="mt-1 text-sm text-accent font-medium">{m.short}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold font-display text-foreground"
        >
          ¿Quieres saber qué módulos necesita tu empresa?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-muted-foreground"
        >
          Agenda un diagnóstico y definimos juntos el alcance ideal para tu operación.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={scrollToCTA}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
        >
          Agendar diagnóstico
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>

    <Footer />
  </>
);

export default ModulosPage;
