function validateName (field)
{
    if (field.value.length < 2 || field.value === null)
    {
        throw new Error (`Votre ${field.id}name est trop court.`);
    }

}