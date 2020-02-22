import axios from 'axios';
import {
    Box,
    ButtonPress,
    Text,
    Label
} from './styled';
import React, { Component } from 'react';
/*import {

} from 'prop-types';*/

class Login extends Component {
	static propTypes = {
		
    }    

    constructor(props){ //Almacena los datos
        super(props); //Hereda toda la funcionalidad de react
		this.state = { //Estado de los datos en una aplicacion en react, valores por default
            dni: '',
            password: '',
		};
	}

	componentDidMount = () => { //Se ejecuta después que la salida del componente ha sido renderizada en el DOM
		axios.post(`https://dev-backend.medicosonline.app/api/patient/login`).then(res =>{
            console.log('res', res);
        });
    }

    _handleInputDni = (e) => { //Guardo los cambios del input
		this.setState({
			dni: e.target.value
		});
    }
    
    _handleInputPassword = (e) => { //Guardo los cambios del input
        this.setState({
            password: e.target.value
        });
    }
/*
_handleAgeSearch = () => {
    const {
        enteredAge
    } = this.state;
    this.setState({
        enteredAgeAux: enteredAge,
    }, () => {
        this._handleFilterApplication();
    });
}
*/

    _handleValidateForm = () => {
        //const { dni, password } = this.state;
        console.log('Se toco verificar');
    }

    render() {  
        const {
            dni,
            password,
        } = this.state;

        return (
            <div>
                <Box>
                    
                    <h2>BIENVENIDO</h2>
                    <Label>DNI</Label>
                    <input
						onChange={ this._handleInputDni }
						placeholder='Ingrese su DNI'
						type= "number"
                        value={ dni }
					>
					</input>

                    <Label>Password</Label>
                    <input
						onChange={ this._handleInputPassword }
						placeholder='Ingrese su contraseña'
						type="password"
                        value={ password }
            		>
					</input>
                    {
                        dni.length > 0 && password.length > 0
                            ? <Text> Presione el botón para verificar </Text>
                            : <Text> Ingrese DNI y Contraseña </Text>
                    }
                    <ButtonPress onClick={ this._handleValidateForm } /*styleColor={ !this._handleValidateForm() }*/> 
                        Verificar
				    </ButtonPress>
                </Box>
            </div>
        );
    }
}

export default Login;
