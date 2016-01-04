var nombre = Number(prompt("Veuillez saisir la valeur de la table de multiplication à afficher : "));

for (var i = 1; i <= 10; i++) {
  console.log(nombre + " * " + i + " = " + (nombre * i));
}

var a = 1;
while (a <= 10) {
  console.log(nombre + " * " + a + " = " + (nombre * a));
  a++;
}
