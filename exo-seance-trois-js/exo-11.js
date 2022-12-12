function calculerSomme(pTableau){
    let somme = 0;
    for( i = 0; i < pTableau.length; i++){
        somme = somme + pTableau[i];
    }
    console.log(somme);
    }



let monBeauTableau = new Array ();

monBeauTableau.push(5);
monBeauTableau.push(2);
monBeauTableau.push(3);
monBeauTableau.push(10);

calculerSomme(monBeauTableau);

