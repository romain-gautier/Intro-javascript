var unObjet = {
  a: 2
};

var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);

var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a);
console.log(encoreUnObjet.b);
