function carre(x) {
  var auCarre = "Le carré de " + x + " est" + " " + (x * x) + " .";
  return auCarre;
}

console.log(carre(0));
console.log(carre(2));
console.log(carre(5));

for (var i = 0; i <= 10; i++) {
  console.log(carre(i));
}

var nombre = Number(prompt("Entrez la valeur que vous voulez mettre au carré : "));
console.log(carre(nombre));





