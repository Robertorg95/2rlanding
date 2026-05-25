import Container from "./Container.jsx";
import logo from "../images/2r develops logo25.png";
import heroImage from "../images/planeacion.png";

const HeaderHero = () => {
  return (
    <header className="hero">
      <Container>
        <div className="row align-items-center gy-4">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="logo-placeholder">
              <img className="logo-image" src={logo} alt="2R Develops" />
            </div>
            <h1 className="hero-title">
              Consultoría en diseño y desarrollo de sistemas administrativos internos para empresas operativas
            </h1>
            <p className="hero-subtitle">
              Ordeno y estructuro la información administrativa de tu empresa para que tengas control, reportes claros y decisiones con datos confiables. Sin software genérico y sin complicaciones innecesarias.
            </p>
            <div className="hero-actions d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
              <a
                className="btn btn-primary btn-cta"
                href="https://wa.me/526441491373"
                target="_blank"
                rel="noreferrer"
                aria-label="Escribeme por WhatsApp"
              >
                Escríbeme por WhatsApp
              </a>
              <a
                className="btn btn-outline-primary btn-cta"
                href="mailto:2r.develops@gmail.com"
                aria-label="Enviar correo a 2r.develops@gmail.com"
              >
                Enviar correo
              </a>
            </div>
            <p className="hero-trust mt-3 mb-0">
              Diagnóstico, diseño e implementación a medida. Desde reportes y automatizaciones hasta sistemas internos por módulos.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="hero-panel">
              <div className="hero-panel-placeholder">
                <img className="hero-panel-image" src={heroImage} alt="Planeación" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderHero;
