import Container from "./Container.jsx";

const steps = [
  {
    title: "Entendemos la operación",
    text: "Nos involucramos con el equipo para comprender el flujo real del trabajo.",
  },
  {
    title: "Diagnosticamos y detectamos áreas de oportunidad",
    text: "Identificamos mejoras posibles sin interrumpir lo que ya funciona.",
  },
  {
    title: "Diseñamos e implementamos soluciones proporcionales",
    text: "Desde mejoras en Excel y automatización de tareas, hasta sistemas internos.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section section-alt" id="como-trabajamos">
      <Container>
        <div className="row mb-4">
          <div className="col-lg-6">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="section-title">Proceso claro y gradual</h2>
          </div>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-md-4" key={step.title}>
              <div className="process-card">
                <div className="process-number">0{index + 1}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
