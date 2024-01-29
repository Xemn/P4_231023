function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeValidation = document.querySelector(".closeValidation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal ()
{
  modalbg.style.display = "none";
}
// Fermeture de la modal de confirmation de reservation : 
function closeConfirmationModal ()
{
  // Nous vérifions si cette classe existe car elle est créer dynamiquement : 
  const validation = document.querySelector(".validation");
  if(validation)
  {
    validation.style.display = "none";
  }
}

document.body.addEventListener('click', function(event) {
    // Vérifiez si le clic provient du bouton de fermeture généré dynamiquement
    if (event.target.classList.contains('closeValidation')) {
        // Fermez la modal ici
        closeConfirmationModal();
    }
});