let nombre = parseInt(prompt("Entrez le nombre d'étoiles = !"));
let etoile = "*";

for(i= 1; i<=nombre; i++){
    if(nombre >= 1 && nombre < 11){
        console.log(etoile.repeat(nombre));
    }
    else{
        console.log("le nombre d'étoiles est incorrect")
    }
}
