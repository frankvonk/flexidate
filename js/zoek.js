
let eResultaat = document.getElementById('resultaat');
var rooturl = "https://scrumserver.tenobe.org/scrum/api";

document.getElementById('zoekknop').addEventListener('click', function (e) {
      let geslacht  =  document.getElementById('input').value;
      let rangeMinGrootte = document.getElementById('minGrootte').value;
      let rangeMaxGrootte = document.getElementById('maxGrootte').value;
      let rangeMinGeboortedatum = document.getElementById('minGeboorte').value;
      let rangeMaxGeboortedatum = document.getElementById('maxGeboorte').value;
      let gewicht = document.getElementById('gewicht').value;
      let gewichtOperator = document.getElementById('operatorGewicht').value;
      let oogkleur = document.getElementById('oogkleur').value;
      let haarkleur = document.getElementById('haarkleur').value;
      let nickname = document.getElementById('nicknameSearch').value;
      //let page=1;
      //let pageSize=5;
      let url= rooturl+'/profiel/search.php?sexe='+geslacht;

      //url GET opbouw
      url+='&grootteOperator=range&rangeMinGrootte='+ rangeMinGrootte +'&rangeMaxGrootte='+ rangeMaxGrootte;
      if(rangeMinGeboortedatum || rangeMaxGrootte){
        url+='&geboortedatumOperator=range&rangeMinGeboortedatum='+ rangeMinGeboortedatum +'-01-01&rangeMaxGeboortedatum='+ rangeMaxGeboortedatum + '-01-01';
      }
      url+='&gewicht='+ gewicht + '&gewichtOperator='+ gewichtOperator;
      url+='&oogkleur='+ oogkleur + '&haarkleur=%' + haarkleur + '%&nickname=%'+ nickname + '%';


      fetch(url)
      .then(function (resp)   { return resp.json(); })
      .then(function (data)   { 
          console.log(data);  
          console.log(url);
              eResultaat.innerHTML = "";
          // loop met het resultraat
          for(i=0;i<data.length;i++){
            let geslachtPNG;
            let fotoNaam = data[i].foto
            let urlFoto = "https://scrumserver.tenobe.org/scrum/img/" + fotoNaam
            // GENDERLOGO'S
            if(data[i].sexe =='m'){geslachtPNG = "https://cdn.pixabay.com/photo/2012/04/25/00/54/male-41488_640.png"}
            else if(data[i].sexe =='v'){geslachtPNG = "https://armscontrolcenter.org/wp-content/uploads/2018/03/2000px-Pink_Venus_symbol.svg_.png"}
            else {geslachtPNG = "https://png.pngtree.com/svg/20161215/9c5d6d618b.svg"}
            // STAR SIGNS URLS
            let maand = parseInt(data[i].geboortedatum.slice(5, 7));
            let dag = parseInt(data[i].geboortedatum.slice(8, 10));
            let sterrenbeeld = bepaalSterrenbeeld(maand, dag);
           

              eResultaat.innerHTML += "<a class='profiel' target='blank' href='gezochtProfiel.html?id=" + data[i].id + "'>" 
              + "<span class='center'>" + data[i].nickname + "</span><br>" 
              + "<img width='130px' height='130px' src='" + urlFoto + "'>"
              + "<img width='40px' src='" + geslachtPNG + "'>"
              + "<img width='40px' src='img/starsign/" + sterrenbeeld + ".png'"

              + "</a>"; // alleen nicknames worden getoond
//              eResultaat.innerHTML += "<br>"
          }
      })
      .catch(function (error) { console.log(error); });
}); // EINDE ZOEKKNOP LISTENER

//functie om sterrenbeeld te bepalen
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
  //console.log(sterrenbeeld);
  return sterrenbeeld;
  
}