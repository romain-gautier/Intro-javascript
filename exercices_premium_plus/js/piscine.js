for (var i = 0; i < 10; i++) {

  var reponse = prompt("Avez-vous un maillot?");
  var rep = reponse.toLowerCase();

  while((rep != "oui") && (rep != "non")) {
    var reponse = prompt("Avez-vous un maillot?");
    var rep = reponse.toLowerCase();
  }

  if (rep == "non") {
    console.log("Vous devez acheter un maillot de bain");
    var age = Number(prompt("Veuillez saisir votre âge"));

    while (age < 0) {
      var age = Number(prompt("Veuillez saisir votre âge"));
    }
    if ((age > 0) && (age < 18)) {
      console.log("Le maillot coute 15 euros");
    } else {
      console.log("Le maillot coute 25 euros");
    }
  } else {
    console.log("Vous pouvez entrer");
  }

}

console.log("Désolé la piscine est complète.");
