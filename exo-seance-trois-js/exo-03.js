let etoile = "";
let = nombreEtoile = 1;

do {
    nombreEtoile = parseInt(prompt("Inscrivez le nombre d'étoiles ="));
    if(nombreEtoile < 1 || nombreEtoile >= 10){
        console.log("Nombre pas correk'")
    }


} while (nombreEtoile < 1 || nombreEtoile > 10){
    etoile = "";
    for(i=1; i<=nombreEtoile; i++){
        etoile = etoile + "*";
    }
    console.log(etoile);
}
