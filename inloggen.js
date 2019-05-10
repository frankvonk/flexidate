console.log("testen");
console.log(window.location.href+"url")


function getUrlParam(param)
{
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var regex = new RegExp("[?&]" + param + "=([^&#]*)");
  var url   = decodeURIComponent(window.location.href);
  var match = regex.exec(url);
  return match ? match[1] : "";
}
let booleaninlog = true;
var nickname = getUrlParam("aanmeldnaam");
var wachtwoord = getUrlParam('wachtwoordinv');

nickname = nickname.replace("+", " ");


console.log("ww="+wachtwoord)

//window.onload = function(){
//let nickname = document.getElementById('aanmeldnaam').value;
//let nickname = aanmeldnaam;
//let wachtwoord;// = document.getElementById('wachtwoordinv').value;
let id;
let familienaam;
let voornaam;
let geboortedatum;
let email;
let foto;
let beroep;
let sexe;
let haarkleur;
let oogkleur;
let grootte;
let gewicht;
let lovecoins;

//let eHead = document.getElementsByTagName('head');
//let eHead = document.getElementsByName('head');
/*let eRedirect = document.createElement('meta');
eRedirect.attribute("http-equiv='refresh'");
//eRedirect.setAttribute("content='0'");
eRedirect.setAttribute("URL='profielpaginagebruiker.html'");
document.head.appendChild(eRedirect);
*/
//eHead.appendChild(eRedirect);

         url='https://scrumserver.tenobe.org/scrum/api/profiel/read.php';

        fetch(url)
            .then(function (resp)   { return resp.json(); })
            .then(function (data)   {
//           console.log(data);
        //    console.log(data[1])


       for(i=0; i<data.length; i++){
        if (data[i].nickname == nickname && data[i].wachtwoord == wachtwoord)  {
          id = data[i];
          familienaam=data[i].familienaam
          voornaam=data[i].voornaam
          geboortedatum=data[i].geboortedatum
          email=data[i].email
          foto=data[i].foto
          beroep=data[i].beroep
          sexe=data[i].sexe
          haarkleur=data[i].haarkleur
          oogkleur=data[i].oogkleur
          grootte=data[i].grootte
          gewicht=data[i].gewicht
          lovecoins=data[i].lovecoins


          console.log(nickname)
          console.log(wachtwoord)
          console.log(id)
          console.log(familienaam)
          console.log(voornaam)
          console.log(geboortedatum)
          console.log(email)
          console.log(foto)
          console.log(beroep)
          console.log(sexe)
          console.log(haarkleur)
          console.log(oogkleur)
          console.log(grootte)
          console.log(gewicht)
          console.log(lovecoins)



			eGegeven = document.getElementById('familienaam');
			eGegeven.innerHTML = familienaam;
			eGegeven = document.getElementById('voornaam');
			eGegeven.innerHTML = voornaam;
			eGegeven = document.getElementById('geboortedatum');
			eGegeven.innerHTML = geboortedatum;
			eGegeven = document.getElementById('email');
			eGegeven.innerHTML = email;
			eGegeven = document.getElementById('voornaam');
			eGegeven.innerHTML = voornaam;
			eGegeven = document.getElementById('nickname');
			eGegeven.innerHTML = nickname;
			eGegeven = document.getElementById('voornaam');
			eGegeven.innerHTML = voornaam;
			eGegeven = document.getElementById('foto');
			eGegeven.innerHTML = foto;
			eGegeven = document.getElementById('voornaam');
			eGegeven.innerHTML = voornaam;
			eGegeven = document.getElementById('beroep');
			eGegeven.innerHTML = beroep;
//			eGegeven = document.getElementById('sexe');
//			eGegeven.innerHTML = sexe;
			eGegeven = document.getElementById('haarkleur');
			eGegeven.innerHTML = haarkleur;
			eGegeven = document.getElementById('oogkleur');
			eGegeven.innerHTML = oogkleur;
			eGegeven = document.getElementById('grootte');
			eGegeven.innerHTML = grootte;
			eGegeven = document.getElementById('gewicht');
			eGegeven.innerHTML = gewicht;
			eGegeven = document.getElementById('wachtwoord');
			eGegeven.innerHTML = wachtwoord;
			eGegeven = document.getElementById('lovecoins');
			eGegeven.innerHTML = lovecoins;


      booleaninlog = true;
     } // end if found

       } // end forloop 5000x


if(booleaninlog == false){
  let eMessage = document.getElementById('message');
  eMessage.innerHTML = "verkeerd wachtwoord"
  let link = document.createElement('a');
  link.setAttribute("href", "index.html")
  let tnlink = document.createTextNode(' Probeer het nog eens!');
  link.appendChild(tnlink)
  eMessage.appendChild(link);

}

             })



            .catch(function (error) { console.log(error); });


//  console.log("type"+typeof(nickname));
//  console.log(nickname);
