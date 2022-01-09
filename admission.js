

const btnSubmitAdmission = document.querySelector("#admissionForm");
btnSubmitAdmission.addEventListener("submit", function (e){
  e.preventDefault();
  const nameAdmission = e.target.firstname.value;
  alert(`Félicitations ${nameAdmission} ! Ton dossier a bien été envoyé. Notre équipe d'admission reviendra vers toi dans les plus brefs délais.`)
  window.location.href="index.html";
  }) 
