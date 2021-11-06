let menuIconToggle = document.getElementById("iconImg");

console.log(toggleMenuIcon);

let toggleMenuIcon = function(){
    if (menuIconToggle.alt == "hamberger menu"){
        menuIconToggle.src = "menuIcon02.png";
        menuIconToggle.alt = "menu exit";
    }
    else{
        menuIconToggle.src = "menuIcon01.png";
        menuIconToggle.alt = "hamberger menu";
    }
}

menuIconToggle.addEventListener("click", toggleMenuIcon);
