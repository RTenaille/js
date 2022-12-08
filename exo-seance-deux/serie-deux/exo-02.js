let x = parseInt(prompt("Inscrivez x !"));
let n = parseInt(prompt("Inscrivez n !"));
let resultat = 1;


for( let i = 1; i <= n; i++){
    resultat *= x;
    
    console.log(resultat);
}