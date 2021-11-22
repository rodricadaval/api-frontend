import React, { Component } from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/owl.theme.default.min.css';
import '../css/aos.css';
import '../css/style.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './TeamsList.css';

class TeamsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch('/api/teams')
      .then(response => response.json())
      .then(data => this.setState({ teams: data }))
      .catch(error => { console.log(error.response) });
  }

  render() {

    const { teams } = this.state;
    var teamsHtml = [];

    if (teams.length > 0) {
      /*teamsHtml.push(
        teams.map((team) =>

          <div className="row">
            <li></li>
            <div className="col-lg-3 col-md-6 mb-4">{team.name}
            </div>
            <div className="col-lg-3 col-md-6 mb-4" >
              <Link to={"/teamsBy/" + team.id + "/" + team.name} className="btn btn-primary">Ver plantilla</Link>
            </div>
          </div>
        )
      )*/

      teamsHtml.push(
        teams.map((team) =>


          <li>{team.name} <Link to={"/teamsBy/" + team.id + "/" + team.name} className="btn btn-primary">Ver plantilla</Link></li>

        )
      )
    } else {
      teamsHtml.push(
        <div></div>
      );
    }

    return (
      <div>
        <Header />

        <div className="site-section">
          <div className="container">
            <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Equipos</h2>
            <ol id="lista4">
              {teamsHtml}
            </ol>
          </div>
        </div>


        <Footer />
      </div>

    );
  }
} export default TeamsList;
