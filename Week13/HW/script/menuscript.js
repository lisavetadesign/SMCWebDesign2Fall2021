let menubttn = document.getElementById("menubutton")
let nav = document.getElementById("navigation");

let toggleImage = function(){
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
    if (menubttn.alt == "menu_open") {
        menubttn.src = "menubars.png";
        menubttn.alt = "menu_close";
    }
    else {
        menubttn.src = "menux.png";
        menubttn.alt = "menu_open";
     }
    
}

menubttn.addEventListener('click', toggleImage);