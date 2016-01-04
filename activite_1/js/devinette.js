/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette ! Vous avez 6 essais pour trouver le nombre secret !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var choix = 0;

for (var i = 1; i <= 6; i++) {
  choix = Number(prompt("Veuillez saisir un chiffre entre 1 et 100 : "));

  while ((choix < 1) || (choix > 100)) {
    console.log("Vous devez saisir un nombre entre 1 et 100");
    choix = Number(prompt("Veuillez saisir un chiffre entre 1 et 100 : "));
  }

  if ((solution === choix)) {
    console.log("Bravo la solution était " + solution +" !");
    console.log("Vous avez trouvé en " + i + " essai(s).");
    break;
  } else if (choix > solution) {
    console.log(choix + " est trop grand.");
  } else if (choix < solution) {
    console.log (choix + " est trop petit.");
  }
}
if (i > 6) {
  console.log("Dommage... La solution était " + solution + " ...");
}

