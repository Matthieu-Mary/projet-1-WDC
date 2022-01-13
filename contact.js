// PAGE CONTACT

const form = document.querySelector("#form");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameValue = e.target[0].value;
        localStorage.setItem("name", nameValue);
        const emailValue = e.target[1].value;
        localStorage.setItem("email", emailValue);
        const messageValue = e.target[2].value;
        localStorage.setItem("message", messageValue);
        console.log(nameValue)
        if (nameValue != "" && emailValue != "") {
          alert(`Bonjour ${nameValue}, votre requête à bien été envoyée.`)
        } else {
          alert("Veuillez remplir tous les champs obligatoires")
        }
        
      });

 


