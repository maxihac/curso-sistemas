function HTMLCalculator(){
let html="";
html=	`<table class="table-1" id="tabla" >
    <tbody>
      <tr>
          <td colspan="4">
  			<input type="text" id="display" name="display"  value="0"  >
     		</td>
      </tr>
  	<tr>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"  id="n7">7</button>
  		</td>
        <td>
  		  <button  class="blue-buttons font-buttons size-buttons" id="n8">8</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons" id="n9">9</button>
  		</td>
        <td>
  		  <button class="green-buttons font-buttons size-buttons"id="mas">+</button>
  		</td>
      </tr>
      <tr>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n4">4</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n5">5</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n6">6</button>
  		</td>
        <td>
  		  <button class="green-buttons font-buttons size-buttons" id="menos">-</button>
  		</td>
      </tr>
      <tr>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n1">1</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n2">2</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n3">3</button>
  		</td>
        <td>
  		  <button class="green-buttons font-buttons size-buttons"id="por">X</button>
  		</td>
      </tr>
      <tr>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="n0" value="0">0</button>
  		</td>
        <td>
  		  <button class="blue-buttons font-buttons size-buttons"id="punto">.</button>
  		</td>
        <td>
  		  <button class="yellow-buttons font-buttons size-buttons"id="igual">=</button>
  		</td>
        <td>
  		  <button class="green-buttons font-buttons size-buttons"id="dividir">/</button>
  		</td>
      </tr>
      <tr>
        <th  colspan="4">
  		  <button id="borrar" class="red-buttons font-buttons">borrar</button>
  		</th>
      </tr>
    </tbody>
  </table>`;
  return html;
}
function onButton8click(){
document.getElementById('display').value = document.getElementById('display').value + '8';
}
//let onButton7Click = action =>{
//  action => display.value=display.value + '7';
//}
document.getElementById('ui').innerHTML = HTMLCalculator();
document.getElementById('n8').addEventListener('click',onButton8click);
