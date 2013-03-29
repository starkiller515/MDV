//alert("JavaScript works!");

/*Chris Conti
SDI 1303
Project 4
Code Library
 */






var myLibrary = function(){

    //Problem 1
    //Checks to see if a string follows (XXX-XXX-XXXX) number pattern
    var checkNumber = function (val) {

        if(val.charAt(3)=="-" &&
            val.charAt(7)=="-" &&
            !isNaN(val.substr(0,2 )) &&
            !isNaN(val.substr(4,3 )) &&
            !isNaN(val.substr(8,11))
            )
        return true;
        else
        alert("Please enter a valid phone number");
    }

    return {

        "checkNumber": checkNumber

    }








}

   var newLib = new myLibrary();

   console.log("checkNumber: " + newLib.checkNumber("k16-333-3333"));







