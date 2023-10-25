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