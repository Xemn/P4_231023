// Fonction qui vérifie si le nom entré est correcte : 
function validateName (field)
{
    if (field.value.length < 2 || field.value === null)
    {
        throw {
            id : field.id,
            error : new Error ("Ce champ doit possèder au minimum deux caractères") 
            
        }
        //new Error ("Ce champ doit possèder au minimum deux caractères");
    }

}

// Fonction qui vérifie si l'email entré est correcte : 
function validateEmail (email)
{
    let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (!regexMail.test(email.value))
    {
        throw {
            id : email.id,
            error :new Error ("Ceci n'est pas une adresse mail valide.")
        }
    }
}

// Fonction qui vérifie si la nombre entré est correcte : 
function validateNumberTurnament (numberTurnament)
{
    let regexNumber = new RegExp("^[0-9]+$");

    if (!regexNumber.test(numberTurnament.value))
    {
        throw {
            id : numberTurnament.id,
            error : new Error ("Ceci n'est pas une valeur correcte.")
        }
    }
}

// Fonction qui vérifie si une ville a été séléctionnée : 
function getCityChoice ()
{
    const location = document.querySelector("form").location.value;

    if (location === "")
    {
        throw {
            id : "quantity",
            error : new Error ("Vous devez séléctionner une ville.")
        }
    }
}

// Fonction qui vérfie que la date entrée est valide : 
function validateDate (date)
{
    let regexDate = new RegExp("^((19|20)?[0-9]{2}[- .](0?[1-9]|1[012])[- .](0?[1-9]|[12][0-9]|3[01]))*$");
    
    if(date.value = "" || !regexDate.test(date.value))
    {
        throw {
            id : date.id ,
            error: new Error ("Votre date de naissance est incorrecte.")
        }
    }
}

// Fonction qui vérifié si les CGU ont été cochées : 
function validateCGU ()
{
    const CGU = document.getElementById("checkbox1");

    if (!CGU.checked)
    {
        throw {
            id : "checkbox1" ,
            error : new Error ("Vous devez accepter les CGU.")
        }
    }
}

// Fonction qui affiche un message d'erreur su le champ est mal renseigné : 
function displayErrorMessage(fieldId, errorMessage) {
    let spanErrorMessage = document.getElementById(`${fieldId}-error`);

    if (!spanErrorMessage) {
        let input = document.getElementById(fieldId);
        spanErrorMessage = document.createElement("span");
        spanErrorMessage.id = `${fieldId}-error`;
        spanErrorMessage.innerHTML = errorMessage;
        input.after(spanErrorMessage);
    }
}

// Fonction qui affiche un message de confirmation : 
function reservationModal() {
    const modal = document.createElement("div");
    modal.innerHTML = `
    <div class="modal-body">
        <div class="bground validation">
            <div class="content">
                <span class="close closeValidation"></span>
                <div class="modal-body">
                    <p>Votre résérvation a été prise en compte ! </p>
                </div>
            </div>
        </div>
    </div>
    `;
    document.body.appendChild(modal);
}


// fonction qui réinitialise le formulaire : 
function resetForm ()
{
    const form = document.querySelector("form");
    form.reset();
}

function validate (event)
{
    // Empêche le comportement par défaut (envoie du formulaire)
    event.preventDefault();
    
    /* Toutes les constantes récupérants les différents champs dont
    nous avons besoin : */
    const firstName = document.getElementById("first");
    const lastName = document.getElementById("last");
    const email = document.getElementById("email");
    const date = document.getElementById("birthdate");
    const numberTurnament = document.getElementById("quantity");
   
    // Supprimez tous les messages d'erreur existants
    const errorElements = document.querySelectorAll("[id$='-error']");
    errorElements.forEach(element => element.remove());

    // "Essaie" chacune des fonctions : 
    try {
        validateName(firstName);
        validateName(lastName);
        validateEmail(email);
        validateNumberTurnament(numberTurnament);
        validateDate(date);
        getCityChoice();
        validateCGU();

        closeModal();
        resetForm();

        reservationModal();

        
    }
    // Si l'essaie échoue :  
    catch ({id, error}) {
        displayErrorMessage(id, error.message)
    }
}
