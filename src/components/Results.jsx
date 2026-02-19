import Container from "./Container.jsx";

const Results = () => {
  return (
    <section className="section section-alt" id="resultados-tipicos">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <p className="eyebrow">Resultados típicos</p>
            <h2 className="section-title">Mejor control y claridad administrativa</h2>
          </div>
          <div className="col-lg-6">
            <ul className="feature-list">
              <li>Reportes listos sin consolidación manual</li>
              <li>Información centralizada y confiable</li>
              <li>Visibilidad por sucursal, proyecto o área</li>
              <li>Mejor control administrativo y seguimiento</li>
              <li>Decisiones más rápidas con KPIs claros</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Results;
