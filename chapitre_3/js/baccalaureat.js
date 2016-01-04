var moyenne = Number(prompt("Entrez votre moyenne :"));

if (moyenne < 10) {
  console.log("Vous êtes recalé(e) :( ");
} else {
  if ((moyenne >= 10) && (moyenne < 12)) {
    console.log("Bravo vous avez votre bac!");
  } else {
    console.log("Super vous avez une mention!");
  }
}
