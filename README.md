# Tomagatchi Pet

Tomagatchi Pet Coursework UOP 2023

## Experience

* All interactions with the pet generate XP that levels up the pet.
* Pet unlocks different accessories depending on the current level it is.

## Feeding

* Decreases at a constant rate but is affected by other Pet Stats.
* `Treat` button and `Chicken` button that gives Pet Hunger at the cost of Cleanliness and Sleepiness.

## Sleeping

* Decreases at a constant rate but is affected by other Pet Stats.
* `Nap` button and `Sleep` button that gives Pet Hunger at the cost of Hunger.

## Cleaning

* Decreases at a constant rate but is affected by other Pet Stats.
* `Clean` button that increases pet Cleanliness stat.

## Happiness

* Happiness stat is an average value of the three respective stats.
* Can only be increased by increasing the other 3 values.

## Playing

* `Walk` button that increases Score and gives XP, Has a cooldown for next use.
* `Fetch` button that has a 50/50 chance of item being retrieved, Item being retrieved gives more happiness and score.

## Death

* Pet can die if Sleep or Hunger reaches zero.
* Upon death user will be given a summary of the Pet including how long the pet has survived for.

## Pet Select

* Users can own multiple pets at once and have the ability to switch between them.


## Future Features

* Time spent away will decrease pet stats over time.
* Additional Accessories for the Pet
* Minigames Update that will include a better assortment of such, with actual playability.
* The Ability to select and scroll through different pet varieties
* Improved death screen.

## Storage

* Users are saved with local storage
* The menu system works with a simple Key and fetch path, A key is given that represents each pet and when pet is selected, Key is retrieved.

## `http://127.0.0.1:8080/pet` will take the user to the LAST LOADED pet, If no pet exists it will create a new one.
## `http://127.0.0.1:8080/` will take the user to the MENU page to select a pet, if no pets exist there is a NEW PET button
