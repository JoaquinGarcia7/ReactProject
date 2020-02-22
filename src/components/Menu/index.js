import {
	ButtonAge,
	ButtonDelete,
	ButtonPress,
	Data,
	Details,
	DetailsAge,
	Filtered,
	List,
	Text,
	Title
} from './styledMenu';
import React, { Component } from 'react';
import {
	array,
	func,
	string,
} from 'prop-types';

class Comp extends Component {
	static propTypes = {
		elimination: func, //Funcion pasada como parametro desde el componente padre
		people: array, //Lista de personas original
		title: string //Valor traido del componente padre como parametro donde muestra el titulo principal
	}

    constructor(props){ //Almacena los datos
        super(props); //Hereda toda la funcionalidad de react
		this.state = { //Estado de los datos en una aplicacion en react, valores por default
			date: new Date(), //Hora en vivo en el sitio
			enteredAge: null, //Variable que toma el valor de la edad minima ingresada desde el input
			enteredAgeAux: null, //Variable auxiliar para poder mostrar la edad que se esta filtrando
			filterValue: '', //Valor ingresado en el input para la filtracion por nombre y apellido
			filteredPeople: [], //Lista nueva aplicando los filtros que correspondan
			isHere: '', //Valor ingresado que controla si se encuentra o no en la lista
			loading: true, //Estado del componente
			onClicked: false, //Estado del boton 'Presionar!' que se encuentra debajo del titulo principal
			seconds: 0
		};
	}

	componentDidMount = () => { //Se ejecuta después que la salida del componente ha sido renderizada en el DOM
		this._handleFilterApplication();
		this.setState({
			loading: false,
		});
		
		this.myInterval = setInterval(() => { // Timer del sitio
			//setInterval ejecuta la funcion repetidamente, comienza despues de un tiempo definido y se ejecuta continuamente
			//durante ese intervalo
			this.setState(prevState => ({
				seconds: prevState.seconds + 1
			}));
		}, 1000);

		this.timerID = setInterval(() => {
			this.setState({
				date: new Date()
			});
		}, 1000); //Hora local
	}

	componentWillUnmount = () => { //Se invoca inmediatamente antes de desmontar y destruir un componente.
		clearInterval(this.timerID);
		clearInterval(this.myInterval);
	}

	reset = () => {
		console.log('stop');
		this.setState({
			seconds: 0
		})
	}

	_handleAgeSearch = () => {
		const { enteredAge } = this.state;
		this.setState({
			enteredAgeAux: enteredAge,
		}, () => {
			this._handleFilterApplication();
		});
	}

	_handleChangeColor = () => { //Cambiar de rojo a verde y viceversa
		const { onClicked } = this.state;
		this.setState({
			onClicked: !onClicked
		})
	}

	_handleFilterApplication = () => { //Metodo que aplica los filtros necesarios en la lista
		const { enteredAgeAux, filterValue } = this.state;
		const { people } = this.props;
		const filterAux = filterValue.toLowerCase();
		//Filtro la busqueda por el input y la busqueda por edad en el input
		const filteredPeople = people.filter(({ age, name, surname }) =>
			(surname.toLowerCase().includes(filterAux) || name.toLowerCase().includes(filterAux)) && enteredAgeAux <= age);
		this.setState({
			filteredPeople
		});
	}

	_handleInputChangeAge = (e) => { //Guardo los cambios del input y utilizo un callback para filtar la lista
		this.setState({
			enteredAge: e.target.value,
		});
	}

	_handleInputChangePeople = (e) => { //Guardo los cambios del input y utilizo un callback para filtar la lista
		this.setState({
			filterValue: e.target.value
		}, () => {
			this._handleFilterApplication();
		});
	}

	inputSearchMiniors = (e) =>{ //Guardo los cambios del input y utilizo un callback para buscar si hay o no edades menores a la ingresada
		this.setState({
			isHere: e.target.value
		});
	}

 	render() {  
		const {
			enteredAge,
			enteredAgeAux,
			filterValue,
			filteredPeople,
			isHere,
			loading,
			onClicked,
			seconds
		} = this.state;
		const {
			elimination,
			title = 'Título de la pantalla' //Valor por defecto
		} = this.props;
		const areMinors = filteredPeople.some(({ age }) => (isHere > age));
		const time = `
			${ Math.floor(seconds / 3600).toString().padStart(2, '0') }:${ Math.floor(seconds % 3600 / 60).toString().padStart(2, '0') }:${ Math.floor(seconds % 3600 % 60).toString().padStart(2, '0') }
		`;

		const totalAge = filteredPeople.reduce((accumulator, { age }) => accumulator + age, 0);
		if (loading) { 
			return <Text>Cargando... </Text>; 
		} else {
			return <div>
				<div> Hora Actual: { this.state.date.toLocaleTimeString() }</div>		
				<div> Tiempo en el sitio:  { time } </div>
				{/*<ButtonAge onClick={ this.reset }>
					Reiniciar
				</ButtonAge>*/}
				<Title> { title } </Title>
				<ButtonPress onClick={ this._handleChangeColor } styleColor={ onClicked ? "#91E500" : "#FF2525" } > 
					Presionar!
				</ButtonPress>
				<Data>
					<input
						onChange={ this._handleInputChangePeople }
						placeholder='Ingrese su busqueda'
						type= "text"
						value={ filterValue }
					>
					</input>
				</Data>
				<Data>
					<input
						onChange={ this._handleInputChangeAge }
						placeholder='Ingrese la edad minima'
						type= "number"
						value={ enteredAge }
					>
					</input>
					<ButtonAge onClick={ this._handleAgeSearch }>
						Buscar
					</ButtonAge>
					
				</Data>
				<DetailsAge> Edad ingresada: { enteredAgeAux } </DetailsAge>
				<Data>
					<h4> Listado de personas </h4>
					{
						filteredPeople.length > 0
							? filteredPeople.map(({ age, id, name, surname }) =>
								<Filtered>
									<List> { surname }, { name } </List>
									<Details> { age } years </Details>
									<ButtonDelete onClick={ () => elimination(id) } >
										Eliminar
									</ButtonDelete>
								</Filtered>)
							: <h5> No hay personas. </h5>
					}
					<DetailsAge> Edad total: { totalAge } years </DetailsAge>
					<input
						onChange={ this.inputSearchMiniors }
						placeholder='Menores a'
						type= "number"
						value={ isHere }
					>
					</input>
					{
						filteredPeople.length > 0 && !!isHere
							? <Details>{ areMinors ? 'Si' : 'No' }</Details>
							: ''
					}
				</Data>
			</div>;
		}
	}
}

export default Comp;
