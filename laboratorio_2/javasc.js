// Eventos click
var clickExamples = document.getElementsByClassName('click-example');
for (var i = 0; i < clickExamples.length; i++) {
  clickExamples[i].addEventListener('click', function() {
    this.style.backgroundColor = '#436850'
  });
};
/* 
Con un ciclo 'for' se hacen uso de los tres elementos que existen llamados 'click-example'.
A cada elemento se le asigna que el color del fondo cambie con la acción de "click".
Estos elementos son divs que se colocaron en el html.
*/


// Eventos focus
var focusExamples = document.getElementsByClassName('focus-example');
for (var i = 0; i < focusExamples.length; i++) {
  focusExamples[i].addEventListener('focus', function() {
    this.style.backgroundColor = '#436850';
  });

  focusExamples[i].addEventListener('focusout',function() {
    this.style.backgroundColor = '#FBFADA'
  });
}
/*
Siempre se hace uso del ciclo for para que el listener afecte a cada uno de los elementos 
sin la necesidad de repetir mucho código.
Estos elementos usados son inputs.

La función del código es que el color de fondo del input cambie cada vez que está enfocado el cursor de texto.
Se le agregó también, código para que al dejar de enfocarse el input cambie de vuelta a su color original.
*/


// Eventos mouseover
var mouseExamples = document.getElementsByClassName('mouseover-example');
for (var i = 0; i < mouseExamples.length; i++) {
  mouseExamples[i].addEventListener('mouseover',function(){
    this.style.fontSize = '50px'
  })

  mouseExamples[i].addEventListener('mouseout',function(){
    this.style.fontSize = '40px'
  })
}
/* 
Como siempre, se hizo uso del ciclo for para afectar a cada elemento que contenga el mismo nombre y
ahorrarnos código.
En este caso, cada elemento es un label que se utilizó.

La función de este código es que cada que se pase el ratón encima de un label, esta cambie de tamaño.
Esto, se logra con el evento 'mouseover'.

Esta vez, se agregó otro listener, pero este para que cuando se quite el ratón de encima,
el tamaño del texto regrese a su normalidad.
Este evento ('mouseout'), no se enseño en la práctica, pero se añadió para que se viera mejor.
*/
