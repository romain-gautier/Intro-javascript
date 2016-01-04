function direBonjour(prenom, nom) {
  var message = "Bonjour, " + prenom + " " + nom + " !";
  return message;
}

var p = prompt("Quel est votre prenom ?");
var n = prompt("Quel est votre nom ?");

console.log(direBonjour(p, n));


