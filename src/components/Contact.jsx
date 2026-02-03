import Container from "./Container.jsx";

const Contact = () => {
  return (
    <section className="section" id="contacto">
      <Container>
        <div className="row align-items-start g-4">
          <div className="col-lg-8">
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">Revisemos tu operación sin compromiso</h2>
            <p className="section-text">
              Una conversación breve para entender tu situación actual y ver si
              podemos ayudarte.
            </p>
            <div className="contact-actions">
              <a
                className="btn btn-primary btn-cta"
                href="https://wa.me/526441491373"
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="contact-info contact-info-compact">
              <p className="mb-1">Correo: 2r.develops@gmail.com</p>
              <p className="mb-0">
               <a href="https://www.linkedin.com/in/jrobertorodriguezg/">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
