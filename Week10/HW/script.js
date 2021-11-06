let menuIconToggle = document.getElementById("iconImg");

console.log(toggleMenuImg);

let toggleMenuImg = function(){
    if (imgToToggle.alt == "hamberger menu"){
        imgToToggle.src = "menuIcon02.png";
        imgToToggle.alt = "menu exit";
    }
    else{
        imgToToggle.src = "menuIcon01.png";
        imgToToggle.alt = "hamberger menu";
    }
}

menuIconToggle.addEventListener("click", toggleMenuImg);
