var mensaje;
var hay_fresas;
var hay_peras;
var hay_mangos;

function jugo_de_fresas() {
  window.alert('Batir fresas');
  document.querySelector('#header').innerHTML = mensaje
}

function servir_vaso_de_agua() {
  window.alert('Sirveme agua');
  document.querySelector('#header').innerHTML = mensaje
}
function jugo_de_pera() {
  window.alert('Batir Peras');
  document.querySelector('#header').innerHTML = mensaje
}
function jugo_de_mango() {
  window.alert('Batir mango');
  document.querySelector('#header').innerHTML = mensaje
}

hay_fresas = false;
hay_peras = false;
hay_mangos = false;

if (hay_fresas) {
  mensaje = "Batido de Fresas"
  jugo_de_fresas();
} else if (hay_peras) {
  mensaje = "Batido de Peras"
  jugo_de_pera();
} else if (hay_mangos) {
  mensaje = "Batido de mango"
  jugo_de_mango();
} else {
  mensaje = "Servir agua"
  servir_vaso_de_agua();
}
