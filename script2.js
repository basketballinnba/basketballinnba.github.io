// Pour menu déroulant

function basket(joueur) {
  if (joueur == "rien") {
    document.getElementById("infoJoueur").classList.remove("special");
    document.getElementById("infoJoueur").textContent="";
  }
  else {
    document.getElementById("infoJoueur").classList.add("special");
    if (joueur == "Stephen Curry") {
    document.getElementById("infoJoueur").textContent="Stephen Curry, né le 14 mars 1988 à Akron (Ohio, États-Unis), est un joueur américain de basket-ball évoluant au poste de meneur dans l'équipe des Warriors de Golden State en NBA. Réputé pour ses qualités au tir à trois points, il est le joueur ayant inscrit le plus de paniers à trois points en 2013, 2014, 2015, 2016 et 2017 et est considéré comme le meilleur tireur de l'histoire de la NBA.";
    }
    if (joueur == "Klay Thompson") {
    document.getElementById("infoJoueur").textContent="Klay Thompson, né le 8 février 1990 à Los Angeles en Californie, est un joueur américain de basket-ball évoluant en NBA au poste d'arrière au sein du club des Warriors de Golden State. Avec les Warriors, il remporte le championnat en 2015, 2017, 2018 et 2022. Il est reconnu pour la qualité de son tir à trois points ";
    }
    if (joueur == "Jordan Poole") {
    document.getElementById("infoJoueur").textContent="Jordan Anthony Poole, né le 19 juin 1999 à Milwaukee dans le Wisconsin, est un joueur américain de basket-ball évoluant au poste d'arrière voire de meneur en National Basketball Association au sein des Warriors de Golden State";
    }
    if (joueur == "Draymond Green") {
      document.getElementById("infoJoueur").textContent="Draymond Green, de son nom complet, Draymond Jamal Green, Sr, surnommé Day-Day ou The Dancing Bear, est un joueur américain de basket-ball né le 4 mars 1990 à Saginaw dans le Michigan. Il évolue au poste d'ailier fort voire de pivot. Depuis plusieurs saisons, il est considéré comme l'un des meilleurs défenseurs de la NBA. En 2017, il est élu joueur défensif de l'année après avoir échoué deux fois consécutivement à la deuxième place.";
    }
  }
}