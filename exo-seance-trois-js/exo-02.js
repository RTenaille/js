let nombre = parseInt(prompt("Inscrivez un nombre d'étoile"));

while(nombre < 1 && nombre >= 11){
    console.log("Pas le nombre n'est pas correk'");
    nombre = parseInt(prompt("Inscrivez le bon nombre d'étoiles svp"));
}
let etoile = "";

for(i= 1; i<= nombre; i++){
    etoile = etoile + "*";
}
console.log(etoile);

