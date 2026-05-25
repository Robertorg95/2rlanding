import Container from "./Container.jsx";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="row align-items-center">
          <div className="col-md-8">
            <p className="footer-text">2|R Develops</p>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="footer-text">©2R Develops {year} Todos los derechos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
