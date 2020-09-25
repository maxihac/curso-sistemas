function now(date)
{
  //Acá, este argumento "date" no está siendo usado nunca.
  //Si el objetivo de la función es que devuelva la fecha actual, 
  //No deber recibir parámetros externos. La lógica interna ya alcanza para retornar esta info.

  fecha_act = new Date();
  dia = fecha_act.getDate();
  mes = parseInt(fecha_act.getMonth()) + 1;
  ano = fecha_act.getFullYear();
  hora = fecha_act.getHours();
  minutos = fecha_act.getMinutes();
  let temp = "";
  temp += ((minutos < 10) ? ':0' : ':') + minutos;
  now1 = (dia + "/" + mes + "/" + ano + "  " + hora + temp);
  return now1;
}

function ConvertServerResponse(responseObject) {

  /*La implementación de la función está bien.
  Se te ha puesto laboriosa y es algo compleja visualmente, pero
  esto no está mal, es consecuencia de haber elegido una matriz como estructura de datos
  para resolver el problema. En este caso te demuestra que es mejor utilizar otra estrategia
  que sea más idiomática. En la otra actividad, donde transformábamos la tabla de temperaturas,
  ahí para ese problema particular era mejor la matriz, pero ojo, no hay que acostumbrarse ni casarse
  con aplicar siempre el mismo método o estructura de datos, a veces conviene una, y a veces otra.*/

  let table_datos = [
    ['OFICIAL', 'BLUE', 'CONTADO', 'BITCOIN', 'BOLSA', 'TURISTA'],
    ['Compra', '--', '--', '--', '--','--', '--'],
    ['Venta', '--', '--', '--', '--', '--', '--'],
    ['Variacion', 0, 0, 0, 0, 0, 0],
    ['fecha_act', "--", "--", "--", "--", "--", "--"],
  ];

  //Dolar Oficial
  //Compra :  table_datos[1][1];

  if (responseObject != null) {
    let date = "";

    /*En esta parte, sobre la consulta, y teniendo en cuenta el código     Podés declarar una variable:
    let date = now("");
    y luego asignar esto a las componentes que necesitás: table_datos[4][2] = date;*/

    table_datos[1][1] = responseObject[0].casa.compra.substr(0, 5);
    table_datos[2][1] = responseObject[0].casa.venta.substr(0, 5);
    table_datos[3][1] = responseObject[0].casa.variacion.substr(0, 5);
    table_datos[4][1] = now(date);
    table_datos[1][2] = responseObject[1].casa.compra.substr(0, 5);
    table_datos[2][2] = responseObject[1].casa.venta.substr(0, 5);
    table_datos[3][2] = responseObject[1].casa.variacion.substr(0, 5);
    table_datos[4][2] = table_datos[4][1]; //ASI SOLO LA LLAMO UNA VEZ A LA FUNCION FECHA NOSE QUE OPCION SERA MEJOR O SI ES NECESARIO CARGAR EL ARREGLO SABIENDO QUE ES SIEMPRE EL MISMO VALOR
    table_datos[1][3] = responseObject[3].casa.compra.substr(0, 5);
    table_datos[2][3] = responseObject[3].casa.venta.substr(0, 5);
    table_datos[3][3] = responseObject[3].casa.variacion;
    table_datos[4][3] = now(date);
    table_datos[1][4] = responseObject[5].casa.compra.substr(0, 7);
    table_datos[2][4] = responseObject[5].casa.venta.substr(0, 7);
    table_datos[3][4] = responseObject[5].casa.variacion;
    table_datos[4][4] = now(date);
    table_datos[1][5] = responseObject[4].casa.compra.substr(0, 5);
    table_datos[2][5] = responseObject[4].casa.venta.substr(0, 5);
    table_datos[3][5] = responseObject[4].casa.variacion;
    table_datos[4][5] = now(date);
    table_datos[1][6] = responseObject[6].casa.compra.substr(0, 5);
    table_datos[2][6] = responseObject[6].casa.venta.substr(0, 5);
    table_datos[3][6] = responseObject[6].casa.variacion;
    table_datos[4][6] = now(date);
  }

  return table_datos;
}

