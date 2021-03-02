var n11 = prompt("inserisci la prima parola");
var n22 = prompt("inserisci la seconda parola");
var n1 = n11.length;
var n2 = n22.length;
if (n1 > n2) {
  document.getElementById("messaggio").innerHTML = "la prima parola e la piu lunga"
} else if(n1 < n2){
  document.getElementById("messaggio").innerHTML = "la seconda parola e la piu lunga"
} else if(n1 = n2){
  document.getElementById("messaggio").innerHTML = "la lunghezza delle parole e' uguali"
}
