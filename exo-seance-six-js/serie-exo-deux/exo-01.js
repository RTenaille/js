let date = new Date(2023, 0, 2);

let dateRevolutionnaire = "Vous êtes né un " + date.getDate();
let DateConvertie = ConvertirDate();

function ConvertirDate(pDate){
    pDate = (date.getMonth()++)*100 + date.getDate();
    if(pDate <= 219 || pDate >= 121){
        let pDateRevolutionnaire = " de Pluviôse";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if (pDate <= 319 || pDate >=220){
        let pDateRevolutionnaire = " de Ventôse";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
        return message;
    } else if (pDate <= 419 || pDate >= 320){
        let pDateRevolutionnaire = " de Germinal";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if (pDate <= 519 || pDate >= 420){
        let pDateRevolutionnaire = " de Floréal";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 618 || pDate >= 520){
        let pDateRevolutionnaire = " de Prairial";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 718 || pDate >= 619){
        let pDateRevolutionnaire = " de Messidor";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 817 || pDate >= 719){
        let pDateRevolutionnaire = " de Thermidor";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 917 || pDate >= 818){
        let pDateRevolutionnaire = " de Fructidor";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 1021 || pDate >= 918){
        let pDateRevolutionnaire = " de Vendémiaire";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 1121 || pDate >= 1022){
        let pDateRevolutionnaire = " de Brumaire";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 1221 || pDate >= 1122){
        let pDateRevolutionnaire = " de Frimaire";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else if(pDate <= 120 || pDate >= 1222){
        let pDateRevolutionnaire = " de Nivôse";
        console.log(dateRevolutionnaire + pDateRevolutionnaire);
    } else {
        console.log("Vous arrivez dans la terrible période dîte SUPLLEMENTAIRE, le gouvernement révolutionnaire nie votre existence. GG");
    }
    
}

