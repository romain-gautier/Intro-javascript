var compte = {
  titulaire: "Alex",
  solde: 0,

  crediter : function(montant) {
    this.solde = this.solde + montant;
  },
  debiter : function(montant) {
    this.solde = this.solde - montant;
  },
  decrire : function() {
    return "Titulaire : " + this.titulaire + ", solde : "  + this.solde + " euros.";
  }

};

console.log(compte.decrire());
var credit = Number(prompt("Combien voulez-vous créditer sur le compte? "));
compte.crediter(credit);

var debit = Number(prompt("Combien voulez-vous débiter"));
compte.debiter(debit);

console.log(compte.decrire());




