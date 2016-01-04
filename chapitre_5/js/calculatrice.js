function calculer(x, operation, y) {
  var resultat;
  switch (operation) {
    case "+":
      resultat = x + y;
      break;
    case "-":
      resultat = x - y;
      break;
    case "*":
      resultat = x * y;
      break;
    case "/":
      resultat = x / y;
      break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));






