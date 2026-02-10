// let quoteId = 0;
// let quoteText = '';
// function onClick() {
//   quoteId++;
//   quoteText = 'To be or not to be...';

//   const quote = {
//     id: quoteId,
//     text: quoteText
//   };

//   localStorage.setItem(quote.id, JSON.stringify(quote));
//   console.log(quote);
//   return quote;
  
// };

// onClick();

// let storedQuotes = localStorage.getItem('quoteArray');
// console.log(storedQuotes);

// let quoteArray = [];

// button.addEventListener('click', function () {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('quote', data[0].content);
//       container.textContent = data[0].content +',' + data[1].content; // with 'data[1].content' being the author
      
//       const quote = {
//         text: data[0].content,
//         author: data[1].content
//       };

//       quoteArray.push(quote);
//       console.log(quoteArray);
//       localStorage.setItem('quoteArray', JSON.stringify(quoteArray));
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// });

// getQuote();

// let quoteText = '';
// let quoteAuthor = '';
// let quoteArray = [];

// button.addEventListener('click', function () {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('quote', data[0].content);
//       container.textContent = data[0].content, data[1].content;
//       const getQuote =() => {
//         const quote = {
//           text: data[0].content,
//           author: data[1].content
//         };
//         quoteArray.push(quote);
//         console.log(quoteArray);
//         localStorage.setItem('quoteArray', JSON.stringify(quoteArray));

//       };
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// });



let container = document.getElementById('quote-box');
// get quoteArray from local storage using the key 'quoteArray'
// parse the string into an array of objects using JSON.parse() and store it in a variable ('storedQuotes')
// if there is no quoteArray in local storage, set storedQuotes to an empty array
let storedQuotes = JSON.parse(localStorage.getItem('quoteArray')) || [];
// loop through the stored Quotes array and display each quote with the .map() method
storedQuotes.map((quote) => {
  console.log(quote);
  const quoteElement = document.createElement('h2');
  const quoteAuthorElement = document.createElement('h3');
  quoteElement.textContent = quote.text;
  quoteAuthorElement.textContent = '- ' + quote.author;
  container.appendChild(quoteElement);
  container.appendChild(quoteAuthorElement);
});

console.log('stored quotes: ', storedQuotes);

// create an empty array to store the randomly generated quotes
let quoteArray = [];

// this getQuote function is standing in for your button click event that triggers the fetch call to the API
const getQuote =() => {
  // create a quote object with 2 properties (text and author)
  const quote = {
    text: 'To be or not to be...',
    author: 'Billy S.'
  };
  // push the quote object into the quoteArray
  quoteArray.push(quote);
  console.log(quoteArray);
  // put quoteArray into local storage
  localStorage.setItem('quoteArray', JSON.stringify(quoteArray));
};

// call the getQuote function
// in your case this would be triggered by the button click event and not called directly like this
getQuote();




function getName() {
  let name = 'Legolas';
  return name;
}

function getCharacterClass() {
  let characterClass = 'Archer';
  return characterClass;
}

function getRace() {
  let race = 'Elf';
  return race;
}

function getStats() {
  let stats = {
    strength: 17,
    dexterity: 18,
    constitution: 16,
    intelligence: 14,
    wisdom: 10,
    charisma: 12
  };
  return stats;
}

// this would be your button click event
function generateCharacterOnCLick() {
  const character = {
    name: getName(),
    characterClass: getCharacterClass(),
    race: getRace(),
    stats: getStats()
  };
  console.log(character);
  return character;
}

generateCharacterOnCLick();




// const character = {
//   name: getName(),
//   characterClass: getCharacterClass(),
//   race: getRace()
// };

// console.log(character);