function HTMLUsdDashboard(table)
{
  /*Acá esta implementación de la coma invertida para el código, se usa diferente.
    Tenés que escribir todo el código HTML como viene directamente entre comas invertidas.
    Y solo la parte que hacés uso de valores de variables, o que depende del código externo
    se cambia por ${ valor }  ... sino, estás con el mismo estilo de código que antes, utilizando
    la coma invertida de la misma manera que la comilla simple o comilla doble.
    El objetivo de la coma invertida es no concatenar código, sino sustituir regiones del texto
    por el resultado de la ejecución del código JS entre las llaves  ${ ..codigo.. }.

    Ejemplo:

   let html = `<table class="w3-border w3-round w3-container w3-display-topmiddle">
                <tr>
                  <td>
                  <table class="w3-border w3-round w3-centered">
                    <tr>
                        <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ${table[0][0]}</td>
                    </tr>
                    <tr class="w3-light-grey">
                      <td class=" w3-half w3-tiny">` + ${table[1][0]}<td>
                    ....ETC....`;
  */
  let html = "";
  html += `<table class=" w3-border w3-round w3-container w3-display-topmiddle">
   							<tr>
    							<td>
       						<table class="w3-border w3-round w3-centered">
       							<tr>
       									<td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][0]; // tabla dolar Oficial
  html +=                `</td>
      							</tr>
       							<tr class="w3-light-grey">
           						<td class=" w3-half w3-tiny">` + table[1][0];
  html +=             `</td>
           						<td class=" w3-half w3-tiny">` + table[2][0];
  html +=             `</td>
        						</tr>
        						<tr class="w3-light-grey">
          						<td class="w3-half w3-xlarge">$ ` + table[1][1];
  html +=              `</td>
           						<td class="w3-half w3-xlarge">$ ` + table[2][1];
  html +=             `</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="w3-round">Variacion:` + table[3][1] + "%";
  html +=             `</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el:      ` + table[4][1];
  html +=             `</td>
                     </tr>
                  </table>
			            <td>
			               <table class="w3-border w3-round w3-centered">
			                  <tr>
			                     <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][1]; //dolar BLUE
  html +=                  `</td>
		                    </tr>
			                  <tr class="w3-light-grey">
					                 <td class=" w3-half w3-tiny">` + table[1][0];
  html +=                  `</td>
					                 <td class=" w3-half w3-tiny">` + table[2][0];
  html +=                  `</td>
			                   </tr>
			                   <tr class="w3-light-grey">
				                     <td class="w3-half w3-xlarge">$ ` + table[1][2];
  html +=                    `</td>
					                   <td class="w3-half w3-xlarge">$ ` + table[2][2];
  html +=                    `</td>
			                   </tr>
			                   <tr>
		                        <td colspan="2" class="w3-round">Variacion:` + table[3][2] + "%";
  html +=                   `</td>
				                 </tr>
				                 <tr>
					                  <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el:      ` + table[4][2];
  html +=                   `</td>
				                 </tr>
		                </table>
                    </td>
		                <td>
		                  <table class="w3-border w3-round w3-centered">
		                    <tr>
		                      <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][2]; //dolar con liqui
  html +=                 `</td>
	                      </tr>
		                    <tr class="w3-light-grey">
				                    <td class=" w3-tiny">REFERENCIA`;
  html +=                   `</td>
		                    </tr>
		                    <tr class="w3-light-grey">
			                     <td class="w3-xlarge w3-centered">$ ` + table[1][3];
  html +=                  `</td>
		                    </tr>
		                    <tr>
	                         <td colspan="2" class="w3-round">Variacion:` + table[3][3] + "%";
  html +=                  `</td>
			                  </tr>
			                  <tr>
				                   <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;"> Actualizado el:` + table[4][3];
  html +=                  `</td>
			                  </tr>
	                    </table>
                      </tr>
	                    <tr>
	                       <td>
	                        <table class="w3-border w3-round w3-centered">
	                         <tr>
	                           <td colspan="2" class=" w3-round w3-dark-grey w3-medium">` + table[0][3]; //dolar PROMEDIO lo cambie por bitcoin
  html +=                   `</td>
	                         </tr>
	                         <tr class="w3-light-grey">
			                        <td class=" w3-half w3-tiny">` + table[1][0];
  html +=                     `</td>
			                        <td class=" w3-half w3-tiny">` + table[2][0];
  html +=                     `</td>
	                         </tr>
	                         <tr class="w3-light-grey">
		                         <td class="w3-half w3-large">$ ` + table[1][4];
  html +=                    `</td>
			                       <td class="w3-half w3-large">$ ` + table[2][4];
  html +=                    `</td>
	                         </tr>
	                         <tr>
                            <td colspan="2" class="w3-round">Variacion:` + table[3][4] + "%";
  html +=                   `</td>
		                       </tr>
		                       <tr>
			                        <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el: ` + table[4][4];
  html +=                     `</td>
		                       </tr>
                          </table>
	                        </td>
                          <td>
	                         <table class="w3-border w3-round w3-centered">
	                           <tr>
	                            <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][4]; //dolar Bolsa
  html +=                     `</td>
                             </tr>
	                           <tr class="w3-light-grey">
			                          <td class=" w3-tiny">REFERENCIA`;
  html +=                       `</td>
	                           </tr>
	                           <tr class="w3-light-grey">
		                           <td class="w3-xlarge w3-centered">$ ` + table[1][5];
  html +=                      `</td>
	                           </tr>
	                           <tr>
                              <td colspan="2" class="w3-round">Variacion:` + table[3][5] + "%";
  html +=                     `</td>
		                         </tr>
		                         <tr>
			                          <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el: ` + table[4][5];
  html +=                       `</td>
		                         </tr>
                          </table>
                          </td>
                          <td>
	                        <table class="w3-border w3-round w3-centered">
	                          <tr>
	                              <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][5]; //dolar turista
  html +=                       `</td>
                            </tr>
	                          <tr class="w3-light-grey">
			                           <td class=" w3-tiny">Venta`;
  html +=                       `</td>
	                          </tr>
	                          <tr class="w3-light-grey">
		                            <td class="w3-xlarge w3-centered">$ ` + table[2][6];
  html +=                       `</td>
	                           </tr>
	                           <tr>
                                <td colspan="2" class="w3-round">VARIACIÓN:` + table[3][6] + "%";
  html +=                       `</td>
		                         </tr>
		                         <tr>
			                          <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el: ` + table[4][6];
  html +=                       `</td>
		                         </tr>
                          </table>
                          </td>
	                        </tr>
          </table>`;
  return html;
}

