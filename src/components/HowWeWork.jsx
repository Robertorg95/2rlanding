import Container from "./Container.jsx";

const steps = [
  {
    title: "Diagnóstico operativo",
    text: "Mapeo de procesos administrativos e información actual.",
  },
  {
    title: "Diseño de estructura",
    text: "Definición de datos, reglas, flujos y responsables.",
  },
  {
    title: "Implementación",
    text: "Herramientas proporcionales al negocio (de lo simple a lo robusto).",
  },
  {
    title: "Adopción",
    text: "Capacitación, ajustes y acompañamiento para uso real.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section" id="como-trabajo">
      <Container>
        <div className="row mb-4">
          <div className="col-lg-6">
            <p className="eyebrow">Cómo trabajo</p>
            <h2 className="section-title">Implementación por etapas</h2>
          </div>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={step.title}>
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
