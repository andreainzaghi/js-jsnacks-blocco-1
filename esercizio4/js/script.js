
var invitati = ["inza", "tommaso", "samu", "alessio", "luca","lafra","clelia", "caterina"];

var utente = prompt("Benvenuto! Prima di entrate di il tuo nome");



console.log("il nome inserito dall'utente è " + utente);

var nomeg=0;

// 2. Confrontarla con le altre email

for (var i = 0; i < invitati.length; i++) {
  if (utente.toLowerCase() == invitati[i].toLowerCase() ) {
    console.log("Valido!");
    nomeg = 1;
  }
}

if (nomeg == 1) {
  var sesso = prompt("sei un M o F ?");
  console.log("Puoi entrare");
  document.getElementById("messaggio1").innerHTML = "lei e' il/la benvenuto ,prego si  diverta alla mia festa";
  document.getElementById("disclaimer").innerHTML = "sei in lista vip";
  if (sesso=="M"){
    document.getElementById("messaggio").innerHTML = "paghi pieno caro mio";
  }
  else {
     document.getElementById("messaggio").innerHTML = "cara signorina lei entra gratis";
  }
} else {
  console.log("You shall not pass!");
  document.getElementById("messaggio1").innerHTML = "sei fuori";
  document.getElementById("disclaimer").innerHTML = "sei un marcio";
}
