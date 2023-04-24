'use strict';
import { petStats, xp } from './stats.mjs';

// Saving game.
export function saveGame(name) {
  localStorage.removeItem(`Pet ${name}`);
  localStorage.setItem(`Pet ${name}`, JSON.stringify(petStats));
  localStorage.setItem(`xp ${name}`, JSON.stringify(xp));
  localStorage.setItem('load', petStats.name);
  console.log('AutoSaved!');
}
