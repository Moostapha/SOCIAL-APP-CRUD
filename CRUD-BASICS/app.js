// capture de tous les selectors id du DOM nécessaires dans des variables:

// formulaire
const form = document.getElementById('form');               

// Texte saisi par user dans le textarea d'id input
// const userInput = document.getElementById('userInput');    

// div où posts édités sont injectés
const posts = document.getElementById('posts');            

// Message de l'app au user UI ECHEC
const msgFail = document.getElementById('msgFail');        

// Message de l'app au user UI SUCCES 
// const msgSuccess = document.getElementById('msgSuccess');  



// MESSAGE ERREUR SI CHAMP VIDE
function failMsg (failText) {
    msgFail.innerHTML = failText;          // message UI
    console.log("FAILURE MESSAGE:", failText);
}


// 2) Fonction validant le formulaire ou l'invalidant selon le userInput | sera déclenché par le bouton submit
function formValidation(){
    // si user entre un champ vide => Fail state
    if (input.value === "") {
        
        // on affiche pas de message d'erreur
        failMsg("Votre post ne peut être vide !!!");
    } 
    // sinon success state
    else {
        // on affiche pas de message d'erreur
        failMsg("");
        
        // Appel fonction capurant input du user et le stockant dans dataEntries
        postAccepted()
    }
}


// 3) bouton click submit appelant formValidation
form.addEventListener('submit', (e) => 
    {
        e.preventDefault();               // Par défaut en cliquant le bouton submit on reload la page, cette ligne l'empêche
        console.log('Bouton clické !!!')
        formValidation();                
    }
)

// 4) accepter et stocker les datas qui sont les posts des users

// a- Initialisation Objet vide qui stockera les posts après validation formulaire
let dataEntries = [];

// b- Fonction postAccepted qui est le post ayant passé la validation de formValidation qui push ensuite dans objet data
// Fonction qui capture le post du user et le push
function postAccepted() {
    const userPost = input.value;                     // saisie de la valeur input du user textarea id="input"
    console.log('USER POST:', userPost);             // Affichage dans console
    dataEntries.push(userPost);                     // push dans Array dataEntries
    console.log('ARRAY DES POSTS:', dataEntries);  // Lecture de dataEntries dans la console
    createPost()
}

// FONCTIONS CRUD

// create + read + upload on screen
function createPost() {
    
    // injection dans DOM de id posts de la saisie du user avec un template litteral
    // Réécriture dans le DOM du template html avec saisie user en dynamique
    posts.innerHTML += 
    `   <div>
            <p>${input.value}</p>
            <span class="options">
                <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i> 
            </span>
        </div>
    `;
    
    // reset du form
    input.value = '';
}


// delete
function deletePost(e) {
    // remove() enlève à partir de l'élément this on part de i onClick="deletePost(this)" et on remonte au grand parent et on le remove
    
    e.parentElement.parentElement.remove();   // prentElement * 2 remonte au span qui est parent puis à la div au dessus qui enlève tout => post + icône
}


// update => sur click du btn, on veut que le texte revienne dans le textarea pour en suite le modifier
function updatePost(e) {
    
    // on part de i onClick="updatePost(this)" => parentElement remonte à span => previousElementSibling nus donne balise p => innerHTML nous donne input.value
    input.value = e.parentElement.previousElementSibling.innerHTML;
    
    // on part de i onClick="updatePost(this)" et on remonte au grand parent
    e.parentElement.parentElement.remove();      
    
    console.log('TEXTE A MODIFIER:', input.value);                   //
    console.log('TYPE DE input.value:', typeof(input.value));       //
    console.log(dataEntries[0]);                                   //
}

