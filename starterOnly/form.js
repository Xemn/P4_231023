function validateName (field)
{
    if (field.value.length < 2 || field.value === null)
    {
        throw new Error (`Votre ${field.id}name est trop court.`);
    }

}

function validateEmail (email)
{
    let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (!regexMail.test(email.value))
    {
        throw new Error ("Ceci n'est pas une adresse mail valide.");
    }
}

function validateNumberTurnament (numberTurnament)
{
    let regexNumber = new RegExp("^[0-9]+$");

    if (!regexNumber.test(numberTurnament.value))
    {
        throw new Error ("Ceci n'est pas une valeur correcte.");
    }
}

function getCityChoice ()
{
    const location = document.querySelector("form").location.value;

    if (location === "")
    {
        throw new Error ("Une destination doit être séléctionée.");
    }
}

function validateDate (date)
{
    let regexDate = new RegExp("^((19|20)?[0-9]{2}[- .](0?[1-9]|1[012])[- .](0?[1-9]|[12][0-9]|3[01]))*$")

    if(date.value = "" || !regexDate.test(date.value))
    {
        throw new Error ("Votre date de naissance est incorrecte.");
    }
}

function validateCGU ()
{
    const CGU = document.getElementById("checkbox1");

    if (!CGU.checked)
    {
        throw new Error ("Vous devez accepter les CGU.");
    }
}

function validate (event)
{
    event.preventDefault();
    
    const firstName = document.getElementById("first");
    const lastName = document.getElementById("last");
    const email = document.getElementById("email");
    const date = document.getElementById("birthdate");
    const numberTurnament = document.getElementById("quantity");
    

    try {
        validateName(firstName);
        validateName(lastName);
        validateEmail(email);
        validateNumberTurnament(numberTurnament);
        validateDate(date)
        getCityChoice();
        validateCGU();
        
    } catch (error) {
        console.log(error.message);
    }
}