/*
	Example: LoginViewController Module // CRUD-Development
	Autor: Matías Gastón Santiago
	Versión: 1.0
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas
	https://educacion.batan.coop/course/view.php?id=9

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import {Model} from './model.js';

class ViewController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onLoginButtonClick(event)
	{
		let formViewData = new FormData( document.getElementById("loginForm") );
		let formUserData = Object.fromEntries(formViewData);
		 console.log(formUserData);
		 let success = true;

 		if ( !this.innerModel.isValidUserData2( formUserData ) )
 		{
 			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
 			success = false;
 		}
 		//Superadas todas las validaciones tempranas del cliente, invocar el modelo (despacho)
 		if ( success )
 		{
 			//Modelo es asincrónico, al final de la cadena se chequea si hubo errores.
 			this.innerModel.login( formUserData )
 			.then( response => response.json() )
 			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
 			.then( () => this.innerView.update() );
 		}


 		//cortar la propagación del evento.
 		event.preventDefault();

	}

	onRegisterButtonClick(event)
	{
//abre el model de login con los datos a completar y cierra la ventana login
	  document.getElementById('windowsregister').style.display='block';
	  document.getElementById('windowslogin').style.display='none';

	}
	onNewUserCancelButtonClick()
	{
		//Ocultar el diálogo modal y vuelve  a mostrar el login como consecuencia de la cancelación del pedido.
		document.getElementById('windowsregister').style.display='none';
	document.getElementById('windowslogin').style.display='block';
	}
	onNewUserConfirmButtonClick()
	{
		//Traer los datos del form de la vista.
		let formViewData = new FormData( document.getElementById("frmNewUserData") );
		let formUserData = Object.fromEntries(formViewData);
     console.log(formUserData);
		//Validaciones tempranas (Cliente)
		let success = true;

		if ( !this.innerModel.isValidUserData( formUserData ) )
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}
		//Superadas todas las validaciones tempranas del cliente, invocar el modelo (despacho)
		if ( success )
		{
			//Modelo es asincrónico, al final de la cadena se chequea si hubo errores.
			this.innerModel.create( formUserData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		//Ocultar el modal
		document.getElementById('windowsregister').style.display='none';
		//this.innerView.hideNewUserModal();
	}
}
export {ViewController };
