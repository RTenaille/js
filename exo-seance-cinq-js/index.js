/*********FONCTIONS******/


function activerTousLesCliques() {
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('dblclick', cacherImage);
    });
    function cacherImage(event) {
        event.srcElement.style.visibility = "hidden";

    }
    let boutonCacher = document.querySelector('#cacher');
    boutonCacher.addEventListener('click', cacherToutesLesImages);
    function cacherToutesLesImages() {

        let images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.display = "none";
        });

    }
    let boutonAfficher = document.querySelector('#afficher');
    boutonAfficher.addEventListener('click', afficherToutesLesImages);
    function afficherToutesLesImages() {
        let images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.display = "block";
        });
    }
    images.forEach(image => {
        image.addEventListener('dblclick', cacherImage);
    });
    let boutonDesactiver = document.querySelector('#desactiver');
    boutonDesactiver.addEventListener('click', desactiverTousLesCliques);


    function desactiverTousLesCliques() {
        alert("Votre pc va exploser dans :");
        alert("3");
        alert("2");
        let images = document.querySelectorAll('img');
        images.forEach(image => {
            image.addEventListener('dblclick', mettreEnGarde);
            image.removeEventListener('dblclick', cacherImage);
  
        });
        function mettreEnGarde() {
            alert("Non mais arrêtez de double cliquer SVP !")
        }


    }
}



/**************VARIABLES****************/



let boutonActiver = document.querySelector('#activer');
boutonActiver.addEventListener('click', activerTousLesCliques);