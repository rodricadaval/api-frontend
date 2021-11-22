import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/aos.css';
import './css/style.css';
import quilmes from './images/quilmes.svg';
import TablePositions from './components/TablePositions';
import Matches from './components/Matches';
import banner from './images/banner.jpg'
import Header from './components/Header';
import Footer from './components/Footer';
import Rules from './components/Rules';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="site-blocks-vs site-section bg-light">
          <div className="container">

            <div class="portada">
              <img id="Fondo-Portada" className="rounded" src={banner} />
            </div>
            <br />
            <Rules />
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;