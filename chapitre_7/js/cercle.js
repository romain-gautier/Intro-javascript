var r = Number(prompt("Entrez le rayon du cercle"));

var cercle = {
  rayon: r,
  pi : Math.PI,

  perimetre : function() {
    return 2 * this.pi * this.rayon;
  },
  aire : function() {
    return this.pi * this.rayon * this.rayon;
  }

};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

