let NASAImgBttn = document.getElementById('getNASAImage');
let NASAImgDisp = document.getElementById('displayNASAImage');

let getNASAImage = function(){
    let baseURL = 'https://api.nasa.gov/planetary/apod?date=';
    let dateURL = NASAImgBttn.value;
    let apiURL = 'R4dsEdQ4oiu3yNuRVufMSnJOgQzUoY4m3GDr8eyj';
    let imgURL = baseURL + dateURL + '&api_key=' + apiURL;

    fetch(imgURL).
        then(function(result){
            return result.json();
        }).
        then(function(data){
            while(NASAImgDisp.firstChild){
                NASAImgDisp.removeChild(NASAImgDisp.firstChild);
            }
        
        let img = document.createElement('img');
        img.src = data.url;
        img.alt = data.title;
        NASAImgDisp.appendChild(img);
        })
}

NASAImgBttn.addEventListener('change', getNASAImage);