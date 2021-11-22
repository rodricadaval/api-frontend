import React, { Component } from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Rules.css';
import reglamento from '../images/reglamento.jpg';

class Rules extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            lgShow: false,
        };
    }

    render() {
        let lgClose = () => this.setState({ lgShow: false });

        return (

            <Jumbotron className="containerj">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>
                    <button type="button" id="buttonVer" class="btn btn-light btn-lg" onClick={() => this.setState({ lgShow: true })}>Ver</button>
                </p>

                <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={lgClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Reglamento "Torneo UNQ"
                </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h5>1- De los participantes:</h5>
                        <br></br>
                        <p>
                            Podrán participar del torneo interno Futbol 5 alumnos regulares de las diferentes unidades
    académicas de la Universidad Nacional de Quilmes. Los alumnos podrán agruparse libremente,
    teniendo como requisitos la regularidad antes mencionada y la presentación del Listado de
    Buena Fé.
                        </p>
                        <br></br>
                        <h5>2- De las inscripciones:</h5>
                        <br></br>
                        <p>
                            Las inscripciones se realizarán completando la Lista de Buena fé que se encuentra en la oficina
    de Deportes UNQ situada en el gimnasio de la Universidad. La misma deberá conformarse por
    un mínimo de 7 (siete) jugadores y un máximo de 12 (doce) jugadores.
                        </p>
                        <br></br>
                        <h5>3- De las acreditaciones:</h5>
                        <br></br>
                        <p>
                            Los participantes deberán acudir con al menos 20 minutos de antelación al horario pactado de
    la fecha del partido para presentar:</p>
                        <p>- Documento que acredite su identidad.</p>
                        <p>- Libreta Estudiantil, certificado de alumno regular, o comprobante de Inscripción a la
    Universidad en el caso de los ingresantes 2019 (ciclo introductorio).</p>
                        <p>- Deslinde de responsabilidades.
                        El participante que no cuente con la documentación requerida al momento del partido estará
                        inhabilitado para jugar.
                        </p>

                        <br></br>
                        <h5>4- De los días de juego, horas y lugares:</h5>
                        <br></br>
                        <p>
                            Los días, horarios y lugares de juego serán determinados por la organización del torneo y se
comunicarán previamente a los responsables de cada equipo como fue acordado en la reunión
de delegados. Los mismos deberán ser aceptados por los equipos, sin posibilidad de efectuar
ningún tipo de cambio y/o reclamo a la Organización. Las fechas pueden ser suspendidas o
modificadas debido a condiciones climáticas adversas, caso fortuito o de fuerza mayor.
                        </p>

                        <br></br>
                        <h5>5- Del tribunal de disciplina deportiva:</h5>
                        <br></br>
                        <p>
                            Los jugadores, entrenadores, delegados, etc. que cometan faltas que se contradigan con el
    espíritu del torneo serán juzgados por el código de transgresiones y penas del evento por
    intermedio del tribunal de disciplina conformado para tales fines, siendo las sanciones
    oportunamente comunicadas.
                        </p>

                        <br></br>
                        <h5>6- Del comportamiento dentro y adyacencias de las canchas:</h5>
                        <br></br>
                        <p>
                            Estará prohibido fumar dentro de la cancha, e ingerir bebidas alcohólicas dentro y en las
    adyacencias de la misma, antes y durante el partido. Los jugadores que infringieran esta regla
    no podrán participar del encuentro de ese día y se actuará de acuerdo al reglamento de
    sanciones.
                        </p>
                    </Modal.Body>
                </Modal>
            </Jumbotron>
        );
    }

} export default Rules;