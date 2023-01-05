let btnOpen = document.querySelector("#openBtn");
btnOpen.addEventListener("click", ouvrirFenetre);

let btnResizeBy = document.querySelector("#resizeByBtn");
btnResizeBy.addEventListener("click", redefinirTaillePar);

let btnResizeTo = document.querySelector("#resizeToBtn");
btnResizeTo.addEventListener("click", redefinirTaillePour);

let btnClose = document.querySelector("#closeBtn");
btnClose.addEventListener("click", fermerFenetre);

let btnAfficherParam = document.querySelector("#afficherParamBtn");
btnAfficherParam.addEventListener("click", afficherParam);

let btnGeolocalisation = document.querySelector("#geolocalisationBtn");
btnGeolocalisation.addEventListener("click", afficherCoordonnees);

function ouvrirFenetre(event){
    let fenetre = window.open();

    console.log(fenetre);
}

function redefinirTaillePar(event){
    let fenetre = window.resizeBy(400, 200);
    console.log(fenetre);
}

function redefinirTaillePour(event){
    let fenetre = window.resizeTo(
        window.screen.availWidth / 3,
        window.screen.availHeight / 3
    );
    console.log(fenetre);
}

function fermerFenetre(event){
    let fenetre = window.close();
}

function afficherParam(event){
    document.querySelector("#palette").innerHTML= `Hauteur : ${screen.availHeight} ; Largeur : ${screen.availWidth} ; Couleurs : ${screen.colorDepth}.`
}

function afficherCoordonnees(event){
    let message = window.prompt("Inscrivez OK pour accepter, sinon tantpis hein, c'est pas grave, on se débrouillera autrement hein, m'ouais...");

    if(message == "OK"){
        navigator.geolocation.getCurrentPosition(afficherGeo, afficherErreur);
    } else {
        document.querySelector("#coordonnees").innerHTML = "Vous n'avez pas donné votre accord.";
    }
}

function afficherGeo(event){
    let coordns = pos.coords;

    document.querySelector("#coordonnees").innerHTML = `Latitude : ${crd.latitude} ; Longitude : ${crd.longitude} ;`;

    console.log(coordns);
}

function afficherErreur(event){
    document.querySelector("#coordonnees").innerHTML = "Navré nous n'avons pas réussi à vous trouver...";
}


