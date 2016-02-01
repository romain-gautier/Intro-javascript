var noms = ["Pierre", "Julien", "Thomas"];
var i = 0;

console.log("Voici les noms présents actuellement dans la liste.")
noms.forEach(function (nom) {
    console.log(nom);
});

for (i = 0; i < 2; i++ ) {
  var nom1 = prompt("Veuillez saisir le premier nom manquant :");
  noms.push(nom1);
}


console.log("Voici la liste actualisé avec les deux noms manquants");
console.log("Voici les noms présents actuellement dans la liste.")
noms.forEach(function (nom) {
    console.log(nom);
});

