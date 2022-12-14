let nombreEtoiles = 0;
let etoile = ""
inscrireEtoiles(nombreEtoiles);

function inscrireEtoiles(nombreEtoiles){
while(nombreEtoiles < 1 || nombreEtoiles >= 11){
    console.log("Le nombre n'est pas correk'");
    nombreEtoiles = parseInt(prompt("Inscrivez le bon nombre d'étoiles svp"));
}

for(i= 1; i<= nombreEtoiles; i++){
    etoile = etoile + "*";
    console.log(etoile);
}
}
