import Container from "./Container.jsx";

const Industries = () => {
  return (
    <section className="section" id="para-quien-es">
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <p className="eyebrow">Para quién es</p>
            <h2 className="section-title">Empresas operativas en crecimiento</h2>
            <p className="section-text">
              Ideal para empresas operativas con operación diaria, varias áreas, proyectos o sucursales, que dependen de Excel, WhatsApp y reportes manuales.
            </p>
          </div>
          <div className="col-lg-5">
            <ul className="feature-list">
              <li>Construcción e ingeniería</li>
              <li>Servicios técnicos e industriales</li>
              <li>Distribución y empresas con inventario</li>
              <li>Clínicas y servicios con agenda</li>
              <li>Empresas en crecimiento con control administrativo débil</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Industries;
