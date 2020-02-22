import React, {	Component } from 'react';
//import Comp from './components/Menu/index';
import Login from './components/Login/index';
import './App.css';

class App extends Component {
	//delete = id => console.log('DELETE', id);
	render() {
		/*const title = 'Título recibido';
		const title = '';
		const people = [
            { id: 2, name: 'Joaquin', surname: 'Garcia', age: 23 },
            { id: 1, name: 'Miguel', surname: 'Gonzales', age: 27 },
            { id: 15, name: 'Juan', surname: 'z', age: 7 },
            { id: 256, name: 'Juan', surname: 'x', age: 65 },
            { id: 17, name: 'Juan', surname: 'c', age: 5 },
            { id: 451, name: 'Juan', surname: 'v', age: 10 },
            { id: 7, name: 'Juan', surname: 'b', age: 15 },
            { id: 6751, name: 'Juan', surname: 'n', age: 39 },
            { id: 4561, name: 'MiJuanguel', surname: 'm', age: 26 },
            { id: 245, name: 'Juan', surname: 's', age: 16 },
            { id: 148, name: 'Juan', surname: 'd', age: 12 },
            { id: 18, name: 'Juan', surname: 'f', age: 13 },
            { id: 915, name: 'Juan', surname: 'g', age: 100 }
        ];
        const people = [];*/

		return (
			<Login />
			//<Comp title={ title } people={ people } elimination={ this.delete } />
		);
	}
}

export default App;
