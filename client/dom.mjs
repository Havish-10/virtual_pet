'use strict';
import { saveGame } from './script.mjs';
import { petStats, init } from './stats.mjs';

// // Displaying pet values.
export function displayValues() {
  for (const [attr, value] of Object.entries(petStats).filter(([key, value]) => key !== 'time')){
    const output = document.querySelector(`#${attr}`);
    if (output){
      output.value = value;
      output.textContent = `${value}`;
    }
  }
}

// Toggling accessories unlocked from leveling up.
function toggleAccessories(e) {
  const glasses = document.querySelector('#glasses');
  const hat = document.querySelector('#hat');
  if (e.target.id === 'hattoggle') {
    hat.classList.toggle('hidden');
  } else if (e.target.id === 'glasstoggle') {
    glasses.classList.toggle('hidden');
  }
}

// Updating pet SVG when it dies.
export function deathUpdate() {
  const eyesSel = document.querySelector('#eyes');
  eyesSel.classList.add('hidden');

  const deadEyes = document.querySelector('#death_eyes');
  deadEyes.classList.remove('hidden');

  const btns = document.querySelectorAll('button');
  for (const btn of btns) {
    btn.disabled = true;
    btn.classList.remove('grow');
  };
}

// Disables buttons after being clicked.
export function disableButton(btn) {
  btn.disabled = true;
  btn.classList.remove('grow');
  displayValues();
  setTimeout(function () { btn.disabled = false; btn.classList.add('grow'); }, 180000);
}

// Shows the buttons to toggle accessories unlocked by leveling up.
export function showButtons() {
  if (petStats.level >= 2) {
    const btn = document.querySelector('#hattoggle');
    btn.classList.remove('hidden');
    saveGame(petStats.name);
  }
  if (petStats.level >= 3) {
    const btn = document.querySelector('#glasstoggle');
    btn.classList.remove('hidden');
    saveGame(petStats.name);
  }
}

// Function that sets pet name.
export function changeName(e) {
  const rename = document.querySelector("#rename");
  if (e.target.value !== '') {
    if (localStorage.getItem(`Pet ${e.target.value}`) !== null){
      rename.textContent = "Name Already In Use";
    }

    if (localStorage.getItem(`Pet ${e.target.value}`) === null){
      petStats.name = e.target.value;
      saveGame(petStats.name);
      displayValues();
      rename.textContent = "Rename your pet?";
    } 

    if (rename.textContent = "Rename your pet?") {
      localStorage.removeItem(`Pet ${petStats.name}`);
      localStorage.removeItem(`xp ${petStats.name}`);
    }
  }
}

// Function that shows pet stats once pet is dead.
export function deathDOM() {
  const names = document.querySelectorAll('#name, #rename, #nameChange, #score, #level, #scoreTag, #levelTag');
  for (const name of names) {
    name.classList.add('hidden');
  }

  const featureList = document.querySelector('#features');
  while (featureList.firstChild) {
    featureList.removeChild(featureList.firstChild);
  }

  const sect = document.createElement('section');
  for (let [key, value] of Object.entries(petStats)){

    if (key === 'time') {
      value = Math.round(value / 60000) + ' Minutes';
    }
    const para = document.createElement('p');
    para.textContent = `${key}: ${value}`.charAt(0).toUpperCase() + `${key}: ${value}`.slice(1);

    sect.appendChild(para);
    featureList.appendChild(sect);
  }

  const btn = document.createElement('a');
  btn.textContent = 'Home';
  btn.setAttribute('id', 'home');
  btn.setAttribute('class', 'home');
  btn.href = '/';
  sect.appendChild(btn);
}

// Event Handling
function eventHandlers() {
  const hatOn = document.querySelector('#hattoggle');
  hatOn.addEventListener('click', toggleAccessories);

  const glassOn = document.querySelector('#glasstoggle');
  glassOn.addEventListener('click', toggleAccessories);

  const nameChange = document.querySelector('#nameChange');
  nameChange.addEventListener('change', changeName);
}

function pageLoaded() {
  eventHandlers();
}

pageLoaded();
