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
    zombieHunt(10, 5); //CALL THIS FUNCTION

//Boolean

var getAmmoRun = function(numRifleShells, numPistolRounds) {

    if (numRifleShells && numPistolRounds < 100) {
        console.log (survivorName[1] + " decides to make an ammo run.");

    }  else {
        console.log ("They have decided they have enough ammo for now.");

    }
    return getAmmoRun;
};

        getAmmoRun(numRifleShells, numPistolRounds) //CALL THIS FUNCTION


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

 readyGo(3); //CALL THIS FUNCTION


// String

var climbTower = function() {

    var openDoor = "kicks";
    var hurryUp = "race";

    return climbTower;

};

    climbTower(); // CALL THIS FUNCTION