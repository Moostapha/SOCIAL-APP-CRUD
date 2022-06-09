// capture de tous les selectors id du DOM nécessaires dans des variables:

const form = document.getElementById('form');              // formulaire

const userInput = document.getElementById('userInput');   // Texte saisi dans le textarea d'id input

const posts = document.getElementById('posts');         // div où posts édités sont injectés

const msg= document.getElementById('msg');            // Message de l'app au user UI


// Fonction validant le formulaire ou l'invalidant selon le userInput

function formValidation(){
    if (input.value === "") {
        msg.innerHTML = "Votre post ne peut être vide !!!";
        console.log("ECHEC")
    } else {
        msg.innerHTML = "";
        console.log("SUCCES");
    }
}


// bouton click submit appelant formValidation
form.addEventListener('submit', (e) => {
    e.preventDefault();               // Par défaut en cliquant le bouton submit on reload la page, cette ligne l'empêche
    console.log('Bouton clické !!!')
    formValidation();                
})
