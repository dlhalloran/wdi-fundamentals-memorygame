console.log("Up and running!");

var cards = {
  "card":[
    {
    "rank": "queen",
    "suit": "hearts",
    "cardImage": "images/queen-of-hearts.png"
  },
  {
    "rank": "queen",
    "suit": "diamonds",
    "cardImage": "images/queen-of-diamonds.png"
  },
  {
    "rank": "king",
    "suit": "hearts",
    "cardImage": "images/king-of-hearts.png"
  },
  {
    "rank": "king",
    "suit": "diamonds",
    "cardImage": "images/king-of-diamonds.png"
  },
]

}

var cardsInPlay = [];


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]); {
  alert("You found a match!")
}

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[2]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}


var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards.card[0].rank);
  console.log("User flipped " + cardId.rank);
  cardsInPlay.push(cards.card[2]);
  console.log("User flipped " + cardId.rank);
  this.setAttribute('src', cards.card.cardImage);
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]); {
  alert("You found a match!")
}

  console.log(cards.cardImage);
  console.log(cards.suit);

}

var createBoard = function () {
  for (var i = 0; i < cards.length; i++)
  {
    var createBoard = cardsObject.cards[i];
    console.log('rank ' + card.rank);
    console.log('suit ' + card.suit);
    console.log('cardImage ' + card.cardImage);
    document.getElementById('game-board').setAttribute('data-id', i);
    document.getElementById('game-board').addEventListener('click', flipCard);

  var cardElement = document.createElement('img');
  document.getElementById('game-board').setAttribute('src', 'images/back.png');
  document.getElementById('game-board').setAttribute('src', 'images/king-of-diamods.png');
  document.getElementById('game-board').setAttribute('src', 'images/king-of-hearts.png');
  document.getElementById('game-board').setAttribute('src', 'images/queen-of-diamonds.png');
  document.getElementById('game-board').setAttribute('src', 'images/queen-of-hearts');

  var cardElement = document.createElement('img');
  document.getElementById('game-board').appendChild(cardElement);

}

}

var cardsJSON = JSON.stringify(cards);
var cardsObject = JSON.parse(cardsJSON);

console.log(cardsJSON);
console.log(cardsObject);


createBoard();


checkForMatch();
