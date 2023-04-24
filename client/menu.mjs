'use strict';
// Function that loads all pets and their respective stats.
export function loadStats(e) {
  const stored = [];
  let storKey;
  for (let i=0; storKey = localStorage.key(i); i++){
    if (storKey.indexOf('Pet') > -1){
      stored[i] = storKey;
    }
  }

  let users = [];
  for (let i = 0; i < stored.length; i++){
    users[i] = JSON.parse(localStorage.getItem(stored[i]));
    if (users[i] !== null){
      userLoad(users[i]);
    }
  }  
  users = users.filter(e => e !== null);
}

// Function that creates and presents sections for each user.
function userLoad(user){
  const section = document.createElement('section');
  const btn = document.createElement('a');
  btn.textContent = 'Select';
  btn.setAttribute('id', `${user.name}`);
  btn.href = `/pet`;
  section.setAttribute('id', `${user.name}`);

  for (const [key, value] of Object.entries(user).filter(([key, value]) => key !== 'time')){
    const para = document.createElement('p');
    para.textContent = `${key}: ${value}`.charAt(0).toUpperCase() + `${key}: ${value}`.slice(1);
    section.appendChild(para);
    section.appendChild(btn);
    document.body.appendChild(section);
  }
}

// Function that determines whether the pet is to be a Fresh Pet or an existing one.
function redirect(e){
  if (e.target.id !== 'newPet') {
    localStorage.setItem('load', e.target.id);
  } else {
    localStorage.setItem('load', 'newPet');
  }
  console.log(localStorage.getItem('load'));
}

// Function for creating a new pet.
function userCreate() {
  const section = document.createElement('section');
  const btn = document.createElement('a');
  btn.textContent = 'New Pet';
  btn.setAttribute('id', 'newPet');
  btn.setAttribute('class', 'newPet');
  btn.href = '/pet';
  section.appendChild(btn);
  document.body.appendChild(section);
}

// Event Handling
function eventHandlers() {
  const anchor = document.querySelectorAll('a');
  for (const a of anchor) {
    a.addEventListener('click', redirect);
  }
}

function pageLoaded(){
  userCreate();
  loadStats();
  eventHandlers();
}

pageLoaded();