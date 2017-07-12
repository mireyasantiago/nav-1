var elemento = document.querySelector('#ejemplo');

elemento.getAttribute('id'); // "ejemplo"
elemento.getAttribute('data-atributo-que-no-existe'); // null
elemento.getAttribute('data-atributo-sin-valor'); // ""
