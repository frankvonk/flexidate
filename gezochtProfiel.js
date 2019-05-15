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
  /*let maand = parseInt(data[i].geboortedatum.slice(5, 7));
  let dag = parseInt(data[i].geboortedatum.slice(8, 10));
  let sterrenbeeld = bepaalSterrenbeeld(maand, dag);

  document.getElementById('sterrenbeeld').innerHTML = "<img width='200px' src='img/starsign/" + sterrenbeeld + ".png'>";*/


})
.catch(function (error) { console.log(error);});

/*
function bepaalSterrenbeeld(maand, dag){
  let sterrenbeelden = [
  "nvt", ["steenbok", 20], ["waterman",19], ["vissen", 20], ["ram", 20], ["stier", 20], ["tweeling", 21], ["kreeft", 22], ["leeuw", 22], ["maagd", 22], ["weegschaal", 22], ["schorpioen", 21], ["boogschutter", 21]
  ];
  let sterrenbeeld;

  if (dag <= sterrenbeelden[maand][1]){
    sterrenbeeld = sterrenbeelden[maand][0];
  } else if(maand == 12){
    sterrenbeeld = sterrenbeelden[1][0];
  } else {
    sterrenbeeld = sterrenbeelden[maand + 1][0];
  }
  console.log(sterrenbeeld);
  return sterrenbeeld;
  
}*/
