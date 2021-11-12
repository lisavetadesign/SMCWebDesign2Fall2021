//for the carousel
let carouselImages = ["AliceAIW.jpg", "CaterpillarAIW.jpg", "CheshireCatAIW.jpg", "MadHatterAIW.jpg"];
let currentIndex = 0;
let carouselIMG = document.getElementById("carouselIMG");

//for the select
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let charactersOptions = ['Classic', 'Alice in Wonderland', 'Monsters Inc', 'Starwars'];
let parksOptions = ['Disneyland', 'Disneyworld', 'TokyoDisney'];
let moviesOptions = ['Marvel', 'Pixar', 'Princess'];

let changeSlide= function(){
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
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if (selectedValue === "characters"){
        charactersOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "parks"){
        parksOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "movies"){
        moviesOptions.forEach(function(elem){
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