let selectedGenre = document.getElementById("genreSelector");

let allData = [
    ["Comedy", "An American Pickle"],
    ["Comedy", "Dinner for Schmucks"],
    ["Comedy", "Late Night"],
    ["Drama", "Blue Bayou"],
    ["Drama", "Contagion"],
    ["Drama", "Just Mercy"],
    ["Horror", "Antebellum"],
    ["Horror", "Dawn of the Dead"],
    ["Horror", "Rec"],
];

function updateSelection(data, movieSelected){
    const filteredArray = data.filter( r => r[0] === movieSelected);
    
    const movieList = populateMovie(filteredArray,1);

    let selectMovie = document.getElementById("movieSelector");

    populateDropdown(selectMovie, movieList);
}

function updateGenreSelection(){
    const selectGenre = document.getElementById("genreSelector").value;
    updateSelection(allData,selectGenre)
}

function documentLoad(){

    populateDropdown();
    updateGenreSelection();
}


function populateMovie(data,index){
    const movieOptions = new Set();
    data.forEach(r => movieOptions.add(r[index]));
    return [...movieOptions];
}

function populateGenre(){
    const genreList = populateMovie(allData,0);
    const elem = document.getElementById("genreSelector");
    populateDropdown(elem, genreList);
}

function populateDropdown(elem, listAsArray){
    elem.innerHTML = "";
    
    listAsArray.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        elem.appendChild(option);
    });
}


selectedGenre.addEventListener("change", updateGenreSelection);
document.addEventListener("DOMContentLoaded", documentLoad);


