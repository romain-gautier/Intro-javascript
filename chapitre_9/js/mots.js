var mots = "";
var tableauMots = [];

while (mots != "stop") {
  mots = prompt("Veuillez saisir un mot :");
  if (mots != "stop") {
    tableauMots.push(mots);
  }
}

tableauMots.forEach(function (mot) {
  console.log(mot);
});
