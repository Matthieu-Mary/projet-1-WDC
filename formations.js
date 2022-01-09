
const toggleRemoteButton = document.querySelector("#remote");
const toggleCampusButton = document.querySelector("#onCampus");


toggleCampusButton.addEventListener("click", () => toggleCampusModules("webDev_remote", "webDev_remoteHide", "call_to_action_2", "call_to_action_3"));


toggleRemoteButton.addEventListener("click", () =>  toggleCampusModules("webDev_remoteHide", "webDev_remote", "call_to_action_3", "call_to_action_2" ));


function toggleCampusModules (oldClass, newClass, campusButtonClass, remoteButtonClass){
  const remoteCoursesElements = document.querySelectorAll(`.`+oldClass);
  if (remoteCoursesElements.length > 0) {
      remoteCoursesElements.forEach(element => {
        element.className = (newClass);
    })

  toggleRemoteButton.className = (remoteButtonClass);
  toggleCampusButton.className = (campusButtonClass);
  } 
}
