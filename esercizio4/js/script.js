
var invitati = ["inza", "tommaso", "samu", "alessio", "luca","lafra","clelia", "caterina"];

var utente = prompt("Benvenuto! Prima di entrate di il tuo nome");
var sesso = prompt("sei un M o F ?");
var emme = 1;

console.log("il nome inserito dall'utente è " + utente);

var nomeg=0;

// 2. Confrontarla con le altre email

for (var i = 0; i < invitati.length; i++) {
  if (utente.toLowerCase() == invitati[i].toLowerCase() ) {
    console.log("Valido!")
    nomeg = 1;
  }
}

if (nomeg == 1) {
  console.log("Puoi entrare");
  document.getElementById("messaggio").innerHTML = "lei e' il/la benvenuto ,prego si  diverta alla mia festa"
  document.getElementById("disclaimer").innerHTML = "sei in lista vip"
} else {
  console.log("You shall not pass!");
  document.getElementById("messaggio").innerHTML = "sei fuori"
  document.getElementById("disclaimer").innerHTML = "sei un marcio"
}


if (nomeg == 1) {
  console.log("Puoi entrare");
  document.getElementById("messaggio").innerHTML = "lei e' il/la benvenuto ,prego si  diverta alla mia festa"
  document.getElementById("disclaimer").innerHTML = "sei in lista vip"
} else {
  console.log("You shall not pass!");
  document.getElementById("messaggio").innerHTML = "sei fuori"
  document.getElementById("disclaimer").innerHTML = "sei un marcio"
}


if ( emme){
  document.getElementById("messaggio").innerHTML = "paghi pieno caro mio"
}
else if ( effe ){
   document.getElementById("messaggio").innerHTML = "cara signorina lei entra gratis"
}
