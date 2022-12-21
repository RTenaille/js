let boutonsOperateur = document.querySelectorAll('.operateur');
let boutonsChiffre = document.querySelectorAll('.chiffre');
let boutonEgal = document.querySelector('#egal');
let boutonClear = document.querySelector('#effacerTout');
let boutonClearLast = document.querySelector('#effacer');

let ecran = document.querySelector('#ecran');
let tampon = document.querySelector('#tampon');

boutonsOperateur.forEach(boutonOperateur=>{
    boutonOperateur.addEventListener('click',ajouterOperation);
}
);
boutonsChiffre.forEach(boutonChiffre=>{
    boutonChiffre.addEventListener('click',ajouterChiffre);
}
);
boutonEgal.addEventListener('click',evaluerExpression);
boutonClear.addEventListener('click',effacerExpression);
boutonClearLast.addEventListener('click',effacerLastExpression);

