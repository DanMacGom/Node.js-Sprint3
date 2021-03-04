// Nivell 1
// Exercici 1
// Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon.
const rec_message = (mess = "This message is going to repeat itself.") => {
  console.log(mess);
  setTimeout(rec_message, 1000);
}

rec_message();
