function perimetre(rayon) {
  return (2 * Math.PI * rayon);
}

function aire(rayon) {
  return (Math.PI * (rayon * rayon));
}

var rayonUtilisateur = Number(prompt("Saisissez le rayon du cercle pour obternir son périmètre et son aire : "));
console.log(perimetre(rayonUtilisateur));
console.log(aire(rayonUtilisateur));

console.log("Le périmètre du cercle est de " + perimetre(rayonUtilisateur) + " et son aire est de " + aire(rayonUtilisateur) + " .");







