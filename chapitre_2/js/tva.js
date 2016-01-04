var prix = Number(prompt("Entrez le prix hors taxe : "));
prix = prix + (prix * 19.6 / 100);
console.log("Le prix TTC est de " + prix + " €.");
