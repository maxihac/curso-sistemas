//XMLHTTPRequest
//fech()
function startApplication(){

  let name ="hola";
  let request = new XMLHttpRequest(); //object[XMLHttpRequest]
  //eventos propios de la funcionalidad que implenta
  /* Para hacer una consulta debemos especificar
  a) el metodo POST o GET,PUT..
  b) Necesitamos la URL(direccion del servidor)*/
  request.open('get','https://www.dolarsi.com/api/api.php?type=valoresprincipales');
  //adjuntar informacion de la peticion
function onCompleteRequest(event){
console.log(event); // se ve el objeto en pantalla dentro de la consola y lo exploro de ahi saco el campo donde estan los datos asociados al XMLHTTPRequest
  let html = '<p>'+ event.currentTarget.responseText   +'</p>';
  document.getElementById('app').innerHTML =html;
}
request.addEventListener('loadend',onCompleteRequest);
  //envio la peticion
  request.send();

}
startApplication();
