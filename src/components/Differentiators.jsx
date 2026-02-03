import Container from "./Container.jsx";

const Differentiators = () => {
  return (
    <section className="section section-alt" id="diferenciadores">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <p className="eyebrow">Diferenciadores</p>
            <h2 className="section-title">Acompañamiento real</h2>
          </div>
          <div className="col-lg-6">
            <ul className="feature-list">
              <li>No soluciones genéricas</li>
              <li>Acompañamiento directo</li>
              <li>Implementación basada en la operación real</li>
              <li>Transiciones graduales, no disruptivas</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Differentiators;
