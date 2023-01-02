let birth = new Date(1756, 0, 27);
let death = new Date(1791, 11, 5);
let AgeEnAnnee = DonnerAgeMort();
let AgeEnJours = DonnerAgeMortJours();


function DonnerAgeMort(pBirth, pDeath){
    pBirth = birth.getFullYear();
    pDeath = death.getFullYear();
    
    let message = `Mozart est mort à l'âge de ${pDeath-pBirth} ans`;
    console.log(message);
}

function DonnerAgeMortJours(pBirth, pDeath){
    pBirth = birth.getFullYear();
    pDeath = death.getFullYear();
    
    let age = pDeath - pBirth;

    age = Math.floor(age - (age/1000));
    let diffSec = age % 60;
    console.log(diffSec);

    age = Math.floor(age - (diffSec/60));
    let diffMin = age % 60;
    console.log(diffMin);

    age = Math.floor(age - (diffMin/60));
    let diffHeure = age % 24;
    console.log(diffHeure);

    age = Math.floor(age - (diffHeure/24));
    let diffJour = age;
    console.log(diffJour);

    let message = age;

    console.log(message);

}