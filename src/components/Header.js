import React from 'react';
import logo from './Logo.png';
import axios from 'axios';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };

    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    axios.get('/api/profile')
      .then(response => {
        console.log(response.status)
        if (response.status == 200) {
          this.setState({ isLogged: true });
        }
      })
      .catch(error => { console.log(error.response) });
  }

  logout() {
    axios.post('/api/logout')
      .then(function (response) {
        console.log(response);
        alert("Sesion cerrada");
        window.location.href = "/";
      })
      .catch(error => {
        console.log(error.response);
        alert("Sesion cerrada");
        window.location.href = "/";
      });
  }

  render() {

    const { isLogged } = this.state;
    console.log("Render:");
    console.log(isLogged);

    var li = [];

    if (isLogged) {
      li.push(
        <ul className="site-menu js-clone-nav d-none d-md-block">
          <li><a href="/">Inicio</a></li>
          <li><a href="/Statistic">Estadisticas</a></li>
          <li><a href="/Fixture">Fixture</a></li>
          <li><a href="/Championship">Torneos</a></li>
          <li><a href="/MatchesList">Partidos</a></li>
          <li><a href="/TeamsList">Equipos</a></li>
          <li><a href="/LoadTeam">Cargar Equipo</a></li>
          <li><a href="/" onClick={this.logout}>Logout</a></li>
        </ul>
      );
    } else {
      li.push(
        <ul className="site-menu js-clone-nav d-none d-md-block">
          <li><a href="/">Inicio</a></li>
          <li><a href="/Statistic">Estadisticas</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      );
    }

    /*li.push(
      <ul className="site-menu js-clone-nav d-none d-md-block">
        <li><a href="/">Inicio</a></li>
        <li><a href="#">Noticias</a></li> 
        <li><a href="#">Partidos</a></li>
        <li><a href="/TeamsList">Equipos</a></li>
        <li><a href="/LoadTeam">Cargar Equipo</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/registration">Registrarse</a></li>
        <li><a href="/" onClick={this.logout}>Logout</a></li>
      </ul>
    );*/

    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div className="site-wrap">
          <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-logo">
                <a href="/"><img src={logo} alt="Image" /></a>
              </div>
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>
        </div>
        <header className="site-navbar relative transparent" role="banner">
          <div className="py-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-3">
                  <a href="https://www.facebook.com/UNQDeportes" className="text-secondary px-2 pl-0"><span className="icon-facebook" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-instagram" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-twitter" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-linkedin" /></a>
                </div>
                <div className="col-6 col-md-9 text-right">
                  <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-envelope mr-3" /> <span className="d-none d-md-block">deportes@unq.edu.ar</span></a></div>
                  <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-phone mr-0 mr-md-3" /> <span className="d-none d-md-block">+54 11 4365-7100 int. 5313 </span></a></div>
                </div>
              </div>
            </div>
          </div>
          <nav className="site-navigation position-relative text-right bg-black text-md-right" role="navigation">
            <div className="container position-relative">
              <div className="site-logo">
                <a href="/"><img src={logo} width="150" height="150" /></a>
              </div>
              <div className="d-inline-block d-md-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
              <ul className="site-menu js-clone-nav d-none d-md-block">
                <li> {/*className="has-children active"*/}
                  {/* <ul className="dropdown arrow-top">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                  <li className="has-children">
                    <a href="#">Sub Menu</a>
                    <ul className="dropdown">
                      <li><a href="#">Menu One</a></li>
                      <li><a href="#">Menu Two</a></li>
                      <li><a href="#">Menu Three</a></li>
                    </ul>
                  </li>
                </ul> */}
                </li>
              </ul>
              {li}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;