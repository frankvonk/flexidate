let bIsjuistFout = localStorage.getItem('profieljuistfout');

if (bIsjuistFout == 'juist'){

function uploadPicture(base64String) { // Foto uploaden naar databank /img
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
            maakProfiel(data.fileName); // Profiel aanmaken
            //document.getElementById('uploadResult').src = data.fileURL;
            console.log('     ==> OK');
            console.log('==> Klaar');
        })
        .catch(function (error) { console.log(error); });
} // einde functie

document.getElementById('register').addEventListener('click', function (e) {

    let file = document.querySelector('input[type=file]').files[0];
    if(file){
        let reader = new FileReader();
        reader.onloadend = function() {
		    console.log('RESULT', reader.result);
		    uploadPicture(reader.result);
        }
        reader.readAsDataURL(file);
    } else {
        let stockFoto;
        let sexe = document.getElementById('geslacht').value;
        switch(sexe){
            case "m":
                stockFoto = 'man_3.png';
                break;
            case "v":
                stockFoto ='woman_3.png'
                break;
            case "x":
                stockFoto = 'man_2.png'
                break;
            default:
                stockFoto = 'man_3.png'
        }
        maakProfiel(stockFoto);
    }

    
	


        });// Einde knop

function maakProfiel(splice){
    const rooturl = "https://scrumserver.tenobe.org/scrum/api";
    let url=rooturl+'/profiel/create.php';

        let data = { // Gegevens van formulier in databank steken
            familienaam: document.getElementById('achternaam').value,
            voornaam: document.getElementById('voornaam').value,
            geboortedatum:document.getElementById('geboortedatum').value,
            email: document.getElementById('email').value,
            nickname: document.getElementById('nickname').value,
            foto: splice,
            beroep: document.getElementById('beroep').value,
            sexe: document.getElementById('geslacht').value,
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

}

} // einde if juist

//onthullen registratieform
let onthulKnop = document.getElementById('onthullenRegistreer');
onthulKnop.addEventListener('click', function(){
    document.getElementById('hiddenReg').style.display = "block";
    onthulKnop.style.display = "none";
});
