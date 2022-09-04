// write a function called getCard() which returns a random playing card object, like:
//   {
//      value: 'K'
//      suit: 'clubs'
//   }

// pick a random value from: 2,3,4,5,6,7,8,9,10,J,Q,K,A
// pick a random suit from: clubs, spades, hearts, diamonds
// return both in an object
// ********************************************************************************************************

const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

function pickRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
}

function getCard() {

    // const value = pickRandom(values);
    // console.log(value);

    // const suit = pickRandom(suits);
    // console.log(suit);
    
    // return { value: value, suit: suit};

    const myCard = new Object();
    myCard.value = pickRandom(values);
    myCard.suit = pickRandom(suits);
    console.log(myCard);
    return myCard;

}

getCard()





// function getCard() {

//     const randomValueIndex = Math.floor(Math.random() * values.length)
//     const value = (values[randomValueIndex])
//     // console.log(value);

//     const randomSuitIndex = Math.floor(Math.random() * suits.length)
//     const suit = (suits[randomSuitIndex])
//     // console.log(suit);
    
//     // return { value: value, suit: suit};

//     const myCard = new Object();
//     myCard.value = value;
//     myCard.suit = suit;
//     console.log(myCard);
//     return myCard;

// }

// getCard()