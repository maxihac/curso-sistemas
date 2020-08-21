let titulo = "tabla clima"; /*como poner un script dentro del codigo html, como un style en CSS*/
console.log(titulo);

/*Comentarios:

La estructura de datos necesita un ajuste. Porque se mezclan las columnas con las filas.
Se puede plantear de diferentes formas:

a) Considerar cada fila como un array, entonces:

temp_max_absoluta = 
[
	{ mes:"Enero", valor:39.3 },
	{ mes:"Febrero", valor: 25.8},
	... y así sucesivamente.
]

El acceso te queda luego:
temp_max_absoluta[0].valor  <-- 0:Enero, 1:Febrero, 2:Marzo, y así...
El índice del array indica implícitamente el mes (Teniendo en cuenta que arranca desde 0)

b) Considerar todas las propiedades como una fila, y los meses como columnas:

tabla =
[
	{
	    temp_max_abs: 39.3,
	    temp_min_abs: 4.7,
	    humedad_rel: 76,
	    ...resto de propiedades...
	},
	{
	    temp_max_abs: 25.8,
	    temp_min_abs: 1.2,
	    humedad_rel: 77
	    ...resto de propiedades...
	},

	...etc...
]

Aquí te quedará la tabla con 12 objetos. El índice también indica implícitamente el mes.

tabla[0].humedad_rel  <-- 0:Enero

c) Híbrido entre a) y b)

tabla=
{
	temperatura_max_abs:[39.3, 25.8, ....  ],
	temp_min_abs:[4.7, 1.2, ... ],
	...etc...
}

El acceso queda:

tabla.temperatura_max_abs[0]

d) Armar una matriz con datos crudos:

[ 
	[39.3, 25.8, ....  ],
	[4.7, 1.2, ... ]
]

(Hay que tener cuidado acá)

-------
Recomendación.. opción c)

*/

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

function promedios(tabla) {
  let mayor_temp = 0;
  let result=[0, 0, 0];
  for (var i = 0; i < tabla.length; i++) {
    result[0] = result[0] + tabla[i].temp_max_abs;
    result[1] = result[1] + tabla[i].temp_min_abs;
    result[2] = result[2] + tabla[i].humedad_rel;
  }
  result[0] = result[0] / tabla.length;
  result[1] = result[1] / tabla.length;
  result[2] = result[2] / tabla.length;

return result;
}
  console.log("La mayor y menor temperatura y humedad  promedio son", promedios(tabla_clima));
