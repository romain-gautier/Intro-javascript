var note = -1;

while ((note < 0) || (note > 10)) {
  note = Number(prompt("Veuillez saisier votre note entre 0 et 10 :"));
}

note = note + 10;

console.log("Votre note réelle est " + note + "/20 .");

