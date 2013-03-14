//alert("JavaScript works!");

/* Chris Conti
    Project 2
    SDI 1303
    Loops, arrays and functions
    */

//Global variables
var safeHouse = "prison";
var numPistolRounds = 40;
var numRifleShells = 50;
var numWalkers = [10, 20, 30, 40, 50];
var survivorName = ["Rick", "Daryl", "Shane"];

//Story intro
console.log (survivorName[0] + ", " + survivorName[1] + " and " + survivorName[2] + " are survivors of the zombie apocalypse.")
console.log ("They are holed up in an abandoned " + safeHouse + ".")
console.log ("The dead are starting to gather outside.")

//Procedure
var zombieHunt = function (numberZombies, numberDoors) {

    if (numberZombies > numberDoors) {
        console.log (survivorName[0] + " goes to start clearing the walkers out.");

    } else {
        console.log (survivorName[1] + "scouts from the tower.");
    }

};
    zombieHunt(10, 5);

//Boolean

var getAmmoRun = function(numRifleShells, numPistolRounds) {

    if (numRifleShells && numPistolRounds < 100) {
        console.log (survivorName[1] + " decides to make an ammo run.");

    }  else {
        console.log ("They have decided they have enough ammo for now.");

    }
    return getAmmoRun
};

      getAmmoRun(numRifleShells, numPistolRounds)

//Number

console.log (survivorName[1] + " and " + survivorName[2] + " go to the " + safeHouse + " gate and start to countdown to when it is safe for " + survivorName[1] + " to run out.");
console.log (survivorName[2] + " looks at " + survivorName[1] + " and says \"I will count down from 3, then run!\"");
var count = 3;

while (count > 0){

    console.log (count + "!");

    count = count - 1;

    if (count > 0){
        console.log (count + "!");
    } else {
        console.log ("GO!");

    }
};

console.log (survivorName[1] + " runs out the gate, dodging walkers as he heads away from the " + safeHouse + ".");


