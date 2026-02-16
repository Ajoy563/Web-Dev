const APILINK = 'https://api.themoviedb.org/3/movie/popular?api_key=a2234464360e85cdd82b44225f5c2011';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=a2234464360e85cdd82b44225f5c2011&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

// Load popular movies initially
returnMovies(APILINK);

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);

        // Clear previous movies
        main.innerHTML = '';

        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.src = IMG_PATH + element.poster_path;

            const title = document.createElement('h3');
            title.innerHTML = element.title;

            div_card.appendChild(image);
            div_card.appendChild(title);

            main.appendChild(div_card);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchItem = search.value;
    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});