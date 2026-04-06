import logoFull from "@/assets/2r develops logo25.png";

const Footer = () => (
  <footer className="px-6 py-10 bg-card border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logoFull} alt="2R Develops" className="h-7 opacity-60" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} 2R Develops. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
