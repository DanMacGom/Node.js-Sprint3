const rec_message = (mess = "This message is going to repeat itself.") => {
  console.log(mess);
  setTimeout(rec_message, 1000);
}

rec_message();
