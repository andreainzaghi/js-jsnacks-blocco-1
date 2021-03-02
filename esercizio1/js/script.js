var n1 = prompt("inserisci il primo numero");
var n2 = prompt("inserisci il secondo numero");
if (n1 > n2) {
  document.getElementById("messaggio").innerHTML = "il primo numero e' il piu grande"
} else if(n1 < n2){
  document.getElementById("messaggio").innerHTML = "il secondo numero e' il piu grande"
} else if(n1 = n2){
  document.getElementById("messaggio").innerHTML = "i numero sono uguali"
}
