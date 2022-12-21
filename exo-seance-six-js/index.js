let boutonsValeurSaisie = document.querySelectorAll('.boutonValeur');
let boutonEgalSelect = document.querySelector('#boutonEgal');
let boutonEffacerSelect = document.querySelector('#boutonEffacer');
let boutonEffacerToutSelect = document.querySelector('#boutonEffacerTout');

let DeviseDeDepart = document.querySelector('input[name=deviseDepart]:checked').value;
console.log(DeviseDeDepart);

let DeviseDeSortie = document.querySelector('input[name=deviseSortie]:checked').value;
console.log(DeviseDeSortie);

let ecranValeurSaisie = document.querySelector('#ecranValeurSaisie');
let ecranValeurConvertie = document.querySelector('#ecranValeurConvertie');






boutonsValeurSaisie.forEach(boutonValeurSaisie =>{
    boutonValeurSaisie.addEventListener('click', ajouterValeur);
    console.log()
});

boutonEgalSelect.addEventListener('click', convertirValeur);
boutonEffacerSelect.addEventListener('click', effacerDerniereValeur);
boutonEffacerToutSelect.addEventListener('click', effacerTout);

let dollarToEuro = ecranValeurSaisie.value / 1.06;
let euroToDollar = ecranValeurSaisie.value * 1.06;
let couronnneToEuro = ecranValeurSaisie.value / 152.3;
let euroToCouronne = ecranValeurSaisie.value * 152.3;
let dollarToCouronne = ecranValeurSaisie.value * 143.52;
let couronneToDollar = ecranValeurSaisie.value / 143.52;



/********FONCTION**********/

function ajouterValeur(event){
    let resultat = event.srcElement.value;
    console.log(resultat);
    ecranValeurSaisie.value+=resultat + ` ${DeviseDeDepart}`;

}
/*******************CECI EST UN MESSAGE POUR L'APRES-CLOPE REGARDE LE CURRENCY !!!!!!! */
function convertirValeur(event){
    switch(DeviseDeDepart && DeviseDeSortie){
        case 'dollars' && 'euro' :
            ecranValeurConvertie = ecranValeurSaisie.value / 1.06;
        break;
        case 'euro' && 'dollars' :
            ecranValeurConvertie = ecranValeurSaisie.value * 1.06;
        break;
        case 'couronne' && 'euro' :
            ecranValeurConvertie = ecranValeurSaisie.value / 152.3;
        break;
        case 'euro' && 'couronne' :
            ecranValeurConvertie = ecranValeurSaisie.value * 152.3;
        break;
        case 'dollars' && 'couronne' :
           ecranValeurConvertie = ecranValeurSaisie.value * 143.52;
        break;
        case 'couronne' && 'dollars' :
            ecranValeurConvertie = ecranValeurSaisie.value / 143.52;
        break;

    }
    return ecranValeurConvertie;
}

function effacerDerniereValeur(event){
    ecranValeurSaisie.value = ecranValeurSaisie.value.substring(0, ecranValeurSaisie.value.length - 1);;

}

function effacerTout(event){
    ecranValeurSaisie.value = "";
    ecranValeurConvertie.value = "";

}