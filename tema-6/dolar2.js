//Estrategia 2 (Matriz)

let table1 = [
  ['OFICIAL', 'BLUE', 'CONTADO', 'PROMEDIO', 'BOLSA', 'TURISTA'],
  ['Compra', 10, 11, 12, 13, 14, 12],
  ['Venta', 26.3, 25.8, 23.7, 20.5, 16.8, 22.4],
  ['Variacion', 26, 19.9, 18.0, 14.6, 11.3, 33],
  ['fecha_act', "03/03/20", "06/03/20", "09/3/20", "25/03/20", "05/04/20", "25/6/20"],
];

function dolarToHTML(table) {
  let html = "";
  html += '<table class=" w3-border w3-round w3-container w3-display-topmiddle">';
  html += "<tr>";
  for (var i = 0; i < (table.length) / 2; i++) {
    html += "<td>";
    html += '<table class="w3-border w3-round w3-centered">';
    html += "<tr>";
    html += '<td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ' + table[0][i];
    html += "</td>";
    html += "</tr>";
    html += '<tr class="w3-light-grey">';
    html += '<td class=" w3-half w3-tiny">' + table[1][0];
    html += '</td>';
    html += '<td class=" w3-half w3-tiny">' + table[2][0];
    html += '</td>';
    html += '</tr>';
    html += '<tr class="w3-light-grey">';
    html += '<td class="w3-half w3-large">$' + table[1][i + 1].toFixed(2);
    html += ' </td>';
    html += '<td class="w3-half w3-large">' + table[2][i + 1].toFixed(2);
    html += ' </td>';
    html += '</tr>';
    html += '<tr>';
    html += ' <td colspan="2" class="w3-round">Variacion:' + table[3][i + 1].toFixed(2) + "%";
    html += '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el:' + table[4][i + 1];
    html += ' </td>';
    html += '</tr>';
    html += '</table>';
    html += '</td>';
  }

  html += '</tr>';
  for (var i = (table.length + 1)/2; i < (table.length + 1); i++) {
    html += "  <td>";
    html += ' <table class="w3-border w3-round w3-centered">';
    html += "<tr>";
    html += '<td colspan="2" class=" w3-round w3-dark-grey w3-medium">DOLAR ' + table[0][i];
    html += "  </td>";
    html += "</tr>";
    html += '<tr class="w3-light-grey">';
    html += '<td class=" w3-half w3-tiny">' + table[1][0];
    html += '</td>';
    html += '<td class=" w3-half w3-tiny">' + table[2][0];
    html += '</td>';
    html += '</tr>';
    html += '<tr class="w3-light-grey">';
    html += '<td class="w3-half w3-large">$' + table[1][i + 1].toFixed(2);
    html += ' </td>';
    html += '<td class="w3-half w3-large">' + table[2][i + 1].toFixed(2);
    html += ' </td>';
    html += '</tr>';
    html += '<tr>';
    html += ' <td colspan="2" class="w3-round">Variacion:' + table[3][i + 1].toFixed(2) + "%";
    html += '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td colspan="2" class="w3-dark-grey w3-round w3-tiny" style="height:8px;">Actualizado el:' + table[4][i + 1];
    html += ' </td>';
    html += '</tr>';
    html += '</table>';
    html += '</td>';
  }
  html += '</table>';

  return html;
}
document.getElementById('ui').innerHTML = dolarToHTML(table1);
