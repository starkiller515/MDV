//alert("JavaScript works!");

/* Chris Conti
    Project 3
    SDI 1303
    Flow Chart Building and Objects
    */

//json data

var survivors = [

    { "name": "Rick", "weapon": "Colt Python", "job": "cop"},
    { "name": "Daryl", "weapon": "crossbow", "job": "hunter"},
    { "name": "Shane", "weapon": "shotgun", "job": "cop"}
];

//object

var truck = {

    "make" : "Ford",
    "style" : "pickup",
    "totalTires" : 4,
    "flatTires" : 1,
    "wheels" : function (){ //Method: Accessor
        var goodWheels = this.totalTires - this.flatTires;
        return goodWheels;
    }, //end Method
    "repairTires" : function(noFlats){ //Method: Mutator
        this.flatTires = noFlats;
    }
}; //end Object


//Global variables
var safeHouse = "prison";
var numPistolRounds = 40;
var numRifleShells = 50;
var survivorName = ["Rick", "Daryl", "Shane"];


//Procedure
var zombieHunt = function (numberZombies, numberDoors) {

    if (numberZombies > numberDoors) {
        console.log (survivorName[0] + " goes to start clearing the walkers out.");

    } else {
        console.log (survivorName[1] + "scouts from the tower.");
    }

};


//Boolean

var getAmmoRun = function(numRifleShells, numPistolRounds) {

    if (numRifleShells && numPistolRounds < 100) {
        console.log (survivorName[1] + " decides to make an ammo run.");

    }  else {
        console.log ("They have decided they have enough ammo for now.");

    }
    return getAmmoRun;
};




 // Number

var readyGo = function(count) {

    while (count > 0){

        console.log (count + "!");

        count = count -1;

        if (count > 0){
            console.log (count + "!");
        } else {
            console.log ("GO!");
        };
    }
    return count;
};




// String

var climbTower = function() {

    var openDoor = "kicks";
    var hurryUp = "race";

    return climbTower;

};






//Main Story

console.log (survivorName[0] + ", " + survivorName[1] + " and " + survivorName[2] + " are survivors of the zombie apocalypse.");
console.log ("They are holed up in an abandoned " + safeHouse + ".");
console.log ("The dead are starting to gather outside.");

zombieHunt(10, 5); //CALL THIS FUNCTION

console.log ("After a while, the ammo supplies begin to run low, and the survivors need to make a decision.");

getAmmoRun(numRifleShells, numPistolRounds) //CALL THIS FUNCTION

console.log (survivorName[1] + " and " + survivorName[2] + " go to the " + safeHouse + " gate and start to countdown to when it is safe for " + survivorName[1] + " to run out.");
console.log (survivorName[2] + " looks at " + survivorName[1] + " and says \"I will count down from 3, then run!\"");

readyGo(3); //CALL THIS FUNCTION

console.log (survivorName[1] + " runs out the gate, dodging walkers as he heads away from the " + safeHouse + ".");

climbTower(); // CALL THIS FUNCTION

console.log (survivorName[0] + " and " + survivorName[2] + " watch as Daryl safely passes the horde and comes upon an old " + truck.make + ".");
console.log ("He notices that there is a flat tire.");

// Boolean Conditionals with nested
if (truck.totalTires === 4) {
    //what happens if true
    if (truck.flatTires >= 1) {
        truck.repairTires(0);
        console.log("Daryl repairs the flat tire, and drives it off.");
    }  else {
        if (truck.flatTires < 1)
            console.log("Daryl climbs in and speeds away.");
    }
} else {
    if (truck.totalTires <= 4) {
        //what happens if false
        console.log("Daryl continues walking, leaving the truck behind.");

    };
};