
(function(){

var desencadenar = $('.hamburger');
var cubrir = $('.cubrir');
var altenarElemento = $('.desplazar');
var estaCerrado = false;

var cargarPagina = function(){
  desencadenar.click(hamburger_cross);
  altenarElemento.click(alternar);
};

var hamburger_cross = function(){

  if (estaCerrado == true) {
    cubrir.hide();/*esconde*/
  } else {
    cubrir.show();/*muestra*/
  }
};

var alternar = function(){
  $('#wrapper').toggleClass('cambiado');
/*toogleClass: alterna entre agregar y quitar uno o más nombres de clase de los elementos seleccionados.*/
}

$(document).ready(cargarPagina);

})();
