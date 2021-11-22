import React from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/owl.theme.default.min.css';
import '../css/aos.css';
import '../css/style.css';
import axios, { post } from 'axios';
import Header from './Header';
import Footer from './Footer';

class LoadTeam extends React.Component {

	constructor(props) {
    	super(props);
    	this.state ={
      		file:null
    	}
    	this.onFormSubmit = this.onFormSubmit.bind(this)
    	this.onChange = this.onChange.bind(this)
    	this.fileUpload = this.fileUpload.bind(this)
  	}

  	onFormSubmit(e){
    	e.preventDefault() // Stop form submit
    	this.fileUpload(this.state.file).then((response)=>{
			  alert("Carga Exitosa");
			  window.location.reload();
    	})
  	}
  
  	onChange(e) {
    	this.setState({file:e.target.files[0]})
  	}
  
  	fileUpload(file){
    	const url = '/api/uploadTeam';
    	const formData = new FormData();
    	formData.append('file',file)
    	const config = {
        	headers: {
            	'content-type': 'multipart/form-data'
        	}
    	}
    	return  post(url, formData,config)
  	}

	render() {
    	return (
      <div>
      <Header/>
      <div className="site-section">
       <div className="container">
         <div className="row">
          <div className="col-md-12 text-center mb-5">
             <h2 className="text-black">En esta seccion pobra cargar los equipos con sus respectivos jugadores</h2>
           </div>
           <div className="col-md-12 text-center mb-5">
             <h6 className="text-black">Aclaración: chequear que los datos en el excel estan correctos antes de cargar el equipo.</h6>
           </div>
         </div>
         
         <form onSubmit={this.onFormSubmit}>
          <input type="file" onChange={this.onChange} />
          <button type="submit" class="btn btn-warning">Cargar</button>
        </form>

       </div>
     </div>
      <Footer/>
    </div>
    );
  }
}
export default LoadTeam;