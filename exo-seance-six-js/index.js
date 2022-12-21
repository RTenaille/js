let boutonValeurSaisie = document.querySelectorAll('.boutonValeur');
let boutonEgalSelect = document.querySelector('#boutonEgal');
let boutonEffacerSelect = document.querySelector('#boutonEffacer');
let boutonEffacerToutSelect = document.querySelector('#boutonEffacerTout');

let DeviseDeDepart = document.querySelector('#choixDeDevisesEntree, input[name=deviseDepart]:checked').value;
console.log('#choixDeDevisesEntree, input[name=deviseDepart]:checked');

let DevideDeSortie = document.querySelector('#choixDeDevisesSortie, input[name=deviseSortie]:checked').value;
console.log('#choixDeDevisesSortie, input[name=deviseSortie]:checked');

let ecranValeurSaisie = document.querySelector('#ecranValeurSaisie');
let ecranValeurConvertie = document.querySelector('#ecranValeurConvertie')






boutonValeurSaisie.forEach(boutonValeurSaisie =>{
    boutonValeurSaisie.addEventListener('click', ajouterValeur);
});

boutonEgalSelect.addEventListener('click', convertirValeur);
boutonEffacerSelect.addEventListener('click', effacerDerniereValeur);
boutonEffacerToutSelect.addEventListener('click', effacerTout);

/********FONCTION**********/

function ajouterValeur(event){
    let ecranValeurSaisie = document.querySelector('#ecranValeurSaisie');
    
    
    ecranValeurSaisie.innerHTML = boutonValeurSaisie.value;
}