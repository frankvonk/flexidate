const rooturl = "https://scrumserver.tenobe.org/scrum/api";
let url=rooturl+'/profiel/create.php';

document.getElementById('register').addEventListener('click', function (e) {

    var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
  reader.onloadend = function() {
		console.log('RESULT', reader.result);
		uploadPicture(reader.result);
			
  }
  reader.readAsDataURL(file);

               let data = {
                   familienaam: document.getElementById('achternaam').value,
                   voornaam: document.getElementById('voornaam').value,
                   geboortedatum:document.getElementById('geboortedatum').value,
                   email: document.getElementById('email').value,
                   nickname: document.getElementById('nickname').value,
                   foto: 'test.jpg',
                   beroep: document.getElementById('beroep').value,
                   sexe: document.getElementById('geslacht').value,
                   haarkleur: document.getElementById('haarkleur').value,
                   oogkleur: document.getElementById('oogkleur').value,
                   grootte: document.getElementById('grootte').value,
                   gewicht: document.getElementById('gewicht').value,
                   wachtwoord: document.getElementById('wachtwoord').value,
                   lovecoins: 3
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

                           });