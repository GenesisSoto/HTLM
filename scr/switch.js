document.querySelector('#header').innerHTML = "esoty leyendo el documento switch"
var fruta
var mensaje
var userInput = prompt("ingrese el numero de la fruta") 

function jugo_de_fresas() {
    document.querySelector('#header').innerHTML = mensaje
  }
  function jugo_de_naranja() {
    mensaje = "batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
    mensaje = "sirvame el vaso de agua";
    document.querySelector('#header').innerHTML = mensaje
  }

  fruta = parseInt(userInput)// con parseInt se convierte a entero
switch (fruta) {
    case 1:
        mensaje = "batir fresas"
        jugo_de_fresas()
    break; 
    case 2:
    case 3:
        jugo_de_naranja()
    break;
    default:
        servir_vaso_de_agua()
    break
}
