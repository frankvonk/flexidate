
let profielId = localStorage.getItem('profielId');
console.log(profielId);

let url=' https://scrumserver.tenobe.org/scrum/api/profiel/read_one.php?id='+profielId;

fetch(url)
.then(function (resp)   { return resp.json(); })
.then(function (data)   { console.log(data);
  eGegeven = document.getElementById('familienaam');
  eGegeven.innerHTML = data.familienaam;
  eGegeven = document.getElementById('voornaam');
  eGegeven.innerHTML = data.voornaam;
  eGegeven = document.getElementById('geboortedatum');
  eGegeven.innerHTML = data.geboortedatum;
  eGegeven = document.getElementById('email');
  eGegeven.innerHTML = data.email;
  eGegeven = document.getElementById('nickname');
  eGegeven.innerHTML = data.nickname;
  eGegeven = document.getElementById('foto');
  eGegeven.innerHTML = data.foto;
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
  eGegeven = document.getElementById('wachtwoord');
  eGegeven.innerHTML = data.wachtwoord;
  eGegeven = document.getElementById('lovecoins');
  eGegeven.innerHTML = data.lovecoins;

})
.catch(function (error) { console.log(error);});
