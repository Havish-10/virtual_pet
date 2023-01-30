// All Pet attributes and variables including pet status
let pet = {
    name,
    hunger: 100,
    happiness: 100,
    sleep: 100,
    nausea: 0,
    boredom: 0,
    deathStatus: false,
    start: false
}

// Hunger decreases overtime, Decreases faster over time.
setInterval(hungerDecrease, 1000);
function hungerDecrease(){
    const hungerVal = document.querySelector('#hunger');
    if (pet.start === true){
        if (pet.hunger > 0 && pet.hunger <= 30){
            pet.hunger = pet.hunger - Math.round(Math.random()*15);
            // hungerVal.textContent = `Hunger: ${pet.hunger}`;
            hungerVal.value = pet.hunger;
        }
        if (pet.hunger <= 60 && pet.hunger > 30){
            pet.hunger = pet.hunger - Math.round(Math.random()*7);
            // hungerVal.textContent = `Hunger: ${pet.hunger}`;
            hungerVal.value = pet.hunger;
        }
        if (pet.hunger <= 100 && pet.hunger > 60){
            pet.hunger = pet.hunger - Math.round(Math.random()*5);
            // hungerVal.textContent = `Hunger: ${pet.hunger}`;
            hungerVal.value = pet.hunger;
        }
        if (pet.hunger <= 0){
            pet.hunger = 0
            pet.deathStatus = true;
        }
        if (pet.hunger >= 100){
            pet.hunger = 100;
        }
    }
};

// Happiness decreases over time, Decreases faster over time.
setInterval(happinessDecrease, 5000);
function happinessDecrease(){
    const happinessVal = document.querySelector('#happiness')

    if (pet.start === true){
        if (pet.happiness > 0 && pet.happiness <= 30){
            pet.happiness = pet.happiness - Math.round(Math.random()*15);
            happinessVal.value = pet.happiness;
        }
        if (pet.happiness <= 60 && pet.happiness > 30){
            pet.happiness = pet.happiness - Math.round(Math.random()*7);
            happinessVal.value = pet.happiness;
        }
        if (pet.happiness <= 100 && pet.happiness > 60){
            pet.happiness = pet.happiness - Math.round(Math.random()*5);
            happinessVal.value = pet.happiness;
        }
        // if (pet.happiness <= 0){
        //     pet.happiness = 0
        //     pet.deathStatus = true;
        // }
    }

};

// Sleep decreases over time, Decreases faster over time.
setInterval(sleepDecrease, 20000);
function sleepDecrease(){
    const sleepVal = document.querySelector('#sleep');

    if (pet.start === true){
        if (pet.sleep > 0 && pet.sleep <= 30){
            pet.sleep = pet.sleep - Math.round(Math.random()*15);
            sleepVal.value = pet.sleep;
        }
        if (pet.sleep <= 60 && pet.sleep > 30){
            pet.sleep = pet.sleep - Math.round(Math.random()*7);
            sleepVal.value = pet.sleep;
        }
        if (pet.sleep <= 100 && pet.sleep > 60){
            pet.sleep = pet.sleep - Math.round(Math.random()*5);
            sleepVal.value = pet.sleep;
        }
        // if (pet.sleep <= 0){
        //     pet.sleep = 0
        //     pet.deathStatus = true;
        // }
    }
};

// Boredom increases over time
setInterval(boredomIncrease, 30000)
function boredomIncrease(){
    const petStatus = document.querySelector("#boredomtext");
    const boredomVal = document.querySelector("#boredom");

    if (pet.start === true){
        if (pet.boredom >= 0 && pet.boredom < 30){
            pet.boredom = pet.boredom + Math.round(Math.random()*5);
            petStatus.textContent = `${pet.name} is doing AMAZING!`
            boredomVal.value = pet.boredom;
        }
        if (pet.boredom >= 30  && pet.boredom < 75){
            pet.boredom = pet.boredom + Math.round(Math.random()*10);
            petStatus.textContent = `${pet.name} is getting bored!`
            boredomVal.value = pet.boredom;
        }
        if (pet.boredom >= 75  && pet.boredom < 100){
            pet.boredom = pet.boredom + Math.round(Math.random()*15);
            petStatus.textContent = `${pet.name} is lonely! Shame on you!`
            boredomVal.value = pet.boredom;
        }
        if (pet.boredom >= 100){
            pet.boredom = 100;
            petStatus.textContent = `${pet.name} is lonely! Shame on you!`
            boredomVal.value = pet.boredom;
        }
}
}

// Feeding the pet
function chickenHunger(){
    if (pet.hunger < 10){
        pet.hunger = pet.hunger + Math.round((Math.random()*20))
        pet.happiness = pet.happiness + Math.round((Math.random()*15))
    }
    if (pet.hunger < 70 && pet.hunger > 30){
        pet.hunger = pet.hunger + Math.round((Math.random()*12))
        pet.happiness = pet.happiness + Math.round((Math.random()*10))
    }
    if (pet.hunger >= 70){
        pet.hunger = pet.hunger + Math.round((Math.random()*7))
        pet.happiness = pet.happiness + Math.round((Math.random()*5))
    }
}

function treatHunger(){
    if (pet.happiness < 10){
        pet.happiness = pet.happiness + Math.round((Math.random()*15))
        pet.hunger = pet.hunger + Math.round((Math.random()*10))
    }
    if (pet.happiness < 70 && pet.happiness > 30){
        pet.happiness = pet.happiness + Math.round((Math.random()*11))
        pet.hunger = pet.hunger + Math.round((Math.random()*7))
    }
    if (pet.happiness >= 70){
        pet.happiness = pet.happiness + Math.round((Math.random()*8))
        pet.hunger = pet.hunger + Math.round((Math.random()*4))
    }
}

function dogFood(){
    if (pet.hunger < 10){
        pet.hunger = pet.hunger + Math.round((Math.random()*25))
    }
    if (pet.hunger < 70 && pet.hunger > 30){
        pet.hunger = pet.hunger + Math.round((Math.random()*15))
    }
    if (pet.hunger >= 70){
        pet.hunger = pet.hunger + Math.round((Math.random()*12))
    }
}


// Playing with the Pet
function petPlayWalk(){
    
}

// Event Handling
function eventHandlers(){
    const petName = document.querySelector("#pet_name");
    petName.addEventListener('input', updateText)
    
    const lastSleep = document.querySelector('#pet_sleep');
    lastSleep.addEventListener('click', lastSleep);

    const feedChicken = document.querySelector('#pet_feed_chicken');
    feedChicken.addEventListener('click', chickenHunger);

    const feedTreat = document.querySelector('#pet_feed_treat');
    feedTreat.addEventListener('click', treatHunger);
    
    const feedFood = document.querySelector("#pet_feed_food");
    feedFood.addEventListener('click', dogFood);

    const playPet = document.querySelectorAll("pet_play_walk");
    playPet.addEventListener('click', petPlayWalk);
}

// Updating fields that say 'Pet' to User's Pet name
function updateText(){
    // Naming the pet
    const namePet = document.querySelector("#pet_name").value;
    pet.name = namePet;

    // Updating buttons to say the pets name

    const petPlay = document.querySelector("#pet_play");
    petPlay.textContent = `Play with ${pet.name}?`; 

}

function lastFeed(e){
    pet.lastFed = Math.round(e.timeStamp);
}

function lastSleep(e){
    pet.lastSlept = Math.round(e.timeStamp);
}

window.addEventListener('load', eventHandlers);

// Query selectors after every update
