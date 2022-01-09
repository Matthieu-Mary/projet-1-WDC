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
/*
const buttonSub = document.querySelector(".sub-button");
const valueResponseA = document.querySelectorAll(".response-a");
const valueResponseB = document.querySelectorAll(".response-b");
const valueResponseC = document.querySelectorAll(".response-c");

const resultTest = () => {
  let resultResponseA = 0;
  let resultResponseB = 0;
  let resultResponseC = 0;
// submit, (e)
// log e.target.elements
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
        } else if (resultResponseC >= 3) {
          alert ("La formation Back-End est faite pour vous ! Pour plus d'informations veuillez consulter notre page 'Formation'")
        } else if (resultResponseA === 2 && resultResponseB === 2) {
          alert ("La formation Front-End est faite pour vous ! Pour plus d'informations, veuillez consulter notre page 'Formation'")
        } else if (resultResponseB === 2 && resultResponseC === 2) {
          alert ("La formation Back-End est faite pour vous ! Pour plus d'informations veuillez consulter notre page 'Formation'")
        } else if (resultResponseA === 2 && resultResponseC === 2) {
          alert ("Les deux formations pourraient vous convenir ! Pour plus d'informations veuillez consulter notre page 'Formation' ")
        } else {
          alert ("Vous semblez indécis.. Rendez vous sur notre page 'Formation', cela vous aidera à faire votre choix")
        } 
})
}

resultTest();
*/

// PAGE CONTACT


// PAGE LOCAUX


let articles = document.querySelectorAll("article");
// let image = document.querySelectorAll(".container-image");
// let text = document.querySelectorAll(".container-text");

articles.forEach((article)=> {
  console.log(article);
})






