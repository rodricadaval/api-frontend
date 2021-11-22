import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SnackbarContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class NewChampionship extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: false,
      openErrorModal: false,
      nameError: '',
      descriptionError: '',
      startDateError: '',
      finishDateError: '',
      championship: {
        name: '',
        description: '',
        startDate: '',
        finishDate: '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.validateForm();
    if (this.state.nameError !== null ||
      this.state.descriptionError !== null ||
      this.state.startDateError !== null ||
      this.state.finishDateError !== null) {

      this.setState({ openErrorModal: true });
    }
    else {
      axios.post('/api/championshipCreate/', this.state.championship)
        .then(function (response) {
          window.location.reload()
        })
        .catch(error => { console.log(error.response) });
    }

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseModal = () => {
    this.setState({ openErrorModal: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  }

  handleCloseWindow = () => {
    this.setState({ show: false });
  }

  redirect = () => {
    return <Redirect to='./Championship' />
  };

  updateState = (name, event) => {
    let newChampionship = Object.assign({}, this.state.championship);
    newChampionship[name] = event.target.value;
    this.validateForm();
    this.setState({ championship: newChampionship });
  };

  validateForm = () => {
    const { name, description, startDate, finishDate } = this.state.championship;
    this.setState({
      nameError: name.length > 5 ? null : "Por favor complete un nombre valido para el torneo",
      descriptionError: description.length > 10 ? null : "Por favor complete una descripción mayor a 10 caracteres",
      startDateError: startDate !== '' ? null : "Por favor ingrese una fecha de inicio para el torneo",
      finishDateError: finishDate !== '' ? null : "Por favor ingrese una fecha de fin para el torneo",
    });
  }

  render() {
    return (
      <>
        <Button style={{ marginLeft: "10px", marginRight: "10px" }} variant="primary" onClick={this.handleShow}>
          Crear Torneo
      </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openErrorModal}
          autoHideDuration={3000}
          onClose={this.handleCloseModal}
        >
          <SnackbarContent
            onClose={this.handleCloseModal}
            variant="error"
            message={<label><ErrorIcon /> {"Por favor complete todos los campos antes de guardar"}</label>}
            style={{ backgroundColor: "red" }}
          />
        </Snackbar>
        <Modal style={{ top: "130px" }} show={this.state.show} onHide={this.handleCloseWindow} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Crear torneo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <List>
              <ListItem >
                <input
                  label="Nombre"
                  placeholder="Ingrese un nombre para el torneo"
                  onChange={this.updateState.bind(this, 'name')}
                  value={this.state.championship.name}
                  onBlur={this.validateForm}
                  className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                />
              </ListItem>
              <ListItem className='invalid-feedback' style={{ marginTop: "-10px" }}>{this.state.nameError}</ListItem >
              <Divider />
              <ListItem >
                <input
                  label="Descripción"
                  placeholder="Ingrese una descripción"
                  onChange={this.updateState.bind(this, 'description')}
                  value={this.state.championship.description}
                  onBlur={this.validateForm}
                  className={`form-control ${this.state.descriptionError ? 'is-invalid' : ''}`}
                />
              </ListItem>
              <ListItem className='invalid-feedback' style={{ marginTop: "-10px" }}>{this.state.descriptionError}</ListItem >
              <Divider />
              <br />
              <ListItemText >
                <label htmlFor="startDate">Fecha Inicio</label>
                <input
                  id="startDate"
                  type="date"
                  label="Fecha Finalizacion"
                  onChange={this.updateState.bind(this, 'startDate')}
                  className={`form-control ${this.state.startDateError ? 'is-invalid' : ''}`}
                  onBlur={this.validateForm}
                />
              </ListItemText>
              <ListItem className='invalid-feedback' style={{ marginTop: "-10px" }}>{this.state.startDateError}</ListItem >
              <Divider />
              <br />
              <ListItemText>
                <label htmlFor="finishDate">Fecha Finalizacion</label>
                <input
                  id="finishDate"
                  type="date"
                  label="Fecha Finalizacion"
                  onChange={this.updateState.bind(this, 'finishDate')}
                  value={this.state.championship.finishDate}
                  className={`form-control ${this.state.finishDateError ? 'is-invalid' : ''}`}
                  onBlur={this.validateForm}
                />
              </ListItemText>
              <ListItem className='invalid-feedback' style={{ marginTop: "-10px" }}>{this.state.finishDateError}</ListItem >
            </List>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseWindow}>
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

export default NewChampionship;
