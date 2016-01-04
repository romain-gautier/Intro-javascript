var jour = prompt("Quel jour sommes nous?");
switch(jour) {
  case "lundi":
  console.log("Demain nous serons Mardi.");
  break;
  case "mardi":
  console.log("Demain nous serons Mercredi.");
  break;
  case "mercredi":
  console.log("Demain nous serons Jeudi.");
  break;
  case "jeudi":
  console.log("Demain nous serons Vendredi.");
  break;
  case "vendredi":
  console.log("Demain nous serons Samedi.");
  break;
  case "samedi":
  console.log("Demain nous serons Dimanche.");
  break;
  case "dimanche":
  console.log("Demain nous serons Lundi.");
  break;
  default:
  console.log(jour + " n'est pas un jour valide");
}
