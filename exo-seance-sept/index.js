let boutonRandom = document.querySelector("#btnRandom");
boutonRandom.addEventListener("click", randomiserCouleurFond);

let boutonCouleur = document.querySelector("#btnColor");
boutonCouleur.addEventListener("click", changerCouleurFond);

let boutonTitre = document.querySelector("#btnAddTitle");
boutonTitre.addEventListener("click", ajouterUnTitre);

let boutonPara = document.querySelector("#btnAddPara");
boutonPara.addEventListener("click", creerPara);

let boutonHide = document.querySelector("#btnHide");
boutonHide.addEventListener("click", masquerDerouler);

let listePara = new Array();


function randomiserCouleurFond(event){
    document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function changerCouleurFond(event){
    if (document.body.style.backgroundColor=="white")
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

function ajouterUnTitre(event){
    let newTitle = document.createElement("h1");
    let titre = prompt("Ajoutez votre titre :");
    newTitle.innerText = titre;
    let parent = document.querySelector("#mainCorpus");
    parent.appendChild(newTitle);
}

function creerPara(event){
    let newPara = document.createElement("p");
    let texte = prompt("Ajoutez votre texte :");
    newPara.innerText = texte;
    let parent = document.querySelector("#mainCorpus");
    parent.appendChild(newPara);

    let newBtnHidePara = document.createElement("button");
    newBtnHidePara.innerText = "Cacher le paragraphe";
    newBtnHidePara.addEventListener("click", cacherPara);


}

function cacherPara(event){
    document.querySelector 
}

function masquerDerouler(event){
    listePara.forEach( document => {
        if (document.querySelector("p").style.display == "block"){
            document.querySelector("p").style.display = "none";
        } else {
            document.querySelector("p").style.display = "block";
        }
    });
}


