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

const buttonSub = document.querySelector(".sub-button");
const valueResponseA = document.querySelectorAll(".response-a");
const valueResponseB = document.querySelectorAll(".response-b");
const valueResponseC = document.querySelectorAll(".response-c");

const resultTest = () => {
  let resultResponseA = 0;
  let resultResponseB = 0;
  let resultResponseC = 0;

  buttonSub.addEventListener("click", () => {
        for (let i  = 0; i < valueResponseA.length; i++) {
          if (valueResponseA[i].checked === true) {
            resultResponseA++
          }
        } 
        for (let i  = 0; i < valueResponseB.length; i++) {
          if (valueResponseB[i].checked === true) {
            resultResponseB++
          }
        }   
        for (let i  = 0; i < valueResponseC.length; i++) {
          if (valueResponseC[i].checked === true) {
            resultResponseC++
          }
        }
       
        if (resultResponseA >= 3) {
          alert ("La formation Front-End est faite pour vous ! Pour plus d'informations, veuillez consulter notre page 'Formation'")
        } else if (resultResponseB >= 3) {
          alert ("La formation Back-End est faite pour vous ! Pour plus d'informations veuillez consulter notre page 'Formation'")
        } else if (resultResponseC >= 2) {
          alert ("Vous semblez indécis, vous trouverez des informations approfondies dans notre rubrique 'Formations'..")
        } 
})
}

resultTest();

// PAGE CONTACT

const btnSubmit = document.querySelector(".submit");

if (btnSubmit) {
  btnSubmit.addEventListener("click", () => {
    alert("Félicitation votre requête à bien été envoyée. Notre équipe traitera votre demande dans les plus brefs délais.");
  });
}