import Container from "./Container.jsx";

const WhatWeDo = () => {
  return (
    <section className="section" id="problema">
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <p className="eyebrow">El problema que resuelvo</p>
            <h2 className="section-title">La administración se queda atrás cuando la operación crece</h2>
            <p className="section-text">
              Cuando una empresa crece, la administración suele quedarse atrás. Aparecen síntomas como:
            </p>
          </div>
          <div className="col-lg-5">
            <ul className="feature-list">
              <li>Información dispersa en varios archivos</li>
              <li>Reportes manuales que consumen horas</li>
              <li>Dificultad para dar seguimiento a proyectos, pedidos o sucursales</li>
              <li>Falta de trazabilidad en presupuestos, gastos y cobros</li>
              <li>Decisiones con datos incompletos o tardíos</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
