let boutonRandom = document.querySelector("#random");
boutonRandom.addEventListener("click", changerCouleurBody);

let boutonColor = document.querySelector("#color");
boutonColor.addEventListener("click", changerCouleurMain);

let boutonTitle = document.querySelector("#addTitle");
boutonTitle.addEventListener("click", modifierTitle);

let boutonPara = document.querySelector("#addPara");
boutonPara.addEventListener("click", modifierPara);

let boutonMasquer = document.querySelector("#displayMain");
boutonMasquer.addEventListener("click", montrerMasquerMain);


function changerCouleurBody(event){
    document.body.style.backgroundColor= "blue";

    console.log("changerCouleurBody")
}

function changerCouleurMain(event){
    console.log('changerCouleurMain');
    console.log(event);
    if(document.body.style.backgroundColor == "white"){
    document.body.style.backgroundColor= "black";
    document.body.style.color= "white";
    } else {
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
    }
}

function modifierTitle(event){
    let newTitle = prompt("Ajoutez votre propre titre :");
    document.querySelector("#titleMain").innerHTML= newTitle;
}
function modifierPara(event){
    let newPara = prompt("Ajoutez votre propre texte :");
    document.querySelector("#paraMain").innerHTML= newPara;

}

function montrerMasquerMain(event){
    document.querySelector("")
}

