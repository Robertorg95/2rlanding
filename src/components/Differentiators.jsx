import Container from "./Container.jsx";

const Differentiators = () => {
  return (
    <section className="section section-alt" id="que-implemento">
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <p className="eyebrow">Qué implemento</p>
            <h2 className="section-title">Sistemas administrativos adaptados a tu operación</h2>
            <p className="section-text">
              Diseño e implemento sistemas administrativos internos adaptados a la operación real de cada empresa para:
            </p>
          </div>
          <div className="col-lg-5">
            <ul className="feature-list">
              <li>Centralizar información de clientes, proyectos, ventas o sucursales</li>
              <li>Estandarizar captura de datos y reducir retrabajo</li>
              <li>Automatizar reportes periódicos y KPIs para dirección</li>
              <li>Dar trazabilidad y claridad administrativa en el día a día</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-10">
            <p className="section-text mb-0">
              La tecnología se elige según el caso. Puede ser desde Excel estructurado hasta una plataforma interna con base de datos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Differentiators;
