const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn= document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favouriteMovieTitle");
const movieInputYear =document.querySelector("UserInputYear");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");
let movieInputYear = localStorage.getItem("movieYear");

console.log(titleInStorage);
console.log(imageUrlInStorage);
console.log(movieInputYear);

if(titleInStorage && imageUrlInStorage && movieInputYear) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(54, 30, 54, 0.637), rgba(53, 39, 39, 0.534)), 
    url('${imageUrlInStorage}')`;
}

btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieInputYear = movieInputYear.value;
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    localStorage.setItem("movieYear", movieInputYear);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(54, 30, 54, 0.637), rgba(53, 39, 39, 0.534)),
    url("${posterUrlInput}")`;
    movieTitle.value = "";
    moviePosterUrl.value = "";
    movieInputYear.value = "";
});
