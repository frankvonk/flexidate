
function uploadPicture(base64String) {
    console.log('     • Foto wordt doorgestuurd naar de API.');
    let foto = document.getElementById('foto').value;
    let naam = foto.slice(12);
    let afbeelding = base64String;

    let url = 'https://scrumserver.tenobe.org/scrum/api/image/upload.php';

    let data = {
        naam: naam,
        afbeelding: afbeelding
    }

    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    console.log(data);


    fetch(request)
        .then(function (resp) {                     return resp.json(); })
        .then(function (data) {
            console.log('     ==> OK (Foto te vinden op url = ' + data.fileURL + ')');
            console.log('     • Foto inladen in IMG');
            //document.getElementById('uploadResult').src = data.fileURL;
            console.log('     ==> OK');
            console.log('==> Klaar');
        })
        .catch(function (error) { console.log(error); });
} // einde functie

document.getElementById('register').addEventListener('click', function (e) {

    let file = document.querySelector('input[type=file]').files[0];
	  let reader = new FileReader();
    reader.onloadend = function() {
		console.log('RESULT', reader.result);
		uploadPicture(reader.result);
  }
  reader.readAsDataURL(file);

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
  let foto = document.getElementById('foto').value;
  let splice = foto.slice(12);
        let data = {
            familienaam: document.getElementById('achternaam').value,
            voornaam: document.getElementById('voornaam').value,
            geboortedatum:document.getElementById('geboortedatum').value,
            email: document.getElementById('email').value,
            nickname: document.getElementById('nickname').value,
            foto: splice,
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

//onthullen registratieform
let onthulKnop = document.getElementById('onthullenRegistreer');
onthulKnop.addEventListener('click', function(){
    document.getElementById('hiddenReg').style.display = "block";
    onthulKnop.style.display = "none";
});
