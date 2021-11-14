let selectedGenre = document.getElementById("genreSelector");

let allData = [
    ["Comedy", "An American Pickle"],
    ["Comedy", "Dinner for Schmucks"],
    ["Comedy", "Late Night"],
    ["Drama", "Blue Bayou"],
    ["Drama", "Contagion"],
    ["Drama", "Just Mercy"],
    ["Horror", "antebellum"],
    ["Horror", "Dawn of the Dead"],
    ["Horror", "Rec"],
];

function updateSelection(data, movieSelected){
    const filteredArray = data.filter( r => r[0] === movieSelected);

    const movieOptions = new Set();
    filteredArray.forEach(r => movieOptions.add(r[1]));
    
    const movieList = [...movieOptions];
    
    let selectMovie = document.getElementById("movieSelector");

    selectMovie.innerHTML = "";
    
    movieList.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        selectMovie.appendChild(option);
    });
}


function updateGenreSelection(){
    const selectGenre = getElementById("genreSelector").value;
    updateSelection(alldata,selectGenre)
}

selectedGenre.addEventListener("change", updateGenreSelection);


updateSelection(allData, "Comedy");

