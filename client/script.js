// All Pet attributes and variables including pet status
const pet = {
  name,
  hunger: 100,
  happiness: 100,
  sleep: 100,
  nausea: 0,
  boredom: 0,
  score: 0,
  exerciseCount: 0,
  feedCount: 0,
  deathStatus: false,
  start: false,
};

// Hunger decreases overtime, Decreases faster the more the pet exercises.
setInterval(hungerDecrease, 1000);
function hungerDecrease() {
  const hungerVal = document.querySelector('#hunger');
  if (pet.start === true) {
    switch (pet.hunger > 0) {
      case (pet.exerciseCount <= 3 && pet.exerciseCount >= 0):
        pet.hunger--;
        break;

      case (pet.exerciseCount <= 7 && pet.exerciseCount > 3):
        pet.hunger = pet.hunger - 5;
        break;

      case (pet.exerciseCount > 7):
        pet.hunger = pet.hunger - 10;
        break;
    }

    if (pet.hunger < 0) {
      pet.hunger = 0;
      pet.deathStatus = true;
    }

    if (pet.hunger > 100) {
      pet.hunger = 100;
    }
  }
  hungerVal.value = pet.hunger;
  return console.log(pet.hunger);
}

// Happiness decreases over time, Decreases faster over time.
setInterval(happinessDecrease, 1000);
function happinessDecrease() {
  const happinessVal = document.querySelector('#happiness');
  if (pet.start === true) {
    switch (pet.happiness > 0) {
      case (pet.exerciseCount === 0):
        pet.happiness = pet.happiness - 5;
        break;

      case (pet.exerciseCount <= 3 && pet.exerciseCount >= 1):
        pet.happiness = pet.happiness - 3;
        break;

      case (pet.exerciseCount >= 4):
        pet.happiness--;
        break;
    }

    if (pet.happiness < 0) {
      pet.happiness = 0;
    }

    if (pet.happiness > 100) {
      pet.happiness = 100;
    }
  }
  happinessVal.value = pet.happiness;
}

// Sleep decreases over time, Decreases faster over time.
setInterval(sleepDecrease, 1000);
function sleepDecrease() {
  const sleepVal = document.querySelector('#sleep');
  if (pet.start === true) {
    switch (pet.sleep >= 0) {
      case (pet.exerciseCount <= 3 && pet.exerciseCount >= 0):
        pet.sleep--;
        break;

      case (pet.exerciseCount <= 7 && pet.exerciseCount > 3):
        pet.sleep = pet.sleep - 3;
        break;

      case (pet.exerciseCount > 7):
        pet.sleep = pet.sleep - 5;
        break;
    }

    if (pet.sleep < 0) {
      pet.sleep = 0;
      pet.deathStatus = true;
    }

    if (pet.sleep >= 100) {
      pet.sleep = 100;
    }
  }
  sleepVal.value = pet.sleep;
  return console.log(pet.exerciseCount);
}

// Boredom increases over time
setInterval(boredomIncrease, 1000);
function boredomIncrease() {
  const petStatus = document.querySelector('#boredomtext');
  const boredomVal = document.querySelector('#boredom');
  petStatus.textContent = `${pet.name} is doing AMAZING!`;

  if (pet.start === true) {
    switch (pet.boredom > 0) {
      case (pet.exerciseCount === 0):
        pet.boredom = pet.boredom + 5;
        break;

      case (pet.exerciseCount > 0):
        pet.boredom++;
        break;
    }


    if (pet.boredom >= 0 && pet.boredom < 30) {
      petStatus.textContent = `${pet.name} is doing AMAZING!`;
    }

    if (pet.boredom >= 30 && pet.boredom < 75) {
      petStatus.textContent = `${pet.name} is getting bored!`;
    }

    if (pet.boredom >= 75 && pet.boredom < 100) {
      petStatus.textContent = `${pet.name} is lonely! Shame on you!`;
    }

    if (pet.boredom >= 100) {
      pet.boredom = 100;
      petStatus.textContent = `${pet.name} is lonely! Shame on you!`;
    }
    boredomVal.value = pet.boredom;
    return console.log(pet.feedCount);
  }
}

// Sleep increasing over time.
function sleepIncrease() {
  pet.exerciseCount = 0;
  pet.sleep = pet.sleep + 70;
}

function napIncrease() {
  pet.exerciseCount = pet.exerciseCount - 3;
  pet.sleep = pet.sleep + 30;
}

