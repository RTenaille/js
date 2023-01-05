let boutonCouleur = document.querySelector("#btnColor");
boutonCouleur.addEventListener("click", changerCouleurFond);

let boutonClair = document.querySelector("#btnLight");
boutonClair.addEventListener("click", remettreModeClair);
boutonClair.style.display= "none";

document.cookie= "name=darkmode;"
console.log(document.cookie);

let darkModeOn = false;
let darkModeOff = true;

function changerCouleurFond(event){
    if (darkModeOn == false || darkModeOff == true)
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkModeOn = true;
        darkModeOff = false;
        console.log(darkModeOff, darkModeOn);

        boutonClair.style.display= "block";
        boutonCouleur.style.display= "none";

    }
}

function remettreModeClair(event){
    if(darkModeOn == true || darkModeOff == false)
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkModeOn = false;
        darkModeOff = true;
        console.log(darkModeOff, darkModeOn);

        boutonClair.style.display= "none";
        boutonCouleur.style.display= "block";
    }
}
