//primer programa javascript
let name = "Hola mundo"; /*como poner un script dentro del codigo html, como un style en CSS*/
console.log(name);
let tabla_produc = [{
    lacteo: "leche",
    porcion: "200",
    contenido_calcio: 280
  },
  {
    lacteo: "leche",
    porcion: "200",
    contenido_calcio: 100
  },
  {
    lacteo: "leche",
    porcion: "200",
    contenido_calcio: 50
  },
  {
    lacteo: "postre",
    porcion: "200",
    contenido_calcio: 300
  },
  {
    lacteo: "yogurt",
    porcion: "200",
    contenido_calcio: 20
  }
]

function lacteodemayorcalcio(tabla_datos) {
  let mayor = tabla_datos[0].contenido_calcio;
  let componente = tabla_datos[0];
  for (elemento of tabla_datos) {
    if (elemento.contenido_calcio > mayor) {
      mayor = elemento.contenido_calcio;
      componente = elemento;
    }
  }
  return componente.lacteo;
}
console.log(lacteodemayorcalcio(tabla_produc));