// Feeding the pet, Food is less effective if eaten without an Activity between meals.
function chickenHunger() {
  pet.feedCount = pet.feedCount + 1;
  pet.exerciseCount = pet.exerciseCount - 2;
  if (pet.feedCount === 0) {
    pet.hunger = pet.hunger + 50;
    pet.nausea++;
  } else if (pet.feedCount <= 10) {
    pet.hunger = pet.hunger + (50 - (pet.feedCount * 5));
    pet.nausea = pet.nausea + 4;
  }
}

function treatHunger() {
  pet.feedCount = pet.feedCount + 1;
  pet.exerciseCount = pet.exerciseCount - 1;
  if (pet.feedCount === 0) {
    pet.hunger = pet.hunger + 10;
    pet.nausea++;
  } else if (pet.feedCount <= 10) {
    pet.hunger = pet.hunger + (10 - (pet.feedCount * 1));
    pet.nausea = pet.nausea + 2;
  }
}

function dogFood() {
  pet.feedCount = pet.feedCount + 1;
  pet.exerciseCount = Math.round(pet.exerciseCount / 2);
  if (pet.feedCount === 0) {
    pet.hunger = pet.hunger + 25;
    pet.nausea++;
  } else if (pet.feedCount <= 10) {
    pet.hunger = pet.hunger + (25 - (pet.feedCount * 2));
    pet.nausea = pet.nausea + 3;
  }
}


// Showing pet details on hover.
function showDetails() {
  const petDet = document.querySelector('#pet_details');
  petDet.classList.add('visible');
  petDet.classList.remove('hidden');
  petDet.textContent = `${pet.name} ${pet.nausea} ${pet.boredom}`;


  setInterval(updateVal, 1000);
  function updateVal() {
    petDet.textContent = `${pet.name} ${pet.nausea} ${pet.boredom}`;
  }
}

// Removing pet details on mouse leave.
function removeDetails() {
  const petDet = document.querySelector('#pet_details');
  petDet.classList.add('hidden');
  petDet.classList.remove('visible');
}


// Walking the pet.
function petPlayWalk() {
  pet.exerciseCount = pet.exerciseCount + 1;
  pet.happiness = pet.happiness + 30;
  pet.feedCount = Math.round(pet.feedCount / 2);
}

// Playing Fetch. 50% chance for stick to be retrieved.
function petPlayFetch() {
  pet.exerciseCount = pet.exerciseCount + 1;
  const fetched = Math.round(Math.random());
  if (fetched === 1) {
    pet.happiness = pet.happiness + 50;
  } else {
    pet.happiness = pet.happiness + 25;
  }
  pet.feedCount = pet.feedCount - 3;
}

// Playing minigame.


// Event Handling
function eventHandlers() {
  const petSleep = document.querySelector('#pet_sleep');
  petSleep.addEventListener('click', sleepIncrease);

  const petNap = document.querySelector('#pet_nap');
  petNap.addEventListener('click', napIncrease);

  const feedChicken = document.querySelector('#pet_feed_chicken');
  feedChicken.addEventListener('click', chickenHunger);

  const feedTreat = document.querySelector('#pet_feed_treat');
  feedTreat.addEventListener('click', treatHunger);

  const feedFood = document.querySelector('#pet_feed_food');
  feedFood.addEventListener('click', dogFood);

  const playPetW = document.querySelector('#pet_play_walk');
  playPetW.addEventListener('click', petPlayWalk);

  const playPetF = document.querySelector('#pet_play_fetch');
  playPetF.addEventListener('click', petPlayFetch);

  const petDetails = document.querySelector('.petscreen');
  petDetails.addEventListener('mouseenter', showDetails);
  petDetails.addEventListener('mouseleave', removeDetails);

  const petName = document.querySelector('#pet_name');
  petName.addEventListener('input', updateText);
}

// Updating fields that say 'Pet' to User's Pet name
function updateText() {
  // Naming the pet
  const namePet = document.querySelector('#pet_name').value;
  pet.name = namePet;
}
setInterval(activityCounters, 100);
function activityCounters() {
  if (pet.exerciseCount < 0) {
    pet.exerciseCount = 0;
  }
  if (pet.feedCount < 0) {
    pet.exerciseCount = 0;
  }
}
// function lastFeed(e){
//     pet.lastFed = Math.round(e.timeStamp);
// }

// function lastSleep(e){
//     pet.lastSlept = Math.round(e.timeStamp);
// }


// window.addEventListener('load', eventHandlers);
function pageLoaded() {
  eventHandlers();
}

pageLoaded();
// Query selectors after every update
