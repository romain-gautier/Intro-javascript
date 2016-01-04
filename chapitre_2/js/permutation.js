var nombre1 = 5;
var nombre2 = 3;

var a = nombre1;
var b = nombre2;

nombre2 = a;
nombre1 = b;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5
