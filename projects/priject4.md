

# Projects related to DOM

## Project Link
[Click Here]:( https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

##Project 4


```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
startOver.appendChild(p);
const div = document.createElement('div');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  const msg1 = 'You guessed it right';
  const msg2 = 'Number is TOOO low';
  const msg3 = 'Number is TOOO High';
  if (guess === randomNumber) {
    displayMessage(msg1);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(msg2);
  } else if (guess > randomNumber) {
    displayMessage(msg3);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  return (p.innerHTML = `<h3>${message}</h3>`);
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  div.classList.add('button');
  div.innerHTML = <h2 id="newGame">Start new Game</h2>;
  startOver.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(div);

    playGame = true;
  });
}
```