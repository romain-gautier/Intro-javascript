var mousquetaire = ["Athos", "Portos", "Aramis"];
console.log("Voici les trois mousquetaires!");

for (var i = 0; i < mousquetaire.length; i++) {
  console.log(mousquetaire[i]);
}

mousquetaire.push("D'Artagnan");
console.log("A présent ils sont 4!");

mousquetaire.forEach(function(mousquetaires){
  console.log(mousquetaires);
});
