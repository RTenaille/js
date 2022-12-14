let min=1; 
let max=10;  
let random = Math.random() * (max - min) + min;
let i = 1;
let nombre = 0;
random = random.toFixed(0);
jouerAuPetitJeu(nombre, random);

function jouerAuPetitJeu(nombre, random){
do{
   nombre = parseInt(prompt("Ceci est votre" + i + "° essai. Tentez votre chance ="));
    if(nombre < random){
        alert("Tu as visé trop bas !");
        i++;
    } else if(nombre > random){
        alert("Tu as visé trop haut !");
        i++;
    } else {
        alert("Tu as trouvé au " + i +"° coup bien jouej !");
    }
} while(i<=3) {
    alert("Dommage !")
}
}