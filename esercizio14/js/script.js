
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var arrayuno = [1,2,3,4,5,6,7,8,9,23,45,67,89,22,49,15,19,35,29,57,0];
var arraydue =[];
var numerop = parseInt(prompt('inserisci il minimo'));
var numerog = parseInt(prompt('inserisci il massimale'));

for (var i = 0; i < arrayuno.length; i++) {
	var numero = arrayuno[i];
  if (numero < numerog && numero > numerop) {
  	arraydue.push(numero);
  }
}
console.log(arraydue);
