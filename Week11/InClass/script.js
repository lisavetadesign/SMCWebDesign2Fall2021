//for the carousel
let carouselImages = ["AliceAIW.jpg", "CaterpillarAIW.jpg", "CheshireCatAIW.jpg", "MadHatterAIW.jpg"];
let currentIndex = 0;
let carouselIMG = document.getElementById("carouselIMG");

//for the select
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let characterOptions = ['Classic', 'Alice in Wonderland', 'Monsters Inc', 'Starwars'];
let parkOptions = ['Disneyland', 'Disneyworld', 'TokyoDisney'];
let movieOptions = ['Marvel', 'Pixar', 'Princess'];

let changeSlide = function(){
    if (currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        currentIndex = 1;
    }
    else if (currentIndex === 1){
        carouselIMG.src = carouselImages[2];
        currentIndex = 2;
    }
    else if (currentIndex === 2){
        carouselIMG.src = carouselImages[3];
        currentIndex = 3;
    }
    else{
        carouselIMG.src = carouselImages[0];
        currentIndex = 0;
    }
}
let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if (selectedValue === "characters"){
        characterOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "parks"){
        parkOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "movies"){
        movieOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }

}

window.addEventListener("load", function(){
    //triggered once after 5 sec
   setTimeout(function(){
       prompt("SUBSCRIBE TO OUR NEWSLETTER!!!", "my@email.com");
   }, 2000);

   //triggered every 5 sec
   setInterval(changeSlide, 5000);
})

window.addEventListener("change", updateCategory);
window.addEventListener("change", updateSelection);