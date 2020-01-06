# Star Wars RPG

## Overview

Depoloyed at:  https://lukeevangraham.github.io/Star-Wars-RPG/

In this assignment, I created a fun and interactive game for web browsers. This time, the app dynamically updates HTML pages with the jQuery library.

## Using the app


   * When the game starts, the player chooses a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies are moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy moves to a `defender area`.

   * The player is now  able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent loses `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character loses some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.