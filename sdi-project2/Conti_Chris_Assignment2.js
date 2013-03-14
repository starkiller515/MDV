//alert("JavaScript works!");

/* Chris Conti
    Project 2
    SDI 1303
    Loops, arrays and functions
    */

//Global variables
var safeHouse = "prison";
var numZombies = 20;
var survivorName = ["Rick", "Daryl", "Shane"];

//Story intro
console.log(survivorName[0] + ", " + survivorName[1] + " and " + survivorName[2] + " are survivors of the zombie apocalypse.")
console.log("They are holed up in an abandoned " + safeHouse + ".")

//Procedure
var zombieHunt = function(numberZombies, numberDoors) {

    if (numberZombies > numberDoors) {
        console.log(survivorName[0] + "goes to start clearing the walkers out.");

    } else {
        console.log(survivorName[1] + "scouts from the tower.");
    }
    return  numberZombies, numberDoors;
}




