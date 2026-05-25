import Container from "./Container.jsx";

const WhatNotDo = () => {
  return (
    <section className="section" id="que-no-hago">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <p className="eyebrow">Qué no hago</p>
            <h2 className="section-title">Alcance claro del servicio</h2>
          </div>
          <div className="col-lg-6">
            <ul className="feature-list">
              <li>No vendo software genérico</li>
              <li>No vendo licencias SaaS masivas</li>
              <li>No hago páginas web básicas como servicio principal</li>
              <li>No doy soporte de Excel aislado sin estructura</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatNotDo;
