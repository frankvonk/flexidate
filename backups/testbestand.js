var vandaag = new Date();
console.log(vandaag);

var datum = new Date();
datum.setFullYear(datum.getFullYear()-18);
console.log(datum);


var testdate = new Date(2005, 12, 20,0,0,0,0)

if (testdate < datum) {

  console.log("Oud genoeg");

}else {

console.log("Te jong");

}
