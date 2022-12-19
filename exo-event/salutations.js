
    let message = 0;
    let emoteRaciale = 0;
    let emoteRang = 0;
    let classes = 0;
    
    function saluerSansAlertes(event){
    event.preventDefault();
    // on affiche tout par défaut, et il n'y a pas d'erreur !
    document.querySelector('#error').innerHTML="";
    document.querySelector('#message').style.display='block';
    // vérifier les trois classes
    // test de garde !
    if ((getNombreClasse()==0)||getNombreClasse()>3)
        {
            document.querySelector('#message').style.display='none';
            document.querySelector('#classes').innerHTML="";
            document.querySelector('#error').innerHTML = `Vous ne pouvez pas avoir ${getNombreClasse()} classe(s): entre 1 et 3 maximum.`;
        return;
        }

    // génération du message et des emotes
   message = genererMessageSalutation();
   emoteRaciale = genererEmoteRaciale();
   emoteRang = genererEmoteRang();

   classes = listerLesClasses();

   document.querySelector('#emotes').innerHTML=`<ul><li>${emoteRaciale}</li><li>${emoteRang}</li></ul>`;
   document.querySelector('#salutations').innerHTML= message;
   document.querySelector('#classes').innerHTML = classes;


/**********EMOTES*******/
   function genererEmoteRaciale (){
   let race = document.querySelector('#race').value;
   emoteRaciale = "";
   switch (race) {
       case 'elf':
           emoteRaciale = emoteElfe();
           break;
       case 'ork':
           emoteRaciale = emoteOrque();
           break;

       default:
           emoteRaciale = emoteHumain();
           break;
   }
   return emoteRaciale;
}
   function genererEmoteRang(){
   let rang = document.querySelector('input[name=rank]:checked').value;
   emoteRang = "";
   switch (rang) {
       case 'roturier':
           emoteRang = emoteRoture();
           break;
       case 'noble':
           emoteRang = emoteNoblesse();
           break;
       case 'royal':
           emoteRang = emoteRoyal();
           break;    
   }
   return emoteRang;
}
   /*******AFFICHER CLASSE******/
   let paragrapheClasses = document.querySelector('#classes');
   paragrapheClasses.innerHTML = listerLesClasses();

function genererMessageSalutation() {
   let prenom = document.querySelector('#prenom').value;
   let nom = document.querySelector('#nom').value;
   let titre = document.querySelector('#titre').value;
   // construction du message
   let message = "";
   if (prenom.length == 0 && nom.length == 0)
       message = "Bonjour, illustre inconnu(e)";

   else
       message = `Bonjour ${titre} ${prenom} ${nom}`;
   return message;
}


/*******EMOTE-SALUTATION**********/
function emoteHumain()
{
   return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe()
{
   return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque()
{
   return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteRoture(){
   return "Le garde fait un signe de tête.";
}
function emoteNoblesse(){
   return "Le garde s’incline respectueusement.";
}
function emoteRoyal(){
   return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément.";
}
/*******CLASSE*******/
function getNombreClasse()
{
   let classes= document.querySelectorAll('.classe:checked');
   return classes.length;
}
function listerLesClasses()
{
   let classes= document.querySelectorAll('.classe:checked');
   let message = "<ul>";
   classes.forEach(classe => {
       message+=`<li>${classe.name}</li>`;
   });
   return message; 
}
}
/********* */