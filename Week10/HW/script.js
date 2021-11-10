const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.nav-menu');

let imgShowcase = document.getElementById("imageShowcase");
let imgOneBtn = document.getElementById("imgOne");
let imgTwoBtn = document.getElementById("imgTwo");
let imgThreeBtn = document.getElementById("imgThree");
let imgFourBtn = document.getElementById("imgFour");
let imgFiveBtn = document.getElementById("imgFive");

menu.addEventListener("click", function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

imgOneBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "GreatSmokyMountainsNP.jpg" + ")" ;
})

imgTwoBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "YellowstoneNP.jpg" + ")" ;
})

imgThreeBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "ZionNP.jpeg" + ")" ;
})

imgFourBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "RockyMountainNP.jpg" + ")" ;
})

imgFiveBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "GrandTetonNP.jpg" + ")" ;
})