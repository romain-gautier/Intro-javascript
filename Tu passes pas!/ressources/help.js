function checkForm() {

  var nomUser = document.forms["form"].elements["name"].value;
  var emailUser = document.forms["form"].elements["email"].value;
  var dobUser = document.forms["form"].elements["date"].value;
  var ageUser = document.forms["form"].elements["age"].value;
  var webUser = document.forms["form"].elements["url"].value;
  var phoneUser = document.forms["form"].elements["tel"].value;
  var http = "http://";


  // le champ nom doit être compris entre 3 et 10 caractères et pas de que des nombres
  if (Number(nomUser)) {
    alert("Le nom ne peut pas contenir que des chiffres")
  } else {
    var nomUserMin = nomUser.toLowerCase();
    if ((nomUserMin.length < 3) || (nomUserMin.length > 10)) {
      alert("Le nom doit contenir entre 3 et 10 caractères");
    } else {
      alert("Nom ok.");
    }
  }

  // email doit contenir un @ et ne doit pas commencer ou terminer par @
  if (Number(emailUser)) {
    alert("Votre email ne peut pas être composé que de chiffres");
  } else if ((emailUser.search("@") > 0) && (emailUser.lastIndexOf("@") < (emailUser.length - 1))) {
      alert("Email ok.");
    } else {
      alert("Le mail doit obligatoirement contenir un @! Il ne peut se trouver ni en début ni en fin d'adress!");
    }


  // dob uniquement des chiffres : 2 pour le jour, 2 pour le mois, 4 pour l'année

  if (!Number(dobUser)) {
    alert("La date de naissance ne peut contenir que des lettres ou être vide!");
  } else if (dobUser.length !== 8) {
    alert("La date de naissance doit être composée de 8 chiffres sous form jj mm aaaa");
  } else {
    alert("Date de naissance ok.");
  }

  // age uniquement des chiffres entre 1 et 150
  if (!Number(ageUser)) {
    alert("L'âge ne peut être composé de lettres ou être vide!");
  } else if ((ageUser < 1) || (ageUser > 150)) {
    alert("Votre âge doit être compris entre 1 et 150");
  } else {
    alert("Age ok.");
  }

  // web commence par http:// et ne doit pas finir par http://
  if (Number(webUser)) {
    alert("L'adresse de votre site web ne peut être composée que de chiffres");
  } else if ((webUser.indexOf(http) === 0) && (webUser.lastIndexOf(http) < (webUser.length - 7))) {
      alert("Adresse web ok.");
    } else {
      alert("L'adresse du site doit obligatoirement débuter par http:// et ne peut se finir par http://!");
    }

  // téléphone doit contenir 10 chiffres
  if (!Number(phoneUser)) {
    alert("Le téléphone ne peut pas contenir de lettres!");
  } else if (phoneUser.length !== 10) {
    alert("Le téléphone doit être composé de 10 chiffres!");
  } else {
    alert("Numéro de téléphone ok.");
  }

}
