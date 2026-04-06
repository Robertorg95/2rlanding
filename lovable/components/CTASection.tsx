import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import logoMono from "@/assets/2r develops monologo25.png";

const CTASection = () => (
  <section id="contacto" className="relative section-padding overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="relative max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={logoMono} alt="2R" className="h-12 mx-auto mb-8 brightness-0 invert opacity-40" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-display tracking-tight">
          Agenda una llamada de diagnostico
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto">
          Revisemos si tu operacion encaja con el modelo 2R y que alcance tendria una implementacion inicial.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:2r.develops@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-white text-primary font-semibold text-sm hover:bg-brand-white/90 transition-colors"
          >
            Enviar correo <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/526441491373"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium text-sm hover:bg-brand-white/5 transition-colors"
          >
            <MessageCircle size={16} /> Escribir por WhatsApp
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/50 text-sm">
          <a href="mailto:2r.develops@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
            <Mail size={14} /> 2r.develops@gmail.com
          </a>
          <a href="tel:+526441491373" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
            <Phone size={14} /> +52 644 149 1373
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