function onUpdateButtonClick() {
  //Creamos petición a un servidor Web
  let request = new XMLHttpRequest(); //Tipo de dato: object[XMLHttpRequest]

  /*Eventos propios de la funcionalidad que implementa.
  Para hacer una consulta, debemos especificar (dado que es el protocolo HTTP)
  a) El método HTTP para interactuar (GET; POST; PUT; ...)
  b) URL (Dirección<-Servidor)*/

  request.open('GET', 'https://www.dolarsi.com/api/api.php?type=valoresprincipales');
  //Adjuntar la información de la petición
  //..aún no implementado..

  //Definir las respuestas para cuando el objeto notifique que ha terminado
  function onCompletedRequest(event) {
    console.log( event ); //para ver la propiedades ´por consola MUYYYYYYYYYYYY importante
    if (event.currentTarget.status == 200) {

      let serverResponse = event.currentTarget.responseText;

      //Conversión de texto a Objeto (JSON->Object)
      let serverResponseObject = JSON.parse(serverResponse);

      document.getElementById('app').innerHTML = HTMLUsdDashboard(ConvertServerResponse(serverResponseObject));
    }
  }

  //Asociar el nombre del evento (MDN XMLHttpRequest) y su acción para cuando ésta ocurra
  request.addEventListener('loadend', onCompletedRequest);

  //Se envía la petición de manera asincrónica
  request.send();
}

document.getElementById('app').innerHTML = HTMLUsdDashboard(ConvertServerResponse(null));

let updateButton = document.createElement('button'); //--<button>Actualizar Cotización</button>
updateButton.innerHTML = 'Actualizar Cotización';
document.getElementById('body').appendChild(updateButton);

updateButton.addEventListener('click', onUpdateButtonClick);
