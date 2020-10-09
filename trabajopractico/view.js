/*
	Example: Login Module // CRUD-Development
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

import { LoginViewController } from "./controller.js"

class LoginView
{
	constructor( id, model )
	{
		this.id = id;
		this.innerModel = model;

		this.innerController = new LoginViewController(model, this);

		this.show();


	}

	show()
	{
		let innerHTML =

		`<nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
			<div class="w3-container w3-display-container w3-padding-8">
				<i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
				<img class="w3-center"src="./resources/logo.png " alt="Logo">
			</div>
			<div class="w3-padding-8 w3-large w3-text-grey" >
				<a href="#gallery" class="w3-bar-item w3-button w3-small"><h6>Carteras</h6></a>
				<a href="#" class="w3-bar-item w3-button w3-small"><h6>Bolsos</h6></a>
				<a href="#" class="w3-bar-item w3-button"><h6>Mochilas</h6></a>
				<a href="#" class="w3-bar-item w3-button"><h6>Sobres</h6></a>
				<a href="#" class="w3-bar-item w3-button"><h6>Accesorios</h6></a>
				<a href="#" class="w3-bar-item w3-button">x implementar</a>
				<a href="#" class="w3-bar-item w3-button">x implementar</a>
			</div>
			<a href="#footer" class="w3-bar-item w3-button w3-padding">Contacto</a>
			<a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Catalogo</a>
			<a href="#footer"  class="w3-bar-item w3-button w3-padding">Ingresar</a>
		</nav>

		<!-- Top menu on small screens -->
		<header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">

			<div class="w3-bar-item w3-padding-24 w3-wide">Chivis Bag</div>
			<a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></a>
		</header>

		<!-- Overlay effect when opening sidebar on small screens -->
		<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

		<!-- !PAGE CONTENT! -->
		<div class="w3-main" style="margin-left:250px">

			<!-- Push down content on small screens -->
			<div class="w3-hide-large" style="margin-top:83px"></div>

			<!-- Top header
			<header class="w3-container w3-xlarge">
				<p class="w3-left">Jeans</p>
				<p class="w3-right">
					<i class="fa fa-shopping-cart w3-margin-right"></i>
					<i class="fa fa-search"></i>
				</p>
			</header>-->

			<!-- Image header -->
			<div class="w3-display-container">

				<img src="./resources/bagmain2.jpg" alt="mainbag" style="width:100%">
				<!-- LOGINNN-->

					<div id="login"class="w3-third  w3-hide-small w3-round w3-blue-grey w3-opacity-min w3-display-topright  w3-animate-zoom"style="padding:2px">
						<i onclick="document.getElementById('login').style.display='none'" class="fa fa-remove w3-right w3-button w3-transparent w3-large"></i>
						<div class="w3-center"><br>
							<h6>Ingresa a tu espacio y aprovecha exclusivos descuentos</h6>
							<img src="./resources/baglogin.jpg" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
						</div>
						<form class="w3-container">
							<div class="w3-section">
								<h6>Ingrese su E-mail</h6>
								<input class="w3-input w3-round w3-padding-small w3-border w3-margin-bottom" type="email" placeholder="E-mail" name="usrname" required>
								<h6>Ingrese su contraseña</h6>
								<input class="w3-input w3-round w3-padding-small w3-border" type="Password" placeholder="Password" name="psw" required>
								<button id="${this.id}btnLogin" class="w3-button w3-round  w3-block w3-grey w3-section">Ingresa</button>
								<button id="${this.id}btnRegister" class="w3-button w3-round w3-padding-small w3-block w3-grey w3-section">Registrate</button>
								<i onclick="document.getElementById('login').style.display='none'" class="w3-button w3-transparent">No me interesa</i>
							</div>
						</form>
				</div>
				<div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
					<h1 class="w3-jumbo w3-hide-small">Nuevos </h1>
						<h1 class="w3-jumbo w3-hide-small">Modelos </h1>
					<h1 class="w3-hide-large w3-hide-medium">Nuevos Modelos</h1>
					<h1 class="w3-hide-small">Coleccion 2020</h1>
					<p><a href="#gallery" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
				</div>
			</div>

			<div class="w3-container w3-text-grey" id="gallery">
				<p>Top Sale</p>
			</div>

			<!-- Product grid -->
			<!--<table class=w3-table>
			 <tr>
				 <td><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
			 </tr>
			 <tr>
				 <td class="w3-container "><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td class="w3-container ">  <img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td class="w3-container "><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
				 <td class="w3-container "><img src="./resources/bag2login.jpg" style="width:100%"><p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p></td>
			 </tr>

		 </table> -->

			<div class="w3-row w3-grayscale">
				<div class="w3-col l3 s6">
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">
								<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
							<p>cartera 1<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">

							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
						<p>cartera 5<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
				</div>

				<div class="w3-col l3 s6">
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">
							<span class="w3-tag w3-display-topleft">15% OFF</span>
								<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
					<p>cartera 2<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">
							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
						<p>cartera 6<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
				</div>
				<div class="w3-col l3 s6">
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">

							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
					<p>cartera 3<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">
							<span class="w3-tag w3-display-topleft">Sale</span>
							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
						<p>cartera 7<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
				</div>

				<div class="w3-col l3 s6">
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">
							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
					<p>cartera 4<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
					<div class="w3-container">
						<div class="w3-display-container">
							<img src="./resources/bag2login.jpg" style="width:100%">

							<div class="w3-display-middle w3-display-hover">
								<button class="w3-button w3-round w3-black">Mira y compra<i class="fa fa-shopping-cart"></i></button>
							</div>
						</div>
						<p>cartera 8<br><b>$20.50</b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
					</div>
				</div>

			</div>

			<!-- Subscribe section -->
			<div class="w3-container w3-round w3-blue-grey w3-padding-32">
					<form class="w3-container">
						<h1>Ingresa</h1>
				<p> Y accede a nuestras ofertas y enterate de proximas novedades</p>
				<p><input class="w3-input w3-round w3-border" type="text" placeholder="Ingrese su E-mail" style="width:100%"></p>
				<p><input class="w3-input w3-round w3-border" type="password" placeholder="ingrese su contraseña" style="width:100%"></p>
				<button id="${this.id}btnLogin" class="w3-button w3-red w3-round w3-margin-bottom">Ingresa</button>
				<button id="${this.id}btnRegister" class="w3-button w3-red w3-round w3-margin-bottom">Registrate</button>
				</form>
			</div>

			<!-- Footer -->
			<footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
				<div class="w3-row-padding">
					<div class="w3-col s4">
						<h4>Contacto</h4>
						<p>Tenes consultas? Comunicate con nosotros</p>
						<form action="/action_page.php" target="_blank">
							<p><input class="w3-input w3-border w3-round" type="text" placeholder="Nombre" name="Name" required></p>
							<p><input class="w3-input w3-border w3-round" type="email" placeholder="Email" name="Email" required></p>
							<p><input class="w3-input w3-border w3-round" type="text" placeholder="Asunto" name="Subject" required></p>
							<p><input class="w3-input w3-bordew3-round" type="textbox" placeholder="Mensaje" name="Message" required></p>
							<button type="submit" class="w3-button w3-blue-grey w3-round w3-block">Enviar</button>
						</form>
					</div>

					<div class="w3-col s4">
						<h4>Acerca de...</h4>
						<p><a href="#">Acerca de nosotros</a></p>
						<p><a href="#">Support</a></p>
						<p><a href="#">Find store</a></p>
						<p><a href="#">Shipment</a></p>
						<p><a href="#">Formas de pago</a></p>
						<p><a href="#">Gift card</a></p>
						<p><a href="#">Inicio</a></p>
						<p><a href="#">Help</a></p>
					</div>

					<div class="w3-col s4 w3-justify">
						<h4>Nosotros</h4>
						<p><i class="fa fa-fw fa-map-marker"></i> Chivis Bag</p>
						<p><i class="fa fa-fw fa-phone"></i> 0223688888</p>
						<p><i class="fa fa-fw fa-envelope"></i> chivisbag@mail.com</p>
						<h4>Aceptamos</h4>
						<p><i class="fa fa-fw fa-cc-amex"></i> Debito</p>
						<p><i class="fa fa-fw fa-credit-card"></i> Credito</p>
						<br>
						<i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
						<i class="fa fa-instagram w3-hover-opacity w3-large"></i>
						<i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
						<i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
						<i class="fa fa-twitter w3-hover-opacity w3-large"></i>
						<i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
					</div>
				</div>
			</footer>

			<div class="w3-center w3-padding-24">Powered by <a href="xxx" title="xxx" target="_blank" class="w3-hover-opacity">Max Hac Mar del Plata 2020</a></div>

			<!-- End page content -->
		</div>
		<!-- Newsletter Modal -->
		<div id="newsletter" class="w3-modal">
			<div class="w3-modal-content w3-animate-zoom" style="padding:32px">
				<div class="w3-container w3-blue-grey w3-center">
					<i onclick="document.getElementById('newsletter').style.display='none'" class="fa fa-remove w3-right w3-button w3-transparent w3-xlarge"></i>
					<h2 class="w3-wide">Catalogo</h2>
					<p>Ingresa tu email para recibir promociones y novedades</p>
					<p><input class="w3-input w3-border w3-round" type="text" placeholder="Enter e-mail"></p>
					<button type="button" class="w3-button w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('newsletter').style.display='none'">Suscribite</button>

				</div>
			</div>

		</div>
`;


		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller-attach
		document.getElementById(this.id+'btnLogin').addEventListener('click', event => this.innerController.onLoginButtonClick(event));
		document.getElementById(this.id+'btnRegister').addEventListener('click', event => this.innerController.onRegisterButtonClick(event));
document.getElementById(this.id+'btncloselogin').addEventListener('click', event => this.innerController.oncloseButtonClick(event));
	}


}

export { LoginView };
