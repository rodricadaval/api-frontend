import * as React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { SnackbarContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';
import Modal from 'react-bootstrap/Modal'
import '../css/checkbox.css';
import '../css/style.css';

const useStyles = ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: 3,
  },
});

class TeamsChampionship extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      message: '',
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);  
  }
  
  componentDidMount() {
    this.selectedTeams = [];
    
  }

  componentWillMount = () => {
    fetch('/api/teamsNotAssigned')
    .then(response => response.json())
    .then(data => this.setState({teams: data}))
    .catch(error => {console.log(error.response)});
  }

  handleAllChecked = (event) => {
    let teams = this.state.teams
    teams.forEach(team => team.isChecked = event.target.checked) 
    this.setState({teams: teams})
  }

  handleCheckChieldElement = (event) => {
    let teams = this.state.teams
    teams.forEach(team => {
       if (team.name === event.target.name)
          team.isChecked =  event.target.checked
    })
    this.setState({teams: teams})
  }

  handleSubmit = (event) => {
    let teams = this.state.teams
    if (teams.length == 0)
    {
      this.setState({openErrorModal : true,message: "Todos los equipos se encuentran agregados al torneo"})
    }
    else{
      teams.forEach(team => {
        if(team.isChecked)
        {
         this.selectedTeams.push(team.id);
        }
      })

    if(this.selectedTeams.length == 0)
    {
    this.setState({openErrorModal : true,message:"Debe seleccionar al menos un equipo antes de guardar"});
    }
    else
    {
      event.preventDefault();
      axios.post('/api/addTeams/',this.selectedTeams)
      .then(function (response) {
          window.location.replace('./Championship');
      })
      .catch(error => {console.log(error.response)});
      }
    }
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseWindow = () => {
    this.setState({ show: false });
}

  handleShow() {
    this.setState({ show: true });
  }

  handleCloseModal = () => {
    this.setState({ openErrorModal: false });
  };

  redirect = () => {
    return <Redirect to='./Championship' />
  };

  render() {

    const {teams,message} = this.state;

    return (
      <>
         <Button style={{marginLeft:"10px"}} variant="primary" onClick={this.handleShow}>
           Agregar Equipos
         </Button>

      <Modal show={this.state.show} onHide={this.handleCloseWindow} aria-labelledby="contained-modal-title-vcenter" centered>
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
          variant="error"
          message={<label><ErrorIcon/> {message}</label>}
          style={{backgroundColor: "red"}}
        />
      </Snackbar>
          <Modal.Header closeButton>
            <Modal.Title>Agregar equipos al torneo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <label>Seleccionar Todos los Equipos</label>
            <div class="checkboxOne">
              <input class="invisible" id="checkboxOneInput" type="checkbox" onClick={this.handleAllChecked}  value="checkedall"/>
              <label for="checkboxOneInput"></label>
            </div>
          <br/> 
            {
              teams.map(team => (
                <div class="checkboxChild">
                  <span class="paragraph1">{team.name}</span>
                  <input class="invisible" type="checkbox" key={team.id} id= {team.id} name={team.name} onClick={this.handleCheckChieldElement} checked={team.isChecked} value={team.value}/>
                  <label for={team.id}></label>
                </div>
              ))
            }
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

export default TeamsChampionship;