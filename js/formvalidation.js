// validatie van de inschrijvingsvelden

document.getElementById('register').addEventListener('click', function(e) {
	// console.log('testje');
	let sNickname = document.getElementById('nickname').value;
	let sEmail = document.getElementById('email').value;
	let sWachtwoord = document.getElementById('wachtwoord').value;
	let sVoornaam = document.getElementById('voornaam').value;
	let sAchternaam = document.getElementById('achternaam').value;
	let sGeslacht = document.getElementById('geslacht').value;
	let sGeboortedatum = document.getElementById('geboortedatum').value;
	let sGewicht = document.getElementById('gewicht').value;
	let sGrootte = document.getElementById('grootte').value;
	let sHaarkleur = document.getElementById('haarkleur').value;
	let sBeroep = document.getElementById('beroep').value;
	//let sFoto = document.getElementById('foto').value;
	//let sGebruikersovereenkomst = document.getElementById('gebruikersovereenkomst').value;

	// declaraties
	let bFormulierjuist = true;
	let sMessage = '';

	// nickname
	if (sNickname == ''){
		bFormulierjuist = false;
		sMessage += 'Nickname werd niet ingegeven\n';
	}

	// email
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sEmail))
	  {
 
	  }else{
		//alert("U heeft een foutief e-mail adres ingevoerd!")
		bFormulierjuist = false;
		sMessage += 'E-mail adres is niet correct\n';
	  }

	// wachtwoord
	if (sWachtwoord == ''){
		bFormulierjuist = false;
		sMessage += 'Wachtwoord werd niet ingegeven\n';
	}

    // voornaam
	if (sVoornaam == ''){
		bFormulierjuist = false;
		sMessage += 'Voornaam werd niet ingegeven\n';
	}

	// achternaam
	if (sAchternaam == ''){
		bFormulierjuist = false;
		sMessage += 'Achternaam werd niet ingegeven\n';
	}

	// geslacht
	if (sGeslacht == 'geslacht'){
		bFormulierjuist = false;
		sMessage += 'Geslacht werd niet ingegeven\n';
	}

	// geboortedatum
	var datum = new Date();
	datum.setFullYear(datum.getFullYear()-18);
	//console.log(datum);

	//console.log('geb datum: ' + sGeboortedatum);
	sGeboortedatum = Date.parse(sGeboortedatum);
	//console.log('parse geb datum: ' + sGeboortedatum);

	// var testdate = new Date(nJaar, nMaand, nDag,0,0,0,0)	// dit moet ingegeven datum zijn

	if (sGeboortedatum < datum) {

	  //console.log("Oud genoeg");

	}else {

	//console.log("Te jong");
	sMessage += 'Leeftijd moet ministens 18 jaar zijn\n';

	}


	// gewicht
	if (sGewicht < 30 || sGewicht > 500){
		bFormulierjuist = false;
		sMessage += 'Gewicht moet tussen 30 en 500 kg liggen\n';
	}
	/* if (isNan(sGewicht)){
		bFormulierjuist = false;
		sMessage += 'Gewicht is geen getal\n';
		console.log('Gewicht is geen getal');
	}*/

	// grootte
	if (sGrootte < 130 || sGrootte > 250){
		bFormulierjuist = false;
		sMessage += 'Grootte moet tussen 130 en 250 cm liggen\n';
	}
	/* if (isNan(sGrootte)){
		bFormulierjuist = false;
		sMessage += 'Grootte is geen getal\n';
		console.log('Grootte is geen getal');
	}*/

	// haarkleur
	if (sHaarkleur == ''){
		bFormulierjuist = false;
		sMessage += 'Haarkleur werd niet ingegeven\n';
	}
 
	// beroep
	if (sBeroep == ''){
		bFormulierjuist = false;
		sMessage += 'Beroep werd niet ingegeven\n';
	}


	//var eBoodschap = document.getElementById('foutboodschap');
	//eBoodschap.innerHTML = sMessage;


	if (bFormulierjuist){
		localStorage.setItem('profieljuistfout', 'juist');

	}else{
		localStorage.setItem('profieljuistfout', 'fout');
		alert('Het profiel werd niet aangemaakt. Reden: \n' + sMessage);
		console.log('Het profiel werd niet aangemaakt. Reden: ' + sMessage);
		console.log('Boolean: ' + bFormulierjuist);
	}

});	// einde knop register
