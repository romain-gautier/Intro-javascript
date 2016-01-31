var Film = {
  // initialise le film
  init: function(titre, annee) {
    this.titre = titre;
    this.annee = annee;
  },
  // Renvoie la description du film
  decrire: function() {
    var description = this.titre + " (" + this.annee + ")";
    return description;
  }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});


//var films = ["Le loup de Wall Street", "Vice-Versa", "Baabysitting"];

//console.log(films.length);

//var tableauVide = [];
//console.log(tableauVide.length);

//console.log(films[0]);
//console.log(films[1]);
//console.log(films[2]);

//for (i = 0; i < films.length; i++) {
//  console.log(films[i]);
//}

//films.forEach(function (film) {
//  console.log(film);
//});

//films.push("Les bronzés");

//console.log(films[3]);


