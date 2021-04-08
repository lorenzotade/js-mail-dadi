var emailList = ["lorenzo.tade@gmail.com", "guglielmo.terzo@gmail.com", "anonymous@protonmail.ch", "bad.creativity@pleasekill.me", "catlover93@gmail.com", "test@me.com"];

var inputEmail = prompt("Inserisci la tua email:")
document.getElementById("inputEmail").innerHTML = inputEmail;

var msgYes = " è presente nel database ed è autorizzato all'accesso.";
var msgNo = " non è presente nel database. Accesso negato."

for (var i = 0; i < emailList.length; i++) {
  var email = emailList[i];
  if (email === inputEmail) {
    document.getElementById("output").innerHTML = inputEmail + msgYes;
    break;
  } else {
    document.getElementById("output").innerHTML = inputEmail + msgNo;
  }
}