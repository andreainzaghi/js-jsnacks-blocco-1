
var numero;
var x = [];


   var numero = prompt('Inserisci una parola');
   x.push(numero);


   function r(numero) {
     var l=numero.length-1;
     return l<3?numero:numero[0]+numero.slice(1,l).split("").sort(function(){return Math.random()-.5}).join("")+numero[l];
   }
  document.write (x);
