let cocktailBtn = document.getElementById('fetchCocktail');
let cocktailDisplay = document.getElementById('displayCocktail'); 

let fetchRandomCocktail = function(){
    let randomCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randomCocktailURL).
        then(function(result){
            return result.json();
            //console.log(result.json());
        }).
        then(function(data){
            //console.log(data.drinks[0].strDrink);

            let drinkName = data.drinks[0].strDrink;
            let drinkIMG = data.drinks[0].strDrinkThumb;
            let drinkInstruct = data.drinks[0].strInstructions;

            while (cocktailDisplay.firstChild){
                cocktailDisplay.removeChild(cocktailDisplay.firstChild);
            }

            let title = document.createElement('h3');
            title.innerText = drinkName;
            cocktailDisplay.appendChild(title);

            let image = document.createElement('img');
            image.src = drinkIMG;
            image.alt = drinkName;
            cocktailDisplay.appendChild(image);

            let recipie = document.createElement('p');
            recipie.innerText = drinkInstruct;
            cocktailDisplay.appendChild(recipie);
        })

    //console.log(cocktailDisplay);
}

cocktailBtn.addEventListener('click', fetchRandomCocktail);