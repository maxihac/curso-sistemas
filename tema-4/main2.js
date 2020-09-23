/*Maxi, la calculadora está muy bien a nivel de código de eventos y el HTML
El único tema es que no tenés que reutilizar las funciones onClick dentro de otras.
Se supone que cada función es la respuesta a la interacción del usuario, y es única.
De lo contrario el cambio de una de ellas, propaga el cambio a todas.

EJ:

function onButtondivClick()
 {
	op1= document.getElementById('display').value;
	op = "/";
      onButtondeleteClick(); <--- acá. 
}

La lógica interna de funcionamiento tiene detallecitos. El botón igual está
sólo habilitando expresiones matemáticas de dos números con un operador de por medio:
Estilo: a+b  a-b  a*b    a/b
Con lo cual si cargo: 7+2*2 me devuelve 4

La expresión matemática se calcula tomando toda la cadena de string que tenés en el display.
Vos siempre vas concatenando coherentemente los símbolos de operación y números uno tras otro.

Ej: 9*9/4+2

Y el botón igual tiene que procesar todo lo que esté en el display y mostrar ésto
La forma fácil es usando eval( document.getElementById('display').value )

Ojo, no tendrías porqué saber que la función era eval. Es algo que se busca en internet.
La tendencia a resolverlo uno es procesar cada número y simbolo en un for.

*/


var op1;
var op2;
var op;
function HTMLCalculator()
{
	let html = '';
	html +=`<table id="table" >
	  <tbody>
	    <tr>
	        <td colspan="4">
				<input type="text" id="display" name="display"  value="" style="text-align:right" >
	   		</td>
	    </tr>
		<tr>
	      <td>
			  <button class="blue-buttons"  id="n7">7</button>

			</td>
	      <td>
			  <button  class="blue-buttons" id="n8">8</button>
			</td>
	      <td>
			  <button class="blue-buttons" id="n9">9</button>
			</td>
	      <td>
			  <button class="green-buttons"id="add">+</button>
			</td>
	    </tr>
	    <tr>
	      <td>
			  <button class="blue-buttons"id="n4">4</button>
			</td>
	      <td>
			  <button class="blue-buttons"id="n5">5</button>
			</td>
	      <td>
			  <button class="blue-buttons"id="n6">6</button>
			</td>
	      <td>
			  <button class="green-buttons" id="sub">-</button>
			</td>
	    </tr>
	    <tr>
	      <td>
			  <button class="blue-buttons"id="n1">1</button>
			</td>
	      <td>
			  <button class="blue-buttons"id="n2">2</button>
			</td>
	      <td>
			  <button class="blue-buttons"id="n3">3</button>
			</td>
	      <td>
			  <button class="green-buttons"id="mul">X</button>
			</td>
	    </tr>
	    <tr>
	      <td>
			  <button class="blue-buttons"id="n0">0</button>
			</td>
	      <td>
			  <button class="blue-buttons"id="point">.</button>
			</td>
	      <td>
			  <button class="yellow-buttons"id="equal">=</button>
			</td>
	      <td>
			  <button class="green-buttons"id="div">/</button>
			</td>
	    </tr>
	    <tr>
	      <th  colspan="4">
			  <button id="delete" class="red-buttons">borrar</button>
			</th>
	    </tr>
	  </tbody>
	</table>`
	return html;
}
function onButton7Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "7";
}
function onButton8Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "8";
}
function onButton9Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "9";
}
function onButton0Click()
{
	document.getElementById('display').value = document.getElementById('display').value + "0";
}
function onButton6Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "6";
}
function onButton5Click()
{
	document.getElementById('display').value = document.getElementById('display').value + "5";
}
function onButton4Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "4";
}

function onButton3Click()
{
	document.getElementById('display').value = document.getElementById('display').value + "3";
}
function onButton2Click()
{
	document.getElementById('display').value= document.getElementById('display').value + "2";
}

function onButton1Click()
{
	document.getElementById('display').value = document.getElementById('display').value + "1";
}
function onButtonpointClick()
{
 		if (document.getElementById('display').value.indexOf(".")==-1){   //pone solo una vez el punto
				document.getElementById('display').value = document.getElementById('display').value + ".";
			}
}
function onButtondeleteClick()
{
	document.getElementById('display').value = "";
}
function onButtonsumClick()
 {
	op1= document.getElementById('display').value;
 	op = "+";
	onButtondeleteClick();
}
function onButtonsubClick()
 {
	op1= document.getElementById('display').value;
	op = "-";
      onButtondeleteClick();
}
function onButtondivClick()
 {
	op1= document.getElementById('display').value;
	op = "/";
      onButtondeleteClick();
}
function onButtonmulClick()
 {
	op1= document.getElementById('display').value;
	op = "*";
      onButtondeleteClick();
}

function onButtonequalClick()
 {
	 let res =0;
	op2 = document.getElementById('display').value;
  switch(op){
    case "+":
      res = parseFloat(op1) + parseFloat(op2);
      break;
    case "-":
        res = parseFloat(op1) - parseFloat(op2);
        break;
    case "*":
      res = parseFloat(op1) * parseFloat(op2);
      break;
    case "/":
      res = parseFloat(op1) / parseFloat(op2);
      break;
  }
  console.log(op);
console.log(op1);
console.log(op2);
console.log(res);
		document.getElementById('display').value = res;

}

document.getElementById('pp').innerHTML = HTMLCalculator();
document.getElementById('n9').addEventListener('click', onButton9Click);
document.getElementById('n8').addEventListener('click', onButton8Click);
document.getElementById('n7').addEventListener('click', onButton7Click);
document.getElementById('n6').addEventListener('click', onButton6Click);
document.getElementById('n5').addEventListener('click', onButton5Click);
document.getElementById('n4').addEventListener('click', onButton4Click);
document.getElementById('n3').addEventListener('click', onButton3Click);
document.getElementById('n2').addEventListener('click', onButton2Click);
document.getElementById('n1').addEventListener('click', onButton1Click);
document.getElementById('n0').addEventListener('click', onButton0Click);
document.getElementById('point').addEventListener('click', onButtonpointClick);
document.getElementById('delete').addEventListener('click', onButtondeleteClick);
document.getElementById('add').addEventListener('click', onButtonsumClick);
document.getElementById('sub').addEventListener('click', onButtonsubClick);
document.getElementById('div').addEventListener('click', onButtondivClick);
document.getElementById('mul').addEventListener('click', onButtonmulClick);
document.getElementById('equal').addEventListener('click', onButtonequalClick);
