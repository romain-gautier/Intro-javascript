var nombre = Number(prompt("Entrez un nombre entre 1 et 10 : "));

  for (var i = nombre; i < nombre + 10; i++) {
      if (i % 2 === 0) {
          console.log(i + " est pair");
      } else {
        console.log(i + " est impair");
      }
  }

