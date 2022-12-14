let nombreEtoiles = parseInt(prompt("Inscrivez le nombre d'étoiles svp ! ="));
let etoile = "";
let i = 1;

function compterEtoiles(nombreEtoiles){
    if(nombreEtoiles >= 1 && nombreEtoiles < 11){
        for(i = 1; i<= nombreEtoiles; i++ ){
            etoile = etoile + "*";
            console.log(etoile);
        }

    } else {
        alert("Non c'est pô les étoiles qu'j'voulais, recommencez !!!")
    }
}

compterEtoiles(nombreEtoiles);