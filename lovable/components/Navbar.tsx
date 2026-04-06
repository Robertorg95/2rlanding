import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logoFull from "@/assets/2r develops logo25.png";

const navLinks = [
  { label: "Inicio", href: "#hero", route: "/" },
  { label: "Modulos", href: "#modulos", route: "/" },
  { label: "Implementacion", href: "#como-funciona", route: "/" },
  { label: "Inversion", href: "#inversion", route: "/" },
  { label: "Contacto", href: "#contacto", route: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (link: (typeof navLinks)[0]) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + link.href);
      return;
    }
    const el = document.querySelector(link.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <img src={logoFull} alt="2R Develops" className="h-8 md:h-10" />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo({ label: "Contacto", href: "#contacto", route: "/" })}
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors"
          >
            Agendar diagnostico
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l)}
                  className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo({ label: "Contacto", href: "#contacto", route: "/" })}
                className="mt-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
              >
                Agendar diagnostico
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
