import Container from "./Container.jsx";

const WhatWeDo = () => {
  return (
    <section className="section" id="que-hacemos">
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <p className="eyebrow">Qué hacemos</p>
            <h2 className="section-title">Orden y claridad operativa</h2>
            <p className="section-text">
              Acompañamos a las empresas a ordenar su operación diaria, estructurar
              su información y mejorar sus procesos administrativos. Nuestra
              prioridad es que cada ajuste se sienta útil y manejable para el
              equipo.
            </p>
          </div>
          <div className="col-lg-5">
            <ul className="feature-list">
              <li>Ordenar la operación antes de digitalizar</li>
              <li>Definir información clave para decidir mejor</li>
              <li>Mejorar procesos sin fricción</li>
              <li>Implementar tecnología solo cuando aporta valor</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
