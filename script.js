let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
let favourite = document.getElementById('favourite');
let list = document.getElementById('list-of-favourite-quotes');
let copyButton = document.getElementById('copy');
let showAllListOfFavourite = document.getElementById('show-list');
let clearButton = document.getElementById('clear-button');
let favoriteContainer = document.querySelector('.favorite-container');
let closeButton = document.getElementById('close-favorite');
const url = 'https://api.quotable.io/random';
let favorites = [];

const getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

btn.addEventListener('click', getQuote);

window.addEventListener('load', getQuote);
