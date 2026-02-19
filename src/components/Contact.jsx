import Container from "./Container.jsx";

const whatsappLink = "https://wa.me/526441491373";
const email = "2r.develops@gmail.com";

const Contact = () => {
  return (
    <section className="section section-alt" id="contacto">
      <Container>
        <div className="row align-items-start g-4">
          <div className="col-lg-8">
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">Si quieres, lo revisamos en 15 a 20 minutos</h2>
            <p className="section-text">
              Una conversación breve para entender tu operación administrativa y ver si hay oportunidades de mejora.
            </p>
            <div className="contact-actions d-flex flex-column flex-sm-row gap-2">
              <a
                className="btn btn-primary btn-cta"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Agendar por WhatsApp"
              >
                Agendar por WhatsApp
              </a>
              <a
                className="btn btn-outline-primary btn-cta"
                href={`mailto:${email}`}
                aria-label="Enviar correo"
              >
                Enviar correo
              </a>
            </div>
            <div className="contact-info contact-info-compact mt-3">
              <p className="mb-1">
                Correo: <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p className="mb-1">
                WhatsApp: <a href={whatsappLink}>+52 644 149 1373</a>
              </p>
              <p className="mb-0">
                LinkedIn: <a href="https://www.linkedin.com/in/jrobertorodriguezg/">linkedin.com/in/jrobertorodriguezg</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
