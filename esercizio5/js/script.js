

var x = [];

for (var i = 0; i <= 6; i++){
   var numero = parseInt(prompt('Inserisci un numero'));

   if (!IsNaN(numero) && numero % 2 == 1){
   x.push(numero);
  }

}

// stampa array
  document.getElementById("messaggio").innerHTML = numero;
