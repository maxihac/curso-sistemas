let tabla = {
  enero: {temp_max_abs:39.3,
          temp_min_abs: 4.7,
          humedad_rel: 76
  },
  febrero: {temp_max_abs:39.3,
          temp_min_abs: 4.7,
          humedad_rel: 76
  },
  marzo: {temp_max_abs:39.3,
          temp_min_abs: 4.7,
          humedad_rel: 76
  },
  abril: {temp_max_abs:39.3,
          temp_min_abs: 4.7,
          humedad_rel: 76
  },
  mayo: {temp_max_abs:39.3,
          temp_min_abs: 4.7,
          humedad_rel: 76
  }
}
function tabletohtml(table){
let html="";
html +='<h1>Parametros climaticos</h1>';
/* html +=`<table>
  <tr>
    <th>mes</th>
      <th>Enero</th>
        <th>Febrero</th>
          <th>Marzo</th>
            <th>Abril</th>
              <th>Mayo</th>
    </tr>`;

    let meses=Object.Entries(datos_mdp);
    for (mes in meses){
      html += "<tr>"+ mes[1].temp_max_abs +"</td>"
    }*/
document.getElementsById("ui").innerHTML=html;
//  return html;

}
tabletohtml(null);
