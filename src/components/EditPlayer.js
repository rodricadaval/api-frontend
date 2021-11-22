import * as React from 'react';
import axios from "axios/index";
import { TiEdit } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CreatePlayer.css';

class EditPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {},
            id: this.props.id,
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);  
    }

    componentDidMount() {
        fetch('/api/playerById/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({player: data}))
            .catch(error => {console.log(error.response)});
    }

    updateState = (name,event) => {
        let newPlayer = Object.assign({},this.state.player);
        newPlayer[name] = event.target.value;
        this.setState({player:newPlayer});
    };

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/playerUpdate/'+this.state.id,this.state.player)
        .then(function (response) {
            window.location.reload();
        })
        .catch(error => {console.log(error.response)});
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <>
            <Button variant="info" onClick={this.handleShow}>
                <TiEdit />
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="example-modal-sizes-title-sm"  centered="true">
                <Modal.Header closeButton>
                    <Modal.Title>Editar A {this.state.player.lastName}</Modal.Title>
                </Modal.Header>
            <Modal.Body>  
                <form>

                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" value={this.state.player.name} onChange={this.updateState.bind(this,'name')}/>
                    <br/>

                    <label htmlFor="lastName">Apellido</label>
                    <input id="lastName" name="lastName" value={this.state.player.lastName} type="text"  onChange={this.updateState.bind(this,'lastName')}/>
                    <br/>      

                    <label htmlFor="dni">DNI</label>
                    <input id="dni" name="dni" value={this.state.player.dni} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'dni')} />
                    <br/>

                    <label htmlFor="birthdate">Fecha de Nacimiento</label>
                    <input id="birthdate" name="birthdate" value={this.state.player.birthdate} type="date" onChange={this.updateState.bind(this,'birthdate')} />
                    <br/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Salir
                </Button>
                <Button variant="primary" onClick={this.handleSubmit}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
        );
    }
}
export default EditPlayer;
