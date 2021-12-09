//NAVBAR HAMBURGER RESPONSIVE (TOGGLE)

const puce = document.querySelector(".container_puce_mobile");
const menu = document.querySelector(".toggle_menu");


let toggleStatus = false;

puce.addEventListener("click", () => {

  if (toggleStatus === false) {
    menu.style.display = "flex";
    toggleStatus = true;
  } else {
    menu.style.display = "none";
    toggleStatus = false;
  }

})

// FORM CHOICE





// PAGE CONTACT

const btnSubmit = document.querySelector(".submit");

if (btnSubmit) {
  btnSubmit.addEventListener("click", () => {
    alert("Félicitation votre requête à bien été envoyée. Notre équipe traitera votre demande dans les plus brefs délais.");
  });
}