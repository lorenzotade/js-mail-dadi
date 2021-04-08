var numComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById("numComputer").innerHTML = numComputer;

var numUser = Math.floor(Math.random() * 6) + 1;
document.getElementById("numUser").innerHTML = numUser;

var victoryMsg = "hai vinto!";
var defeatMsg = "hai perso!";
var drawMsg = "pareggio!";

if (numComputer > numUser) {
  document.getElementById("output").innerHTML = defeatMsg;
} else if (numComputer < numUser) {
  document.getElementById("output").innerHTML = victoryMsg;
} else {
  document.getElementById("output").innerHTML = drawMsg;
}