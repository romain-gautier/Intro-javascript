var mois = Number(prompt("Entrez le numéro du mois :"));

if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) {
  console.log(mois + " a 31 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) {
  console.log(mois + " a 30 jours.");
} else if (mois === 2) {
  console.log(mois + " a 28 jours.");
} else {
  console.log("Je n'ai pas compris votre choix.");
}



