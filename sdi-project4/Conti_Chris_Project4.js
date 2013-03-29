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





        if(val.indexOf("http://")=="0"  || val.indexOf("https://")=="0"){
        return true;
        console.log("you have a URL!") }
        else
        {return false;
        console.log("please enter a valid URL");
        }



    };

     //Problem 3
    //Formats a Number to follow a certain number of decimal places

    var makeMoney = function (val){

        if (val == !isNaN){
            val.toFixed(2);
        };
    };


     //Problem 4
    //Checks for valid email format

    var checkEmail = function (val){

       if(val.indexOf("@")=="-1" && val.indexOf(".")=="-1"){
           return false;

       } else {
        if(val.indexOf("@")>val.indexOf(".")){
            return false;
        } else {
            return true;
        };


       };


    };


    // Problem 5
    //Fuzzy Number

    var strNum = function (val){


            var val= 75;

            var percentage= 50;

            var variance= (val*.50);
            var min = val-variance;
            var max = val+variance
            if( (val-variance)<val<(val+variance))
            { console.log("Your orginal number is "+ val + " and will match any number between "+min+" and "+ max+" with a "+percentage+"% variance");}




    };






    return {

        "checkNumber": checkNumber,
        "checkURL": checkURL,
        "makeMoney": makeMoney,
        "checkEmail": checkEmail,
        "strNum": strNum

    }








}

   var newLib = new myLibrary();

   console.log("checkNumber: " + newLib.checkNumber("&16-333-3333"));
   console.log("checkURL: " + newLib.checkURL("https://bestbuy.com"));
   console.log("makeMoney: " + newLib.makeMoney("322.0001"));
   console.log("checkEmail: " + newLib.checkEmail("me@me.com"));




