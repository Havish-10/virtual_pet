import { saveGame } from './script.mjs';
import { displayValues, deathUpdate, disableButton, showButtons, changeName, deathDOM } from './dom.mjs';

// Pet Stats
// Pet has a default name, The same as the creators pet.
export let petStats = {
  name: "Robert",
  hunger: 100,
  happiness: 100,
  sleep: 100,
  clean: 100,
  score: 0,
  level: 1,
  time: Date.now(),
};
export let xp = 0;

// Loading pet stats from previous session through local storage.
export function loadGame(name) {
  const locStor = localStorage.getItem('load');
  if (locStor !== 'newPet') {
    petStats = JSON.parse(localStorage.getItem(`Pet ${locStor}`));
    xp = JSON.parse(localStorage.getItem(`xp ${locStor}`));
    displayValues();
  }
  init();
  showButtons();
  death();
  displayValues();
}

// Increasing score at a common interval.
function scoreIncrease(attr, value) {
  petStats[attr] = petStats[attr] + value;
  displayValues();
}

// Hunger decreases overtime, Decreases faster the more the pet is interacted with.
function hungerDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
  death();
}

// An Average of all other pet stats.
function happinessDecrease(attr) {
  petStats[attr] = Math.round((petStats.clean + petStats.hunger + petStats.sleep) / 3);
  displayValues();
}

// Sleep decreases over time, Decreases faster the more the pet is interacted with.
function sleepDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
  death();
}

// Cleanliness decreases over time, Decreases faster the more the pet is interacted with.
function cleanDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
}

// Sleep increases with the press of a button
function sleepIncrease() {
  petStats.sleep = Math.min(petStats.sleep + 70, 100);
  displayValues();
  hungerDecrease('hunger', 30);
  xpIncrease(5);
}

// Napping increases sleep value by a smaller increment than sleeping.
function napIncrease() {
  petStats.sleep = Math.min(petStats.sleep + 40, 100);
  displayValues();
  hungerDecrease('hunger', 20);
  xpIncrease(3);
}

// Feeding the pet increases the hunger value and respectively decreases sleep and clean value.
function chickenHunger() {
  petStats.hunger = Math.min(petStats.hunger + 25, 100);
  displayValues();
  cleanDecrease('clean', 3);
  sleepDecrease('sleep', 15);
  xpIncrease(3);
}

function treatHunger() {
  petStats.hunger = Math.min(petStats.hunger + 15, 100);
  displayValues();
  cleanDecrease('clean', 1);
  sleepDecrease('sleep', 5);
  xpIncrease(1);
}

// // Walking the pet increases score.
function petPlayWalk(e) {
  petStats.score = petStats.score + 10;
  disableButton(e.target.parentElement);
  displayValues();
  xpIncrease(5);
}

// Playing Fetch. 50% chance for stick to be retrieved, Increases score.
function petPlayFetch(e) {
  const fetched = Math.round(Math.random());
  if (fetched === 1) {
    petStats.happiness = Math.min(petStats.happiness + 50, 100);
    petStats.score = petStats.score + 10;
    hungerDecrease('hunger', 10);
    sleepDecrease('sleep', 5);
    cleanDecrease('clean', 15);
    disableButton(e.target.parentElement);
    displayValues();
    xpIncrease(5);
  } else if (fetched === 0) {
    petStats.happiness = Math.min(petStats.happiness + 25, 100);
    petStats.score = petStats.score + 5;
    hungerDecrease('hunger', 5);
    sleepDecrease('sleep', 5);
    cleanDecrease('clean', 15);
    disableButton(e.target.parentElement);
    displayValues();
    xpIncrease(1);
  }
}

// Function that increases cleanliness value.
function cleanIncrease() {
  petStats.clean = Math.min(petStats.clean + 30, 100);
  sleepDecrease('sleep', 20);
  displayValues();
  xpIncrease(7);
}

// Function to handle XP values and levels.
function xpIncrease(val) {
  xp = xp + val;
  if (xp >= 250 * petStats.level) {
    xp = xp - (250 * petStats.level);
    petStats.level = petStats.level + 1;
    petStats.score = petStats.score + 50;
    showButtons();
  }
  console.log(xp);
}

// Function that deals with the pets death status.
function death() {
  if (petStats.hunger === 0 || petStats.sleep === 0) {
    deathUpdate();
    saveGame(petStats.name);
    for (let i=0; i<100; i++) {
      window.clearInterval(i);
    };
    deathDOM();
  };
}

// Event Handling
function eventHandlers() {
  const petSleep = document.querySelector('#pet_sleep');
  petSleep.addEventListener('click', sleepIncrease);

  const petNap = document.querySelector('#pet_nap');
  petNap.addEventListener('click', napIncrease);

  const feedChicken = document.querySelector('#feed_chicken');
  feedChicken.addEventListener('click', chickenHunger);

  const feedTreat = document.querySelector('#feed_treat');
  feedTreat.addEventListener('click', treatHunger);

  const playPetW = document.querySelector('#pet_play_walk');
  playPetW.addEventListener('click', petPlayWalk);

  const playPetF = document.querySelector('#pet_play_fetch');
  playPetF.addEventListener('click', petPlayFetch);

  const dogClean = document.querySelector('#dog_clean');
  dogClean.addEventListener('click', cleanIncrease);
}

// Function containing all incremental and decremental values.
export function init() {
  setInterval(hungerDecrease, 30000, 'hunger', 1);
  setInterval(happinessDecrease, 30000, 'happiness');
  setInterval(sleepDecrease, 30000, 'sleep', 1);
  setInterval(cleanDecrease, 30000, 'clean', 1);
  setInterval(scoreIncrease, 1000, 'score', 1);
  setInterval(function () { saveGame(petStats.name)}, 5000);
}

function pageLoaded() {
  eventHandlers();
  if (localStorage.getItem('load') !== null){
    loadGame(); 
  } else {
    displayValues();
    init();
    showButtons();
    death();
  }
}

pageLoaded();
