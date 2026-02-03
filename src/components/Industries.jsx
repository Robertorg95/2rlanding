import Container from "./Container.jsx";

const Industries = () => {
  return (
    <section className="section" id="empresas">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <p className="eyebrow">Empresas con las que trabajamos</p>
            <h2 className="section-title">Sectores que requieren orden</h2>
          </div>
          <div className="col-lg-6">
            <ul className="feature-list">
              <li>PyMes</li>
              <li>Clínicas privadas</li>
              <li>Empresas con varias sucursales</li>
              <li>Negocios que operan por proyectos</li>
              <li>Empresas con procesos administrativos complejos</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Industries;
