let clrBtn = document.getElementById("colorButton");
let randomColorDisplay = document.getElementById("randomColorGen");
let toggleBtn = document.getElementById("imageToggle");
let imgToToggle = document.getElementById("toggleImage");

let imgShowcase = document.getElementById("imageShowcase");
let imgOneBtn = document.getElementById("imgOne");
let imgTwoBtn = document.getElementById("imgTwo");
let imgThreeBtn = document.getElementById("imgThree");
let imgFourBtn = document.getElementById("imgFour");

let randomizeColor = function(){
    //randomColorDisplay.style.backgroundColor = "rgb(200,100,10)";
    //randomColorDisplay.style.backgroundColor = "rgb(" + 200 + "," + 23 + "," + 178 +")";
    //randomColorDisplay.style.backgroundColor = `rgb(${200},${23},${178})`;

    let redComp = Math.random()*255;
    let greenComp = Math.random()*255;
    let blueComp = Math.random()*255;

    randomColorDisplay.style.backgroundColor = "rgb(" + redComp + "," + greenComp + "," + blueComp +")";

    console.log(randomColorDisplay.style.backgroundColor);
}

let toggleTheImage = function(){
   // console.log(imgToToggle);
    //if(imgToToggle.src == "quoka1.jpg"){
        //do a thing
   // }

   //if(imgToToggle.src == "quokka2.jpg"){
        //do a thing
  // }

    //if(imgToToggle.src == "quoka1.jpg"){
        //imgToToggle.src = "quokka2.jpg";
    //}
   //if(imgToToggle.src == "quokka2.jpg"){
        //imgToToggle.src = "quokka1.jpg";
   //}

    //if (imgToToggle.alt == "first quokka image"){
        //imgToToggle.src = "quokka2.jpg";
        //imgToToggle.alt = "second quokka image";

   // if (imgToToggle.alt == "second quokka image"){
       // imgToToggle.src = "quokka1.jpg";
        //imgToToggle.alt = "first quokka image";
    //}

    // imgToToggle.src = "quokka2.jpg";

    if (imgToToggle.alt == "first quokka image"){
        imgToToggle.src = "quokka2.jpg";
        imgToToggle.alt = "second quokka image";
    }
    else{
        imgToToggle.src = "quokka1.jpg";
        imgToToggle.alt = "first quokka image";
    }
}

clrBtn.addEventListener("click", randomizeColor);
toggleBtn.addEventListener("click", toggleTheImage);

imgOneBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "https://www.enchantedyosemite.com/wp-content/uploads/2015/05/yosemite-summer.jpg" + ")" ;
})

imgTwoBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "https://cdn.britannica.com/40/100640-050-277EE821/Hiker-Sequoia-National-Park-Sierra-Nevada-California.jpg" + ")" ;
})

imgThreeBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "https://www.nps.gov/articles/images/GRSA_NPSphoto_960w.jpg?maxwidth=1200&maxheight=1200&autorotate=false" + ")" ;
})

imgFourBtn.addEventListener("click", function(){ 
    imgShowcase.style.backgroundImage = "url(" + "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiker-in-north-window-arch-royalty-free-image-1588786762.jpg?crop=1.00xw:0.752xh;0,0.103xh&resize=1200:*" + ")" ;
})