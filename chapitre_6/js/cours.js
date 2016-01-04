console.log("ABC".length);
console.log("Je suis une chaîne".length);

var mot = "kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

var motInitial = "Bora-Bora";
var motEnMiniscules = motInitial.toLowerCase();
console.log(motEnMiniscules);
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules);

var chaine = "azerty";
console.log(chaine === "azerty");
console.log(chaine === "qwerty");

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");
console.log(valeurSaisie.toLowerCase() === "quitter");

var sport = "Tennis-ballon";
console.log(sport.charAt(0));
console.log(sport[0]);
console.log(sport.charAt(6));
console.log(sport[6]);

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]);
console.log(sport[longueurSport]);

var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}

