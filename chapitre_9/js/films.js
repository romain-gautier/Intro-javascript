var Film = {
  // initialise le film
  init: function(titre, annee, realisateur) {
    this.titre = titre;
    this.annee = annee;
    this.realisateur = realisateur
  },
  // Renvoie la description du film
  decrire: function() {
    var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
    return description;
  }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorcese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe LAcheau et Nicolas Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
