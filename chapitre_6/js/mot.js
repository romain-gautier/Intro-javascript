function compterNbVoyelles(insertMot) {
  var insertMotMin = insertMot.toLowerCase();
  var voyelles = 0;
  for (var i = 0; i < insertMotMin.length; i++) {
    if ((insertMotMin[i] === "a") || (insertMotMin[i] === "e") || (insertMotMin[i] === "i") || (insertMotMin[i] === "o") || (insertMotMin[i] === "u") || (insertMotMin[i] === "y")) {
      voyelles++;
    }
  }
  return voyelles;
}

function inverser(insertMot) {
  var motInverser = "";
  for (var i = 0; i < insertMot.length; i++) {
    motInverser = insertMot[i] + motInverser ;
  }
  return motInverser;
}

function convertirEnLeetSpeak(insertMot) {
  var leetMot = "";
  for (var i = 0; i < insertMot.length; i++) {
    leetMot = leetMot + trouverLettreLeet(insertMot[i]);
  }
  return leetMot;
}

function trouverLettreLeet(lettre) {
      var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
    }
    return lettreLeet;
}

var mot = prompt("Veuillez saisir le mot de votre choix :");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s).");
console.log("Il s'écrit en minuscule(s) " + mot.toLowerCase() + ".");
console.log("Il s'écrit en majuscule(s) " + mot.toUpperCase() + ".");
console.log ("Il contient " + compterNbVoyelles(mot) + " voyelles.");
console.log("Il s'écrit à l'envers " + inverser(mot) + ".");

if (inverser(mot.toLowerCase()) === mot.toLowerCase()) {
  console.log(mot + " est un palindrome.");
} else {
  console.log(mot + " n'est pas un palindrome.");
}

console.log("Il s'écrit en leet geek " + convertirEnLeetSpeak(mot) + ".");
