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
        else {
        return false;
        console.log("Please enter a valid phone number");
        } ;
    };

    //Problem 2
    //Checks string to see if it is a URL



    var checkURL = function (val){



        //(possibleURL.indexOf("http://"));

        if(val.indexOf("http://")=="0"  || val.indexOf("https://")=="0"){
        return true;
        console.log("you have a URL!") }
        else
        {return false;
        console.log("please enter a valid URL");
        }



    };












    return {

        "checkNumber": checkNumber,
        "checkURL": checkURL

    }








}

   var newLib = new myLibrary();

   console.log("checkNumber: " + newLib.checkNumber("&16-333-3333"));
   console.log("checkURL: " + newLib.checkURL("https://bestbuy.com"));






