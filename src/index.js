import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TeamsList from './components/TeamsList'
import LoadTeam from './components/LoadTeam';
import TeamDetail from './components/TeamDetail';
import Championship from './components/Championship';
import NewChampionship from './components/NewChampionship';
import EditChampionship from './components/EditChampionship';
import TeamsChampionship from './components/TeamsChampionship';
import Registration from './Registration';
import Login from './Login';
import Fixture from './components/Fixture';
import MatchesList from './components/MatchesList';
import MatchDetail from './components/MatchDetail';
import Statistic from './components/Statistic';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/TeamsList" component={TeamsList} />
      <Route path="/LoadTeam" component={LoadTeam} />
      <Route path="/teamsBy/:id/:name" component={TeamDetail} />
      <Route path="/Championship" component={Championship} />
      <Route path="/NewChampionship" component={NewChampionship} />
      <Route path="/registration" component={Registration} />
      <Route path="/EditChampionship/:id" component={EditChampionship} />
      <Route path="/TeamsChampionship" component={TeamsChampionship} />
      <Route path="/login" component={Login} />
      <Route path="/Fixture" component={Fixture} />
      <Route path="/MatchesList" component={MatchesList} />
      <Route path="/matchBy/:id/:teamAId/:teamBId" component={MatchDetail} />
      <Route path="/Statistic" component={Statistic} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();