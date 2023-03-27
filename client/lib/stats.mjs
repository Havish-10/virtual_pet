// All Pet attributes and variables including pet status

import { saveGame } from '../script.mjs';
import { displayValues, deathUpdate, disableButton, showButtons } from './dom.mjs';

// Pet has default name - Same as creators pet.
export let petStats = {
  name: 'Robert',
  hunger: 100,
  happiness: 100,
  sleep: 100,
  clean: 100,
  score: 0,
  level: 1,
};
export let xp = 0;

export function loadGame() {
  petStats = JSON.parse(localStorage.getItem('pet'));
  xp = JSON.parse(localStorage.getItem('xp'));
}

function scoreIncrease(attr, value) {
  petStats[attr] = petStats[attr] + value;
  displayValues();
}
// // Hunger decreases overtime, Decreases faster the more the pet exercises.
function hungerDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
  death();
}

// // Happiness decreases over time, Decreases faster over time.
function happinessDecrease(attr) {
  petStats[attr] = Math.round((petStats.clean + petStats.hunger + petStats.sleep) / 3);
  displayValues();
}

// // Sleep decreases over time, Decreases faster over time.
function sleepDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
  death();
}

function cleanDecrease(attr, value) {
  petStats[attr] = Math.max(petStats[attr] - value, 0);
  displayValues();
}

// // Sleep increasing.
function sleepIncrease() {
  petStats.sleep = Math.min(petStats.sleep + 70, 100);
  displayValues();
  hungerDecrease('hunger', 30);
  xpIncrease(5);
}

function napIncrease() {
  petStats.sleep = Math.min(petStats.sleep + 40, 100);
  displayValues();
  hungerDecrease('hunger', 20);
  xpIncrease(3);
}

// // Feeding the pet, Food is less effective if eaten without an Activity between meals.
// // If pet is fed too many times, It no longer wishes to eat and feeding does not increase the hunger level.
// // It will increase the Feed count however, taking longer to make food effective once again.
function chickenHunger() {
  petStats.hunger = Math.min(petStats.hunger + 25, 100);
  displayValues();
  cleanDecrease('clean', 3);
  sleepDecrease('sleep', 5);
  xpIncrease(3);
}

function treatHunger() {
  petStats.hunger = Math.min(petStats.hunger + 15, 100);
  displayValues();
  cleanDecrease('clean', 1);
  xpIncrease(1);
}

function dogFood() {
  petStats.hunger = Math.min(petStats.hunger + 35, 100);
  displayValues();
  cleanDecrease('clean', 5);
  sleepDecrease('sleep', 15);
  xpIncrease(5);
}

// // Walking the pet.
function petPlayWalk(e) {
  petStats.score = petStats.score + 10;
  disableButton(e.target.parentElement);
  displayValues();
  xpIncrease(5);
}

// // Playing Fetch. 50% chance for stick to be retrieved.
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
//   if (lastClick / 1000 >= 180)
}

function cleanIncrease() {
  petStats.clean = Math.min(petStats.clean + 30, 100);
  displayValues();
  xpIncrease(5);
}

function xpIncrease(val) {
  xp = xp + val;
  if (xp >= 250 * petStats.level) {
    xp = xp - (250 * petStats.level);
    petStats.level = petStats.level + 1;
    showButtons();
  }
  console.log(xp);
}

function death() {
  if (petStats.hunger === 0 || petStats.sleep === 0) {
    deathUpdate();
  }
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

  const feedFood = document.querySelector('#feed_food');
  feedFood.addEventListener('click', dogFood);

  const playPetW = document.querySelector('#pet_play_walk');
  playPetW.addEventListener('click', petPlayWalk);

  const playPetF = document.querySelector('#pet_play_fetch');
  playPetF.addEventListener('click', petPlayFetch);

  const dogClean = document.querySelector('#dog_clean');
  dogClean.addEventListener('click', cleanIncrease);
}

// Function containing all incremental and decremental values.
function init() {
  setInterval(hungerDecrease, 30000, 'hunger', 1);
  setInterval(happinessDecrease, 30000, 'happiness');
  setInterval(sleepDecrease, 30000, 'sleep', 1);
  setInterval(cleanDecrease, 30000, 'clean', 1);
  setInterval(scoreIncrease, 1000, 'score', 1);
  setInterval(saveGame, 5000);
}

function pageLoaded() {
  eventHandlers();
  init();
}

pageLoaded();
