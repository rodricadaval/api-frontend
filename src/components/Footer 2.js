import React from 'react';

class Footer extends React.Component {
  render() {
    return (
    <footer className="site-footer border-top">
        <div style={{height:"290px"}} className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Torneos Internos</h3>
                <p>El deporte y la actividad física constituyen derechos que deben ser garantizados en todo el territorio nacional en tanto prácticas que promuevan la inclusión social, la integración y el desarrollo humano integral.</p>
              </div>

            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Menu Rápido</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/TeamsList">Partidos</a></li>
                    <li><a href="/Championship">Torneos</a></li>
                    <li><a href="/MatchesList">Equipos</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Politicas de Privacidad</a></li>
                    <li><a href="#">Contactenos</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Seguinos en Redes Sociales</h3>
                  <div>
                    <a href="#" className="pl-4 pr-4"><span className="icon-facebook" /></a>
                    <a href="#" className="pl-5 pr-5"><span className="icon-twitter" /></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                  </div>
                </div>
              </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright © Todos los derechos reservados<i aria-hidden="true" /> by <a href="https://www.unq.edu.ar" target="_blank">UNQ</a>
              </p>
            </div>
          </div>
        </div>
    </footer>
    );
  }
}


export default Footer;