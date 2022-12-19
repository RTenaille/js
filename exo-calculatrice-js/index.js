let tampon = "";
function prendreValeurDansTampon (){
     tampon = tampon + document.querySelector('chiffre').value;

    }
    
function prendreOperateurDansTampon (){
    tampon = tampon + document.querySelector('operateur').value;

    
    }



/*******VARIABLES****/
let appuyerBoutonChiffre = document.querySelector('.chiffre').value;
appuyerBoutonChiffre.addEventListener('click', prendreValeurDansTampon);

let appuyerBoutonOperateur = document.querySelector('.operateur').value;
appuyerBoutonOperateur.addEventListener('click', prendreOperateurDansTampon);

