document.querySelector('#header').innerHTML = "esoty leyendo el documento switch"
var fruta
var mensaje
var userInput = prompt("ingrese el sabor de su fruta") 

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

  fruta = userInput.toLowerCase()
switch (fruta) {
    case "fresa":
        mensaje = "batir fresas"
        jugo_de_fresas()
    break; 
    case "naranja":
    case "mandarina":
        jugo_de_naranja()
    break;
    default:
        servir_vaso_de_agua()
    break
}
