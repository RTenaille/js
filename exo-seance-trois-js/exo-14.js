
let palindrome = false;
let tabStrings = new Array ();

tabStrings.push(prompt("Tapez la première lettre"));
tabStrings.push(prompt("Tapez la deuxième lettre"));
tabStrings.push(prompt("Tapez la troisième lettre"));
tabStrings.push(prompt("Tapez la quatrième lettre"));
tabStrings.push(prompt("Tapez la cinquième lettre"));
tabStrings.push(prompt("Tapez la sixième lettre"));
tabStrings.push(prompt("Tapez la septième lettre"));

console.log(tabStrings)

let tabReverse = new Array ();
tabReverse.push(tabStrings[6]);
tabReverse.push(tabStrings[5]);
tabReverse.push(tabStrings[4]);
tabReverse.push(tabStrings[3]);
tabReverse.push(tabStrings[2]);
tabReverse.push(tabStrings[1]);
tabReverse.push(tabStrings[0]);

console.log(tabReverse);


function palindromed(tabStrings, tabReverse) {
    for([i] = [0]; [i]<=[6]; [i++]){
        if(tabStrings[i] == tabReverse[i]){
            palindrome = true;
        } else {
            alert("Nan nan nan, vous n'avez pas dit le mot magiqueuh, nan nan nan, vous n'avez pas dit le mot magiqueuh...")
        }

    }
    
}

palindromed(tabStrings, tabReverse);
