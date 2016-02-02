var Contact = {
  initContact: function(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  description: function() {
    var nomComplet = this.prenom + " " + this.nom;
    return nomComplet;
  },
};

var choix = 0;

var contact1 = Object.create(Contact);
contact1.initContact("Lévisse","Carole");

var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

var listeContacts = [];
listeContacts.push(contact1);
listeContacts.push(contact2);

while (choix != 9) {

  console.log("Bienvenue dans le gestionnaire de contacts");
  console.log("1: Lister les contacts");
  console.log("2: Ajouter un contact");
  console.log("9: Quitter");

  var choix = Number(prompt("Choisissez une action"));

  while ((choix != 1) && (choix != 2) && (choix != 9)) {
    var choix = Number(prompt("Choisissez une action"));
  }

  if (choix == 1) {
    console.log("Voici la liste des contacts inscrits dans le gestionnaire :")
    listeContacts.forEach(function (listeContact) {
    console.log(listeContact.description());
    });
  }

  else if (choix == 2) {
    var nom1 = prompt("Veuillez saisir le nom du contact à saisir");
    var prenom1 = prompt("Veuillez saisir le nom du contact à saisir");
    var newContact = Object.create(Contact);
    newContact.initContact(nom1, prenom1);
    listeContacts.push(newContact);

    console.log("Voici la liste des contacts modifiés :")
    listeContacts.forEach(function (listeContact) {
    console.log(listeContact.description());
    });
  }

}

console.log("Merci, à bientôt!")

