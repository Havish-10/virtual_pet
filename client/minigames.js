let score = 0;
let livesLeft = 7;
const words = ['jump', 'throw', 'fall', 'free', 'tomagatchi', 'feed', 'forest', 'weird', 'jack', 'hangman', 'falling', 'Simpsons', 'Family Guy', 'Free Fall', 'Healthy Pet', 'Good Owner', 'Bad Owner', 'Jumping Jack'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const gusess = [];
let mistakes = -1;
let keyPressed = {};
const selectWord = Array.from(words[Math.floor(Math.random() * words.length)]);
const hangmanArr = new Array(selectWord.length).fill('_');
const lowerCased = selectWord.map(selectWord => selectWord.toLowerCase());

function whichKey(e) {
  const p = document.querySelector('#L');
  p.textContent = e.key;
  console.log(keyPressed);
  score = Math.round(e.timeStamp / 1000);
  for (let i = 0; i <= alphabet.length; i++) {
    if (e.key === alphabet[i]) {
      keyPressed = e.key;
      if (!gusess.includes(keyPressed)) {
        gusess.push(keyPressed);
      }
    }
  }
  hangman();
}

function hangman() {
  const unblur = document.querySelectorAll('*');
  for (const elements of unblur) {
    elements.classList.remove('blurred');
  }

  const startGame = document.querySelector('#start_game');
  startGame.classList.add('hidden');
  for (let i = 0; i <= selectWord.length; i++) {
    if (lowerCased[i] === ' ') {
      hangmanArr[i] = ' ';
    }
    if (lowerCased[i] === keyPressed) {
      hangmanArr[i] = keyPressed;
      gameStart();
    }
  }
  if (!lowerCased.includes(keyPressed)) {
    livesLeft--;
    mistakes++;
    updateHangman();
  }

  if (livesLeft === 0) {
    gameEnd();
  }

  if (JSON.stringify(hangmanArr) === JSON.stringify(lowerCased)) {
    console.log('You Win!');
    gameEnd();
  }
  console.log(lowerCased);
  console.log(hangmanArr);
  console.log(mistakes);
}

function gameStart() {
  const wordStat = document.querySelector('#word_status');
  wordStat.textContent = hangmanArr.join(' ');
}

function gameEnd() {
  const endGame = document.querySelector('#end');
  if (livesLeft > 0) {
    endGame.classList.toggle('win');
    endGame.textContent = 'You WIN!';
  } else if (livesLeft <= 0) {
    livesLeft = 0;
    endGame.classList.toggle('death');
    endGame.textContent = 'You DIED!';
  }
}

function updateHangman() {
  if (mistakes > 6) {
    mistakes = 6;
  }
  const imageNo = document.querySelector('#hangman_status');
  imageNo.src = 'assets/' + mistakes + '.jpg';
}

function eventHandlers() {
  const startGame = document.querySelector('#start_game');
  startGame.addEventListener('click', hangman);

  window.addEventListener('keydown', whichKey);
}

function pageLoaded() {
  eventHandlers();
}

pageLoaded();
