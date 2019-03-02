let randomCountryElement = document.querySelector('#random-country');
let userAnswerElement = document.querySelector("#user-answer");
let submitButton = document.querySelector("#submit-answer");
let resultTextElement = document.querySelector('#result');
let playAgainElement = document.querySelector('#play-again');

var resData;
var randomCountry;

assignCountry();

submitButton.addEventListener('click', () => {
    fetchData();
});
playAgainElement.addEventListener('click', () => {
    assignCountry();
});

// Creates a random number between 0 and countriesAndCodes.length - 1, then returns
// a country based on that number.
function findRandomCountry() {
  max = countriesAndCodes.length;
  randInt = Math.floor(Math.random() * max) - 1;
  return countriesAndCodes[randInt];
}

// Finds a random country from the data structure and displays it on the page.
// Some of the responses from the World Bank API do not have a capital city, so the
// fetch() here will assign another country if no capital is found (this results in
// a type error).
function assignCountry() {
    randomCountry = findRandomCountry();
    randomCountryElement.innerHTML = randomCountry['name'];

    let url = 'http://api.worldbank.org/v2/country/' + randomCountry['alpha-2'] + '?format=json';
        fetch(url)
            .then( res => res.json())
        .then( data => {
            data[1][0]['capitalCity'];
        })
        .catch(err => {
            assignCountry();
        });
}

// This function fetches a response obejct from a url and compares a piece of it to the // user's answer. The result element will change depending on their equality.
function fetchData() {
    let url = 'http://api.worldbank.org/v2/country/' + randomCountry['alpha-2'] + '?format=json';
    fetch(url)
        .then( res => res.json())
        .then( data => {
            resultTextElement.innerHTML =
                data[1][0]['capitalCity'].toLowerCase() ==
                userAnswerElement.value.toLowerCase() ?
                `Correct! The capital city of ${randomCountry['name']} is ${userAnswerElement.value}.` :
                `Incorrect! The capital city of ${randomCountry['name']} is ${data[1][0]['capitalCity']}.`;
                console.log(data);
            }
             )
        .catch( err => console.log(err));
}
