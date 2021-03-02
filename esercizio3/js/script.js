
var numero;
var somma=0;

for (var i = 0; i < 10; i++){
  numero = parseInt(prompt('Inserisci un numero'));
}
for (var i = 0; i < 10; i++){
  somma+=numero;
}
 document.getElementById("messaggio").innerHTML =" la somma e\' :" + somma ;
