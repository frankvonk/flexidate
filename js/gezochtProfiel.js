var urlGezochtProfiel = window.location.href;
console.log(urlGezochtProfiel);
var pos = urlGezochtProfiel.search("id=");
console.log("SEARCHPOS: " +  pos);
profielId = urlGezochtProfiel.slice(pos+3);
console.log(profielId);


let url=' https://scrumserver.tenobe.org/scrum/api/profiel/read_one.php?id='+profielId;
let fotoUrl = "https://scrumserver.tenobe.org/scrum/img/";

fetch(url)
.then(function (resp)   { return resp.json(); })
.then(function (data)   { console.log(data);
  eGegeven = document.getElementById('nickname');
  eGegeven.innerHTML = data.nickname;
  eGegeven = document.getElementById('foto');
  eGegeven.setAttribute("src",fotoUrl + data.foto);
  eGegeven = document.getElementById('beroep');
  eGegeven.innerHTML = data.beroep;
  eGegeven = document.getElementById('haarkleur');
  eGegeven.innerHTML = data.haarkleur;
  eGegeven = document.getElementById('oogkleur');
  eGegeven.innerHTML = data.oogkleur;
  eGegeven = document.getElementById('grootte');
  eGegeven.innerHTML = data.grootte;
  eGegeven = document.getElementById('gewicht');
  eGegeven.innerHTML = data.gewicht;
  eGegeven = document.getElementById('geslacht');
  console.log(eGegeven);
  var geslacht = "";

switch(data.sexe){
  case "m":
  geslacht = "Man";
  break;
  case "v":
  geslacht = "Vrouw";
  break;
  case "x":
  geslacht = "Andere"
  break;
  default:
  geslacht = "XXX"

}
  eGegeven.innerHTML = geslacht;
})
.catch(function (error) { console.log(error);});
