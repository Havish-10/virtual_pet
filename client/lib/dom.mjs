import { petStats } from './stats.mjs';

// // Displaying pet values.
export function displayValues() {
  for (const [attr, value] of Object.entries(petStats)) {
    const output = document.querySelector(`#${attr}`);
    output.value = value;
    output.textContent = `${value}`;
  }
}

function toggleAccessories(e) {
  const glasses = document.querySelector('#glasses');
  const hat = document.querySelector('#hat');
  if (e.target.id === 'hattoggle') {
    hat.classList.toggle('hidden');
  } else if (e.target.id === 'glasstoggle') {
    glasses.classList.toggle('hidden');
  }
}

export function deathUpdate() {
  const eyesSel = document.querySelector('#eyes');
  eyesSel.classList.add('hidden');

  const deadEyes = document.querySelector('#death_eyes');
  deadEyes.classList.remove('hidden');
}

export function disableButton(btn) {
  btn.disabled = true;
  btn.classList.remove('grow');
  displayValues();
  setTimeout(function () { btn.disabled = false; btn.classList.add('grow'); }, 180000);
}

export function showButtons() {
  if (petStats.level === 2) {
    const btn = document.querySelector('#hattoggle');
    btn.classList.remove('hidden');
  }
  if (petStats.level === 3) {
    const btn = document.querySelector('#glasstoggle');
    btn.classList.remove('hidden');
  }
}

function changeName(e) {
  if (e.target.value !== '') {
    petStats.name = e.target.value;
    displayValues();
  }
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

// window.addEventListener('load', eventHandlers);
function pageLoaded() {
  eventHandlers();
}

pageLoaded();
