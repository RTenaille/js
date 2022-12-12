let min=1; 
let max=10;  
let random = Math.random() * (max - min) + min;
let i = 1;
random = random.toFixed(0);

do{
    let nombre = parseInt(prompt("Ceci est votre" + i + "° essai. Tentez votre chance ="));
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