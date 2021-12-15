let menu = document.querySelector('#mobileMenu');
let menuLinks = document.querySelector('.nav-menu');

menu.addEventListener("click", function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
console.log("here")