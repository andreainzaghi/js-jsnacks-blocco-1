
var invitati = ["yogurt","pollo","albume","cioccolato","farro","broccoli","carote","mela","olio","riso","banana"];
var arr2 = [52,156,43,515,335,24,41,52,885,356,93];
var cibo =prompt("Benvenuto! cosa hai mangiato?");


var nomeg=0;

// 2. Confrontarla con le altre email

for (var i = 0; i < invitati.length; i++) {
  if (cibo.toLowerCase() == invitati[i].toLowerCase()) {
      console.log(i);
      nomeg = 1;
  }
}

if (nomeg == 1) {
  var peso = parseInt(prompt("In che quantita(gr.)?"));
  var sum = 0;
    sum += arr2[i] * peso;
   document.getElementById("messaggio").innerHTML =" la somma e\' :" + sum ;
}
