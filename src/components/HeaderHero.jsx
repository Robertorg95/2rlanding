import Container from "./Container.jsx";
import logo from "../images/2r develops logo25.png";
import heroImage from "../images/planeacion.png";

const HeaderHero = () => {
  return (
    <header className="hero">
      <Container>
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <div className="logo-placeholder">
              <img className="logo-image" src={logo} alt="2R Develops" />
            </div>
            <h1 className="hero-title">
              Consultoría en Sistemas y Procesos Operativos
            </h1>
            <p className="hero-subtitle">
              Ordenamos la operación, la información y los procesos antes de implementar soluciones tecnológicas.
            </p>
            <a className="btn btn-primary btn-cta" href="#contacto">
              Contacto directo
            </a>
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
