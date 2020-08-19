let titulo="tabla clima"; /*como poner un script dentro del codigo html, como un style en CSS*/
console.log(titulo);
let tabla_clima = [{
    mes: "Enero",
    temp_max_abs: 39.3,
    temp_min_abs: 4.7,
    humedad_rel: 76
  },
  {
    mes: "Febrero",
    temp_max_abs: 25.8,
    temp_min_abs: 1.2,
    humedad_rel: 77
  },
  {
    mes: "Marzo",
    temp_max_abs: 36.3,
    temp_min_abs: 1.9,
    humedad_rel: 79
  },
  {
    mes: "Abril",
    temp_max_abs: 32.5,
    temp_min_abs: -1.0,
    humedad_rel: 81
  },
  {
    mes: "Mayo",
    temp_max_abs: 27.4,
    temp_min_abs: -3.0,
    humedad_rel: 83
  },
  {
    mes: "Junio",
    temp_max_abs: 22.2,
    temp_min_abs: -5.5,
    humedad_rel: 84
  }
]

function tempmayor(tabla) {
  let mayor_temp = 0;
  for (elemento of tabla)
    mayor_temp = mayor_temp + elemento.temp_max_abs;
  return mayor_temp / tabla.length;
}

function tempmenor(tabla) {
  let menor_temp = 0;
  for (elemento of tabla)
    menor_temp = menor_temp + elemento.temp_min_abs;
  return menor_temp / tabla.length;
}

function humedad(tabla) {
  let humedad_r = 0;
  for (elemento of tabla)
    humedad_r = humedad_r + elemento.humedad_rel;
  return humedad_r / tabla.length;
}
console.log("La mayor temperatura promedio absoluta es", tempmayor(tabla_clima));
console.log("La menor temperatura promedio absoluta es", tempmenor(tabla_clima));
console.log("La humedad promedio es", humedad(tabla_clima));
