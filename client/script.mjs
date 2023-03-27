import { petStats, xp } from './lib/stats.mjs';

// Saving game.
export function saveGame() {
  localStorage.clear();
  localStorage.setItem('pet', JSON.stringify(petStats));
  localStorage.setItem('xp', JSON.stringify(xp));
  console.log('AutoSaved!');
}

// function resumeGame() {
//   const propt = Object.keys(petStats);
//   for (const attr of propt) {
//     petStats[attr] = localStorage.getItem(attr);
//   }
// }

// Event Handling
function eventHandlers() {
}

// window.addEventListener('load', eventHandlers);
function pageLoaded() {
  eventHandlers();
  // loadGame();
}

pageLoaded();

// Hiding access token.
// window.history.pushState({}, '', '/' + 'pet.html');
