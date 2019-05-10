document.getElementById('register').addEventListener('click', function (e) {
  const rooturl = "https://scrumserver.tenobe.org/scrum/api";
  let url=rooturl+'/profiel/create.php';

  let waardeGeslacht = document.getElementById('geslacht').value;
  console.log(waardeGeslacht);
  let charGeslacht = "o"
  switch (waardeGeslacht) {
    case "man":
       charGeslacht="m";
      break;
    case "vrouw":
      charGeslacht="v";
      break;
    default:
    charGeslacht = "x";
  }
console.log(charGeslacht);
console.log(typeof charGeslacht);
      let data = {
          familienaam: document.getElementById('achternaam').value,
          voornaam: document.getElementById('voornaam').value,
          geboortedatum:document.getElementById('geboortedatum').value,
          email: document.getElementById('email').value,
          nickname: document.getElementById('nickname').value,
          foto: "no_picture.jpg",
          beroep: document.getElementById('beroep').value,
          sexe: charGeslacht,
          haarkleur: document.getElementById('haarkleur').value,
          oogkleur: document.getElementById('oogkleur').value,
          grootte: document.getElementById('grootte').value,
          gewicht: document.getElementById('gewicht').value,
          wachtwoord: document.getElementById('wachtwoord').value,
          lovecoins: "3"
      }
      var request = new Request(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      });
      fetch(request)
          .then( function (resp)  { return resp.json(); })
          .then( function (data)  { console.log(data);  })
          .catch(function (error) { console.log(error); });

      });// Einde knop
