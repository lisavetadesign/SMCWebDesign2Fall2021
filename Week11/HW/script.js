//for the carousel
let americanpickleImages = ["americanpickle1.png", "americanpickle2.png", "americanpickle3.jpg", "americanpickle4.jpg"];
let dinnerschmucksImages = ["dinnerschmucks1.jpg", "dinnerschmucks2.jpg", "dinnerschmucks3.jpg","dinnerschmucks4.jpeg"];
let latenightImages = ["latenight1.jpg", "latenight2.jpeg", "latenight3.jpg", "latenight4.jpeg"];
let bluebayouImages = ["bluebayou1.jpg", "bluebayou2.jpg", "bluebayou3.jpg", "bluebayou4.jpg"];
let contagionImages = ["contagion1.jpg", "contagion2.jpg", "contagion3.jpg", "contagion4.jpg"];
let justmercyImages = ["justmercy1.jpg", "justmercy2.jpeg", "justmercy3.jpg", "justmercy4.jpg"];
let antebellumImages = ["antebellum1.jpg", "antebellum2.jpg", "antebellum3.jpeg", "antebellum4.jpeg"];
let dawnofdeadImages = ["dawnofdead1.jpg", "dawnofdead2.jpg", "dawnofdead3.jpg", "dawnofdead4.jpg"];
let recImages = ["rec1.jpg", "rec2.jpg", "rec3.jpg", "rec4.jpg"];

let carouselImages = ["", "", "", ""];

let currentIndex = 0;
let carouselIMG = document.getElementById("carouselIMG");

//for the select
let genreSelect = document.getElementById("genreSelector");
let movieSelect = document.getElementById("movieSelector");
let comedyOptions = ['An American Pickle', 'Dinner for Schmucks', 'Late Night'];
let dramaOptions = ['Blue Bayou', 'Contagion', 'Just Mercy'];
let horrorOptions = ['Antebellum', 'Dawn of the Dead', 'Rec'];

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
    movieSelect.innerHTML = '';
    let selectedValue = genreSelect.value;
    if (selectedValue === "comedy"){
        comedyOptions.forEach(function(elem){
            movieSelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "drama"){
        dramaOptions.forEach(function(elem){
            movieSelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if (selectedValue === "horror"){
        horrorOptions.forEach(function(elem){
            movieSelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }

}

let movieUpdate = function (){
    console.log(carouselImages);
    let currentValue = movieSelect.value;
    if (currentValue === 'An American Pickle'){
        carouselImages = americanpickleImages;
    }
    else if (currentValue === 'Dinner for Schmucks'){
        carouselImages = dinnerschmucksImages;
    }
    else if (currentValue === 'Late Night'){
        carouselImages = latenightImages;
    }
    else if (currentValue === 'Blue Bayou'){
        carouselImages = bluebayouImages;
    }
    else if (currentValue === 'Contagion'){
        carouselImages = contagionImages;
    }
    else if (currentValue === 'Just Mercy'){
        carouselImages = justmercyImages;
    }
    else if (currentValue === 'Antebellum'){
        carouselImages = antebellumImages;
    }
    else if (currentValue === 'Dawn of the Dead'){
        carouselImages = dawnofdeadImages;
    }
    else if (currentValue === 'Rec'){
        carouselImages = recImages;
    }
    else 
        {currentValue === ''
        carouselImages = carouselImages;
    }
}

/*let comedyUpdate = function (){
    console.log(carouselImages);
    let currentValue = movieSelect.value;
    if (currentValue === 'An American Pickle'){
        carouselImages = americanpickleImages;
    }

    else if (currentValue === 'Dinner for Schmucks'){
        carouselImages = dinnerschmucksImages;
    }
    else 
        {currentValue === 'Late Night'
        carouselImages = latenightImages;
    }
}

let dramaUpdate = function (){
    let currentValue = movieSelect.value;
    if (currentValue === 'Blue Bayou'){
        carouselImages = bluebayouImages;
    }

    else if (currentValue === 'Contagion'){
        carouselImages = contagionImages;
    }
    else 
        {currentValue === 'Just Mercy'
        carouselImages = justmercyImages ;
    }
}

let horrorUpdate = function (){
    let currentValue = movieSelect.value;
    if (currentValue === 'Antebellum'){
        carouselImages = antebellumImages;
    }

    else if (currentValue === 'Dawn of the Dead'){
        carouselImages = dawnofdeadImages;
    }
    else 
        {currentValue === 'Rec'
        carouselImages = recImages;
    }
} */

window.addEventListener("load", function(){
   //triggered every 5 sec
   setInterval(changeSlide, 3000);
})

genreSelect.addEventListener("change", updateCategory);
movieSelect.addEventListener("change", movieUpdate);

/*movieSelect.addEventListener("change", comedyUpdate);
movieSelect.addEventListener("change", dramaUpdate);
movieSelect.addEventListener("change", horrorUpdate);*/

