var temp = 50;

while ((temp < 0) || (temp > 45)) {
  temp = Number(prompt("Veuillez saisier la température actuelle entre 0 et 45° :"));
}

if ((temp >= 0) && (temp <= 12)) {
  console.log("Ca caille!");
} else if ((temp >= 13) && (temp <= 24)) {
  console.log("Un petit apéro les potos?");
} else {
  console.log("Wahou on va cramer!");
}

