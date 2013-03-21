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
