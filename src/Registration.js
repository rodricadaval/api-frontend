import * as React from 'react';
import axios from "axios/index";
import './images/favicon.ico';
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/iconic/css/material-design-iconic-font.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/select2/select2.min.css'
import './vendor/daterangepicker/daterangepicker.css'
import './css/util.css'
import './css/main.css'
import './Login.css'
import logo from './images/logo.png';

class Registration extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				username: undefined,
				password: undefined,
				passwordConfirm: undefined
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post('/api/registration', this.state.user)
			.then(function (response) {
				console.log(response);
				alert("Se ha registrado exitosamente");
				window.location.href = "/";
			})
			.catch(error => { console.log(error.response) });
	}

	updateState = (name, event) => {
		let newUser = Object.assign({}, this.state.user);
		newUser[name] = event.target.value;
		this.setState({ user: newUser });
	};

	render() {

		return (
			<div>

				<body>

					<div class="limiter">
						<div class="container-login100">
							<div class="wrap-login100">
								<form class="login100-form validate-form" onSubmit={this.handleSubmit}>
									<span class="login100-form-logo">
										<img class="logo" src={logo}/>
									</span>

									<span class="login100-form-title p-b-34 p-t-27">
										Registrarse
									</span>

									<div class="wrap-input100 validate-input" data-validate="Ingrese su Nombre">
										<input class="input100" id="username" name="username" type="text" value={this.state.user.username} onChange={this.updateState.bind(this, 'username')} placeholder="Nombre" />
										<span class="focus-input100" data-placeholder="&#xf207;"></span>
									</div>

									<div class="wrap-input100 validate-input" data-validate="Enter password">
										<input class="input100" id="password" name="password" value={this.state.user.password} type="pass" onChange={this.updateState.bind(this, 'password')} placeholder="Contraseña" />
										<span class="focus-input100" data-placeholder="&#xf191;"></span>
									</div>

									<div class="wrap-input100 validate-input" data-validate="Enter password">
										<input class="input100" id="passwordConfirm" name="passwordConfirm" value={this.state.user.passwordConfirm} type="pass" onChange={this.updateState.bind(this, 'passwordConfirm')} placeholder="Repetir Contraseña" />
										<span class="focus-input100" data-placeholder="&#xf191;"></span>
									</div>

									<div class="container-login100-form-btn">
										<button class="login100-form-btn">
											Registrarse
										</button>
									</div>

									<div class="text-center p-t-90">
										<a class="txt1" href="#">
											Olvido su contraseña?
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>


					<div id="dropDownSelect1"></div>

					<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
					<script src="vendor/animsition/js/animsition.min.js"></script>
					<script src="vendor/bootstrap/js/popper.js"></script>
					<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
					<script src="vendor/select2/select2.min.js"></script>
					<script src="vendor/daterangepicker/moment.min.js"></script>
					<script src="vendor/daterangepicker/daterangepicker.js"></script>
					<script src="vendor/countdowntime/countdowntime.js"></script>
					<script src="js/main.js"></script>

				</body>

			</div>

		);
	}

}
export default Registration;