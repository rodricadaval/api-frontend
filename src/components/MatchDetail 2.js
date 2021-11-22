import React, { Component } from 'react';
import '../images/favicon.ico';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../vendor/animate/animate.css'
import '../vendor/select2/select2.min.css'
import '../vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../css/utilTable.css'
import '../css/mainTable.css'
import './MatchDetail.css'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PhotoPlayer from './PhotoPlayer.js';

class MatchDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            teamAId: this.props.match.params.teamAId,
            teamBId: this.props.match.params.teamBId,
            match: {},
            teamA: [],
            teamB: [],
            smShow: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount() {

        axios.get('/api/matchBy/' + this.state.id)
            .then(response => {
                if (response.status == 200) {
                    this.setState({ match: response.data });
                }
            })
            .catch(error => { console.log(error.response) });

        axios.get('/api/teamBy/' + this.state.teamAId)
            .then(response => {
                if (response.status == 200) {

                    var listData = response.data;
                    var statisticTeam = []
                    for (var i = 0; i < listData.length; i++) {
                        var current = listData[i]
                        statisticTeam.push(
                            {
                                id: current.id,
                                name: current.name,
                                lastName: current.lastName,
                                dni: current.dni,
                                photo: current.photo,
                                goals: 0,
                                yellowCard: 0,
                                redCard: 0
                            }
                        )
                    }
                    this.setState({ teamA: statisticTeam });
                }
            })
            .catch(error => { console.log(error.response) });


        axios.get('/api/teamBy/' + this.state.teamBId)
            .then(response => {
                if (response.status == 200) {

                    var listData = response.data;
                    var statisticTeam = []
                    for (var i = 0; i < listData.length; i++) {
                        var current = listData[i]
                        statisticTeam.push(
                            {
                                id: current.id,
                                name: current.name,
                                lastName: current.lastName,
                                dni: current.dni,
                                photo: current.photo,
                                goals: 0,
                                yellowCard: 0,
                                redCard: 0
                            }
                        )
                    }
                    this.setState({ teamB: statisticTeam });
                }
            })
            .catch(error => { console.log(error.response) });

    }

    updateState = (name, index, type, event) => {

        if (type == "teamA") {
            let newTeamA = Object.assign([], this.state.teamA);
            newTeamA[index][name] = parseInt(event.target.value);
            this.setState({ teamA: newTeamA });
        } else {
            if (type == "teamB") {
                let newTeamB = Object.assign([], this.state.teamB);
                newTeamB[index][name] = parseInt(event.target.value);
                this.setState({ teamB: newTeamB });
            } else {
                let newMatch = Object.assign({}, this.state.match);
                newMatch[name] = parseInt(event.target.value);
                this.setState({ match: newMatch });
            }
        }
    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { match } = this.state;
        const statistic = this.state.teamA.concat(this.state.teamB);
        const gameDTO = {
            teamAId: match.teamAId,
            teamAName: match.teamAName,
            teamBId: match.teamBId,
            teamBName: match.teamBName,
            date: match.date,
            startTime: match.startTime,
            goalsTeamA: match.goalsTeamA,
            goalsTeamB: match.goalsTeamB,
            matchweek: match.matchweek,
            statisticPlayer: statistic
        };

        console.log(gameDTO);

        axios.post('/api/matchUpdate/' + this.state.id, gameDTO)
            .then(function (response) {
                //window.location.reload();
                window.location.replace('/MatchesList');
            })
            .catch(error => { console.log(error.response) });
    }

    render() {

        const { teamA } = this.state;
        const { teamB } = this.state;
        const { match } = this.state;
        let smClose = () => this.setState({ smShow: false });

        return (
            <div>
                <Header />
                <br />
                <br />
                <div className="container">
                    <div className="bg-image overlay-success rounded mb-5" style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                <div className="text-center text-lg-left">
                                    <div className="d-block d-lg-flex align-items-center">
                                        <div className="image mx-auto mb-3 mb-lg-0 mr-lg-3">
                                        </div>
                                        <div className="text">
                                            <h3 className="h5 mb-0 text-black">{match.teamAName}</h3>
                                            <span className="text-uppercase small country text-black">Argentina</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 text-center mb-4 mb-lg-0">
                                <div className="d-inline-block">
                                    <p className="mb-2"><small className="text-uppercase text-black font-weight-bold">{"Fecha " + match.matchweek}</small></p>
                                    <div className="score py-2 px-4 mb-2 text-white d-inline-block rounded">
                                        <span className="h3">
                                            <input id="goalsTeamA" className="score2" name="goalsTeamA" type="number" value={match.goalsTeamA} min="0" onChange={this.updateState.bind(this, "goalsTeamA", 0, "match")} />
                                        </span>
                                    </div>
                                    <div className="score py-2 px-4 mb-2 text-white d-inline-block rounded">
                                        <span className="h3">
                                            <input id="goalsTeamB" className="score2" name="goalsTeamB" type="number" value={match.goalsTeamB} min="0" onChange={this.updateState.bind(this, "goalsTeamB", 0, "match")} />
                                        </span>
                                    </div>
                                    <p className="mb-0"><small className="text-uppercase text-black font-weight-bold">{match.date} - {match.startTime}</small></p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 text-center text-lg-right">
                                <div className>
                                    <div className="d-block d-lg-flex align-items-center">
                                        <div className="image mx-auto ml-lg-3 mb-3 mb-lg-0 order-2">
                                        </div>
                                        <div className="text order-1">
                                            <h3 className="h5 mb-0 text-black">{match.teamBName}</h3>
                                            <span className="text-uppercase small country text-black">Argentina</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button variant="danger" className="buttonSaveMatch" onClick={this.handleShow}>
                    Guardar Resultado
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="example-modal-sizes-title-sm" centered="true">
                    <Modal.Body>
                        <b>Una vez enviada la informacion no podrá editar el resultado
                            del partido y/o las estadisticas de los jugadores.
                            ¿ Desea guardar la información ? </b>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Volver
                        </Button>
                        <Button variant="success" onClick={this.handleSubmit}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>


                <div class="limiter">
                    <div class="container-table100">
                        <h1 className="h1 text-uppercase text-black font-weight-bold mb-3">{match.teamAName}</h1>
                        <div class="wrap-table100">
                            <div class="table100 ver1">
                                <div class="table100-firstcol">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1"> Nombre y Apellido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamA.map((playerA, index) =>
                                                <tr class="row100 body">
                                                    <td class="cell100 column1">
                                                        {playerA.name + " " + playerA.lastName + " "}
                                                        <PhotoPlayer photo={playerA.photo} name={playerA.name + " " + playerA.lastName} />
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="wrap-table100-nextcols js-pscroll">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr class="row100 head">
                                                    <th class="cell100 column2">DNI</th>
                                                    <th class="cell100 column3">Goles</th>
                                                    <th class="cell100 column4">Tarjeta Amarilla</th>
                                                    <th class="cell100 column5">Tarjeta Roja</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {teamA.map((playerA, index) =>

                                                    <tr class="row100 body">
                                                        <td class="cell100 column2">{playerA.dni.toLocaleString('de-DE', { style: 'decimal', decimal: '3' })}</td>
                                                        <td class="cell100 column3">
                                                            <input id="goals" name="goals" type="number" min="0" pattern="^[0-9]+" value={playerA.goals} onChange={this.updateState.bind(this, "goals", index, "teamA")} />
                                                        </td>
                                                        <td class="cell100 column4">
                                                            <select id="yellowCard" name="yellowCard" type="number" onChange={this.updateState.bind(this, "yellowCard", index, "teamA")}>
                                                                <option value="0" selected>0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                            </select>
                                                        </td>
                                                        <td class="cell100 column5">
                                                            <select id="redCard" name="redCard" type="number" onChange={this.updateState.bind(this, "redCard", index, "teamA")}>
                                                                <option value="0" selected>0</option>
                                                                <option value="1">1</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="limiter">
                    <div class="container-table100">
                        <h1 className="h1 text-uppercase text-black font-weight-bold mb-3">{match.teamBName}</h1>
                        <div class="wrap-table100">
                            <div class="table100 ver1">
                                <div class="table100-firstcol">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1"> Nombre y Apellido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamB.map((playerB) =>
                                                <tr class="row100 body">
                                                    <td class="cell100 column1">
                                                        {playerB.name + " " + playerB.lastName + " "}
                                                        <PhotoPlayer photo={playerB.photo} name={playerB.name + " " + playerB.lastName} />
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="wrap-table100-nextcols js-pscroll">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr class="row100 head">
                                                    <th class="cell100 column2">DNI</th>
                                                    <th class="cell100 column3">Goles</th>
                                                    <th class="cell100 column4">Tarjeta Amarilla</th>
                                                    <th class="cell100 column5">Tarjeta Roja</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {teamB.map((playerB, index) =>

                                                    <tr class="row100 body">
                                                        <td class="cell100 column2">{playerB.dni.toLocaleString('de-DE', { style: 'decimal', decimal: '3' })}</td>
                                                        <td class="cell100 column3">
                                                            <input id="goals" name="goals" type="number" min="0" pattern="^[0-9]+" value={playerB.goals} onChange={this.updateState.bind(this, "goals", index, "teamB")} />
                                                        </td>
                                                        <td class="cell100 column4">
                                                            <select id="yellowCard" name="yellowCard" type="number" onChange={this.updateState.bind(this, "yellowCard", index, "teamB")}>
                                                                <option value="0" selected>0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                            </select>
                                                        </td>
                                                        <td class="cell100 column5">
                                                            <select id="redCard" name="redCard" type="number" onChange={this.updateState.bind(this, "redCard", index, "teamB")}>
                                                                <option value="0" selected>0</option>
                                                                <option value="1">1</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="js/main.js"></script>
                <Footer />
            </div>
        );
    }

} export default MatchDetail;
