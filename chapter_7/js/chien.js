var chien = {
  nom: "Rantanplan",
  race: "coker",
  taille: 37,

  aboyer : function() {
    return "Grrr! Grrrr!";
  }

};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm.");
console.log("Tiens un chat! " + chien.nom + " aboie : " + chien.aboyer());

