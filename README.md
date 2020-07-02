# RPG Builder

#### _Create a basic set of business logic for a RPG, 07/01/2020_

#### By _**Tristen Everett**_

## Description

This Project was my attempt at using automated testing through jest to create business logic for a basic RPG game that allows for the creation of a character with a custom name, and choice of attack or defense specialty. It also has the functionality to allow you to battle turn by turn against another character.

|Specifications|Example Input|Example Output|
|-|-|-|
|Create a new player Character with inputted name and stats of hpMax (max health), hpCurrent (current health), atk (attack), def (defense), spd (speed), xp (experience), lvl (level).|hero|hero = {name: "hero", hpMax: 0, hpCurrent: 0, atk: 0, def: 0, spd: 0, xp: 0, lvl: 1}|
|When the user clicks attack as their specialty it will add a number (90-110) to hpMax, a number (3-5) to atk, a number (1-3) to def, and a number (1.0-3.0) to spd; with 1 extra point to atk|click attack button|hero = {name: “hero”, hpMax: 103, hpCurrent: 0, atk: 5, def: 1, spd: 2.7, xp: 0, lvl: 1}|
|When the user clicks defense as their specialty it will add a number (90-110) to hpMax, a number (3-5) to atk, a number (1-3) to def, and a number (1.0-3.0) to spd; with 1 extra point to def |click defense button|hero = {name: “hero”, hpMax: 103, hpCurrent: 0, atk: 4, def: 2, spd: 2.7, xp: 0, lvl: 1}|
|-|-|-|
|At 100 experience the character will increase level by 1, atk and def by half the new level rounded down, and 5 times the new level to hpMax|Hero experience = 100|hero = {name: "hero", hpMax: 10, hpCurrent: 0, atk: 1, def: 1, spd: 0, xp: 0, lvl: 2}|
|When player defeats an opponent, it will add experience depending on level of opponent (10 times (opponent level divided by player level)) |Hero beats a level 2 opponent and gains 20 experience|hero = {name: "hero", hpMax: 0, hpCurrent: 0, atk: 0, def: 0, spd: 0, xp: 20, lvl: 1}|
|If experience is greater than 100 reduce experience by 100 and cause a level up event|Hero gains 100 experience|hero = {name: "hero", hpMax: 10, hpCurrent: 0, atk: 1, def: 1, spd: 0, xp: 0, lvl: 2}|
|-|-|-|
|Add a way to heal character a specified amount, up to their max health|Heal hero 50 health|hero = {name: “hero”, hpmax: 103, hpCurrent: 50, atk: 4, def: 2, spd: 2.7, xp: 0, lvl: 1}|
|Add a way to weaken a character by lowering atk and def by half their level rounded up and lower hpMax by 5 times their level|Weaken hero|hero = {name: "hero", hpMax: -5, hpCurrent: -5, atk: -1, def: -1, spd: 0, xp: 0, lvl: 1}|
|Create an object to act as an arena that will hold onto both the player and computer’s characters, and heal them to full health when they enter|let fight = new battle (hero, enemy)|fight = {player: hero, computer: enemy}|
|Create a way for the player to attack while the computer defends|Player attack|computer loses health|
|Create a way for the computer to attack while the player defends|Computer attack|player loses health|
|Add a way to cycle through one "turn" of combat where the faster character hits first and that can respond to the death of a character appropriately|fight.turn()|The faster character hits first then if the slower one is still alive they hit second|


## Setup/Installation Requirements

1. clone the repo
2. open the command line in the repo's root directory
3. run npm install
4. run npm test

## Technologies Used

* webpack
* node
* jest
* javascript

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**