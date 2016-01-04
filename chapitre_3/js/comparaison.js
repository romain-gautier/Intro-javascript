var a = Number(prompt("Entrez une valeur a :"));
var b = Number(prompt("Entrez une valeur b :"));

if (a > b) {
  console.log(a + " est supérieur à " + b);
} else {
  if (a < b) {
    console.log(a + " est inférieur à " + b);
  } else {
    console.log(a + " est égal à " + b);
  }
}
