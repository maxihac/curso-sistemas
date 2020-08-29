//Estrategia 2 (Matriz)

let table_datos = [
  ['OFICIAL', 'BLUE', 'CONTADO', 'PROMEDIO', 'BOLSA', 'TURISTA'],
  ['Compra', 10, 11, 12, 13, 14, 12],
  ['Venta', 26.3, 25.8, 23.7, 20.5, 16.8, 22.4],
  ['Variacion', 26, 19.9, 18.0, 14.6, 11.3, 33],
  ['fecha_act', "03/03/20", "06/03/20", "09/03/20", "25/03/20", "05/04/20", "25/06/20"],
];

function dolarToHTML(table) {
  let html = "";
  html += `<table class=" w3-border w3-round w3-container w3-display-topmiddle">
          <tr>`
  for (var i = 0; i < table.length + 1; i++) {
    html += `<td>
     <table class="w3-border w3-round w3-centered">
      <tr>
       <td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ` + table[0][i];
    html += `</td>
      </tr>
       <tr class="w3-light-grey">
           <td class=" w3-half w3-tiny">` + table[1][0];
    html += `</td>
           <td class=" w3-half w3-tiny">` + table[2][0];
    html += `</td>
        </tr>
        <tr class="w3-light-grey">
          <td class="w3-half w3-xlarge">$` + table[1][i + 1].toFixed(2);
    html += `</td>
           <td class="w3-half w3-xlarge">$` + table[2][i + 1].toFixed(2);
    html += `</td>
       </tr>
       <tr>
      <td colspan="2" class="w3-round">Variacion:` + table[3][i + 1].toFixed(2) + "%";
    html += `</td>
          </tr>
          <tr>
           <td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el: ` + table[4][i + 1];
    html += `</td>
         </tr>
      </table>
    </td>`;
    if (i == 2) { // son 3 columnas x fila 0,1,2 //y bajo a la siguiente fila
      html += `</tr>
      <tr>`
    } //del if
  } //del for
  html += `</tr>
     </table>`;
  return html;
}
document.getElementById('ui').innerHTML = dolarToHTML(table_datos);
