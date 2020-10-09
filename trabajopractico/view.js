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
		    <div class="w3-container w3-display-container w3-padding-16">
		      <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
		      <img class="w3-center"src="./resources/logo.png " alt="Logo">

		    </div>
		    <div class="w3-padding-8 w3-large w3-text-grey" >
		      <a href="#" class="w3-bar-item w3-button">Carteras</a>
		      <a href="#" class="w3-bar-item w3-button">Bolsos</a>
		      <a onclick="myAccFunc()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align" id="myBtn">
		        Mochilas <i class="fa fa-caret-down"></i>
		      </a>
		      <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium">
		        <a href="#" class="w3-bar-item w3-button w3-light-grey"><i class="fa fa-caret-right w3-margin-right"></i>Skinny</a>
		        <a href="#" class="w3-bar-item w3-button">Relaxed</a>
		        <a href="#" class="w3-bar-item w3-button">Bootcut</a>
		        <a href="#" class="w3-bar-item w3-button">Straight</a>
		      </div>
		      <a href="#" class="w3-bar-item w3-button">Accesorios</a>
		      <a href="#" class="w3-bar-item w3-button">x implementar</a>
		      <a href="#" class="w3-bar-item w3-button">x implementar</a>
		      <a href="#" class="w3-bar-item w3-button">x implementar</a>
		    </div>
		    <a href="#footer" class="w3-bar-item w3-button w3-padding">Contact</a>
		    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Newsletter</a>
		    <a href="#footer"  class="w3-bar-item w3-button w3-padding">Subscribe</a>
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
		    <div class="w3-display-container w3-container">
		      <img src="./resources/bagmain2.jpg" alt="Jeans" style="width:100%">
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
		    <div class="w3-row w3-grayscale">
		      <div class="w3-col l3 s6">
		        <div class="w3-container">
		          <img src="/w3images/jeans1.jpg" style="width:100%">
		          <p>cartera 1<br><b>$24.99.-    </b><i class="fa fa-shopping-cart w3-margin-left "></i></p>
		        </div>
		        <div class="w3-container">
		          <img src="/w3images/jeans2.jpg" style="width:100%">
		          <p>cartera 2<br><b>$19.99</b></p>
		        </div>
		      </div>

		      <div class="w3-col l3 s6">
		        <div class="w3-container">
		          <div class="w3-display-container">
		            <img src="/w3images/jeans2.jpg" style="width:100%">
		            <span class="w3-tag w3-display-topleft">15% OFF</span>
		            <div class="w3-display-middle w3-display-hover">
		              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
		            </div>
		          </div>
		          <p>Mega Ripped Jeans<br><b>$19.99</b></p>
		        </div>
		        <div class="w3-container">
		          <img src="/w3images/jeans3.jpg" style="width:100%">
		          <p>Washed Skinny Jeans<br><b>$20.50</b></p>
		        </div>
		      </div>

		      <div class="w3-col l3 s6">
		        <div class="w3-container">
		          <img src="/w3images/jeans3.jpg" style="width:100%">
		          <p>Washed Skinny Jeans<br><b>$20.50</b></p>
		        </div>
		        <div class="w3-container">
		          <div class="w3-display-container">
		            <img src="/w3images/jeans4.jpg" style="width:100%">
		            <span class="w3-tag w3-display-topleft">Sale</span>
		            <div class="w3-display-middle w3-display-hover">
		              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
		            </div>
		          </div>
		          <p>Vintage Skinny Jeans<br><b class="w3-text-red">$14.99</b></p>
		        </div>
		      </div>

		      <div class="w3-col l3 s6">
		        <div class="w3-container">
		          <img src="/w3images/jeans4.jpg" style="width:100%">
		          <p>Vintage Skinny Jeans<br><b>$14.99</b></p>
		        </div>
		        <div class="w3-container">
		          <img src="/w3images/jeans1.jpg" style="width:100%">
		          <p>Ripped Skinny Jeans<br><b>$24.99</b></p>
		        </div>
		      </div>
		    </div>

		    <!-- Subscribe section -->
		    <div class="w3-container w3-black w3-padding-32">
		        <form class="w3-container">
		          <h1>Ingresa</h1>
		      <p> Y accede a nuestras ofertas y enterate de proximas novedades</p>
		      <p><input class="w3-input w3-border" type="text" placeholder="Ingrese su E-mail" style="width:100%"></p>
		      <p><input class="w3-input w3-border" type="password" placeholder="ingrese su contraseña" style="width:100%"></p>
		      <button id="${this.id}btnLogin" class="w3-button w3-red w3-margin-bottom">Ingresa</button>
		      <button id="${this.id}btnRegister" class="w3-button w3-red w3-margin-bottom">Registrate</button>
		      </form>
		    </div>

		    <!-- Footer -->
		    <footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
		      <div class="w3-row-padding">
		        <div class="w3-col s4">
		          <h4>Contacto</h4>
		          <p>Tenes consultas? Comunicate con nosotros</p>
		          <form action="/action_page.php" target="_blank">
		            <p><input class="w3-input w3-border" type="text" placeholder="Nombre" name="Name" required></p>
		            <p><input class="w3-input w3-border" type="email" placeholder="Email" name="Email" required></p>
		            <p><input class="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required></p>
		            <p><input class="w3-input w3-border" type="textbox" placeholder="Message" name="Message" required></p>
		            <button type="submit" class="w3-button w3-block w3-black">Enviar</button>
		          </form>
		        </div>

		        <div class="w3-col s4">
		          <h4>About</h4>
		          <p><a href="#">About us</a></p>
		          <p><a href="#">We're hiring</a></p>
		          <p><a href="#">Support</a></p>
		          <p><a href="#">Find store</a></p>
		          <p><a href="#">Shipment</a></p>
		          <p><a href="#">Payment</a></p>
		          <p><a href="#">Gift card</a></p>
		          <p><a href="#">Return</a></p>
		          <p><a href="#">Help</a></p>
		        </div>

		        <div class="w3-col s4 w3-justify">
		          <h4>Store</h4>
		          <p><i class="fa fa-fw fa-map-marker"></i> Company Name</p>
		          <p><i class="fa fa-fw fa-phone"></i> 0044123123</p>
		          <p><i class="fa fa-fw fa-envelope"></i> ex@mail.com</p>
		          <h4>We accept</h4>
		          <p><i class="fa fa-fw fa-cc-amex"></i> Amex</p>
		          <p><i class="fa fa-fw fa-credit-card"></i> Credit Card</p>
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

		    <div class="w3-black w3-center w3-padding-24">Powered by <a href="xxx" title="XXX Mar del Plata 2020" target="_blank" class="w3-hover-opacity">XXX Mar del Plata 2020</a></div>

		    <!-- End page content -->
		  </div>
		  <!-- Newsletter Modal -->
		  <div id="newsletter" class="w3-modal">
		    <div class="w3-modal-content w3-animate-zoom" style="padding:32px">
		      <div class="w3-container w3-white w3-center">
		        <i onclick="document.getElementById('newsletter').style.display='none'" class="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"></i>
		        <h2 class="w3-wide">NEWSLETTER</h2>
		        <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
		        <p><input class="w3-input w3-border w3-round" type="text" placeholder="Enter e-mail"></p>
		        <button type="button" class="w3-button w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('newsletter').style.display='none'">Subscribe</button>

		      </div>
		    </div>
		  </div>
		  //LOGINNNNNNN
		  <div class=" w3-quarter  w3-round w3-blue-grey w3-opacity-min w3-display-topright w3-card-4 w3-right  w3-animate-zoom">
		  <a href="#gallery" class="w3-button  w3-display-topright">X</a>
		  <div w3-container class="w3-center"><br>
		  <h6>Ingresa a tu espacio y aprovecha exclusivos descuentos</h6>
		          <img src="./resources/baglogin.jpg" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
		        </div>
		    <form class="w3-container">
		      <div class="w3-section">
		        <h6>Ingrese su E-mail</h6>
		        <input class="w3-input w3-round w3-padding-small w3-border w3-margin-bottom" type="email" placeholder="E-mail" name="usrname" required>
		        <h6>Ingrese su contraseña</h6>
		        <input class="w3-input w3-round w3-padding-small w3-border" type="Password" placeholder="Password" name="psw" required>
		        <button id="${this.id}btnLogin" class="w3-button w3-round w3-block w3-grey w3-section">Ingresa</button>
		        <button id="${this.id}btnRegister" class="w3-button w3-round w3-padding-small w3-block w3-grey w3-section">Registrate</button>
		          <p><a href="#gallery" class="w3-button w3-round w3-padding-small w3-block w3-wide w3-section">No me interesa</a></p>
		      </div>
		    </form>
		</div>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller-attach
		document.getElementById(this.id+'btnLogin').addEventListener('click', event => this.innerController.onLoginButtonClick(event));
		document.getElementById(this.id+'btnRegister').addEventListener('click', event => this.innerController.onRegisterButtonClick(event));
document.getElementById(this.id+'btncloselogin').addEventListener('click', event => this.innerController.oncloseButtonClick(event));
	}


}

export { LoginView };
