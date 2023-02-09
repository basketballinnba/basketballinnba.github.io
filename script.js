// Pour menu déroulant

function basket(equipe) {
  if (equipe == "rien") {
    document.getElementById("infoEquipe").classList.remove("special");
    document.getElementById("infoEquipe").textContent="";
  }
  else {
    document.getElementById("infoEquipe").classList.add("special");
    if (equipe == "Warriors de Golden State") {
    document.getElementById("infoEquipe").textContent="Les Warriors de Golden State sont une franchise californienne de basket-ball de la NBA basée à San Francisco, dans la région de la baie de San Francisco. Elle évolue dans la Conférence Ouest, dans la Division Pacifique, et dispute ses matchs à domicile au Chase Center";
    }
    if (equipe == "Lakers de Los Angeles") {
    document.getElementById("infoEquipe").textContent="Les Lakers de Los Angeles (en anglais : Los Angeles Lakers, « les habitants des lacs de Los Angeles ») sont une franchise de basket-ball évoluant en NBA basée à Los Angeles en Californie. Les Lakers jouent leurs matchs à domicile au Staples Center, une salle partagée avec les Clippers de Los Angeles, les Sparks de Los Angeles de la WNBA et les Kings de Los Angeles de la Ligue nationale de hockey. ";
    }
    if (equipe == "Celtics de Boston") {
    document.getElementById("infoEquipe").textContent="Les Celtics de Boston est une franchise de basket-ball de la NBA basée à Boston dans l'État du Massachusetts aux États-Unis. Fondé le 6 juin 1946, le club évolue trois saisons dans la Basketball Association of America qui devient en 1949 la National Basketball Association.";
    }
    if (equipe == "Nets de Brooklyn") {
      document.getElementById("infoEquipe").textContent="Les Nets de Brooklyn sont une franchise de basket-ball de la National Basketball Association. L'équipe est basée dans l'arrondissement de Brooklyn à New York. Les Nets concourent au sein de la NBA en tant que membre de la Division Atlantique de la Conférence Est. L’équipe joue ses matchs à domicile au Barclays Center.";
    }
    if (equipe == "Grizzlies de Memphis") {
      document.getElementById("infoEquipe").textContent="Les Grizzlies de Memphis sont une franchise de basket-ball de la National Basketball Association, basée dans la ville de Memphis, dans l'État du Tennessee. Les Grizzlies concourent en tant que membre de la conférence Ouest au sein de la division Sud-Ouest de la ligue. Les Grizzlies jouent à domicile au FedExForum";
    }
  }
}