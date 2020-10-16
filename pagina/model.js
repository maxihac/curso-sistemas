/*
	Example: LoginModel Module // CRUD-Development
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

class Model extends EventTarget
{
	constructor()
	{
		super();
	};

	login(userData)
	{
		let message =
		{
			action:'login',
			body: userData
		};

		return fetch( './loginModel.php', { method:'POST', body:JSON.stringify(message) } );
	}

	register(userData)
	{
		let message =
		{
			action:'register',
			body: userData
		};

		return fetch( './loginModel.php', { method:'POST', body:JSON.stringify(message) } );
	}


};


export { Model };
