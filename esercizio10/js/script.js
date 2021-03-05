//
// var numero;
// var x = [];
//
//
//    var numero = prompt('Inserisci una parola');
//    x.push(numero);
//
//    var i = 0;
//     while (  i < x.lenght ) {
//       var indiceNoneRandom = Math.floor(Math.random() * x.lenght;
//        i++;
//     }
//
//   document.write (indiceNoneRandom);
var arr1 = [1,2,3,4,5,6];
var arr2 = [7,7,8,9,5,6,3,4,7,2,5];

if (arr1.length > arr2.length) {
  var ar = arr1;
  var ar2 = arr2;
} else if (arr1.length < arr2.length){
  var ar2 = arr1;
  var ar = arr2;
} else {
  alert("gli array hanno la stessa lunghezza");
}


while (  ar.length < ar2.length ) {
       var randomnumber = Math.floor(Math.random() * 100);
     ar.push(randomnumber)
     }

     document.write(ar2.length , ar.length);
