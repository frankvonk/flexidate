document.getElementById('loginbtn').addEventListener('click', function (e) { // klick op de login knop
  let nickname = document.getElementById('aanmeldnaam').value;
  let wachtwoord = document.getElementById('wachtwoordinv').value;

  let url = "https://scrumserver.tenobe.org/scrum/api/profiel/authenticate.php";

  let data = {
    nickname: nickname,
    wachtwoord: wachtwoord
  }

  console.log(nickname);
  console.log(wachtwoord);

  var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
      })

    });

    fetch(request)
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
      if (data.message == 'Authorized') { // Als het inloggen slaagt
        console.log("Reactie van backend API : Correcte gegevens");
        localStorage.setItem('ProfielId',data.id);
        window.location.href = "profiel.html";
        console.log(data.id);
      } else { // Als het inloggen niet slaagt
        alert("VERKEERDE INLOGGEGEVENS!");
        console.log("Reactie van backend API : Verkeerde gegevens");
      }
    })
    .catch(function (error) { console.log(error); });

  }) // einde knop
