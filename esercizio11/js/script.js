var nomi = ["gigi", "pino","armando","franco"];
var nomi = ["inzaghi", "corillo","bianchi","rossi"];
var invitati = [];

   var i = 1;
    while (  i <= 3 ) {
      var indiceNoneRandom = Math.floor(Math.random() * nomi.lenght;
      var indiceCognoneRandom = Math.floor(Math.random() * cognomi.lenght;
      var nomeCompleto = nomi[indiceNoneRandom] + " " +nomi[indiceCognoneRandom ];
      invitati.push(nomeCompleto);
       i++;
    }

  document.write ( invitati);
