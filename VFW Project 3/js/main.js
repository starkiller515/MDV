/* Chris Conti
 VFW 1304
 Project 3 JavaScript*/

//Function waiting for DOM
window.addEventListener("DOMContentLoaded", function () {

    var titleList = ["--Choose a Title--", "Batman", "Suicide Squad", "Nightwing", "Dark Knight", "Batman and Robin", "Catwoman", "Detective Comics", "Batman Annual", "Batman, Inc."];

    //function to retrieve and ruturn element by ID
    function $(x) {
        return document.getElementById(x);

    };

    //Create select element with options

    function makeCategory() {
        var pageForms = document.getElementsByTagName("form"), // pageForms is an array of all the form tags
            selectLi = $("select"),
            makeSelect = document.createElement("select");

        makeSelect.setAttribute("id", "Title");
        for (var i = 0; i < titleList.length; i++){
            var makeOption = document.createElement("option");
            var optText = titleList[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    };



    //Find Radio button value
    function getRadio() {
        var radButton = document.forms[0].coverstyle;
        for (var i=0; i<radButton.length;  i++) {
            if (radButton[i].checked) {
                styleValue = radButton[i].value;
            };
        };
    };


    //Get checkbox value
    function getCheckbox() {
        if ($("Read").checked) {
            readValue = $('Read').value;
        }else{
            readValue = "No";
        };
    }
// turn form on and off

    function toggle(x){
        switch(x){
            case "on":
                $('newBook').style.display = "none";
                $('displayData').style.display = "none";
                $('clearForm').style.display = "inline";
                $('anotherOne').style.display = "inline";
                break;

            case "off":
                $('newBook').style.display = "block";
                $('displayData').style.display = "inline";
                $('clearForm').style.display = "inline";
                $('anotherOne').style.display = "none";
                $('books').style.display = "none";
                break;
            default:
                return false;
        };
    };

    //Dump form data into local storage

    function saveData(ranKey) {
        //random key number
        //console.log("save it enter");
        if(!ranKey){
            var id = Math.floor(Math.random()*120211);
        }else{
            id = ranKey;
        }
        getCheckbox();
        getRadio();
        var field={};

        field.title=["Book Title", $("Title").value];
        field.date=["Date Added:", $("date").value];
        field.booknumber=["Issue Number", $("booknumber").value];
        field.coverstyle=["Cover Style", styleValue];
        field.read=["Read", readValue];
        field.notes=["Notes", $("Notes").value];
        field.grade=["CCG Grading", $("slider").value];

        //Function to convert data into strings (stringify)

        localStorage.setItem(id, JSON.stringify(field));
        alert("Book Saved");
    };

    function retrieveData(){

        toggle("on");
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "books");
        var createList = document.createElement("ul");
        createDiv.appendChild(createList);
        document.body.appendChild(createDiv);
        $("books").style.display = "book";
        for(var i=0, j=localStorage.length; i < j; i++){
            var createLi = document.createElement("li");
            var newLinks = document.createElement("li");
            createList.appendChild(createLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var bookStats = JSON.parse(value);  //<--This line converts local store string into value
            var createSubList = document.createElement("ul");
            createList.appendChild(createSubList);
            for (var x in bookStats){
                var makeSubList = document.createElement("ul");
                createSubList.appendChild(makeSubList);
                var optSubText = bookStats[x][0]+" "+bookStats[x][1];
                makeSubList.innerHTML = optSubText;
                createSubList.appendChild(newLinks);
            };
            makeNewButtons(localStorage.key(i), newLinks); //Makes the new edit and delete buttons on each of the list entries

        };

    };


    //Will create edit and delete links for each stored item
    function makeNewButtons(key, newLinks){
        //add change single item link
        var changeLink = document.createElement("a");
        changeLink.href = "#";
        changeLink.key = key;
        var editText = "Edit Book";
        changeLink.addEventListener("click", changeBook);
        changeLink.innerHTML = editText;
        newLinks.appendChild(changeLink);

        //add line break
        var breakUp = document.createElement("br");
        newLinks.appendChild(breakUp);

        //Add delete single Item Link
        var deLink = document.createElement("a");
        deLink.href = "#";
        deLink.key = key;
        var delText = "Delete Book";
        deLink.addEventListener("click", delBook);
        deLink.innerHTML = delText;
        newLinks.appendChild(deLink);

    };

    function changeBook(){
        //pull book info for single item from local storage
        var info = localStorage.getItem(this.key);
        var field = JSON.parse(info);

        //Display Form
        toggle("off");

        //repop form fields with current info
        $("Title").value = field.title[1];
        $("date").value = field.date[1];
        $("booknumber").value = field.booknumber[1];
        var radCover = document.forms[0].coverstyle;
            for(var i = 0; i<radCover.length; i++){
                if(radCover[i].value == "Standard" && field.coverstyle[1] == "Standard"){
                     radCover[i].setAttribute("checked", "checked");
                } else if(radCover[i].value == "Variant" && field.coverstyle[1] == "Variant"){
                    radCover[i].setAttribute("checked", "checked");
                } else if(radCover[i].value == "Sketch Variant" && field.coverstyle[1] == "Sketch Variant"){
                    radCover[i].setAttribute("checked", "checked");
                } else if(radCover[i].value == "Hard Cover" && field.coverstyle[1] == "Hard Cover"){
                    radCover[i].setAttribute("checked", "checked");
                };
            };
            if(field.read[1] == "Yes"){
               $("read").setAttribute("checked", "checked");
            };
        $("Notes").value = field.notes[1];
        $("slider").value = field.grade[1];

        //Remove first event Listener from save book button
        submitData.removeEventListener("click", saveData);
        //Change 'Save Book' value to 'Edit'
        $("button").value = "Edit Book";
        var editButton = $("button");
        editButton.addEventListener("click", valCheck);
        editButton.key = this.key;        //saves key as a property of this var

    };

    function delBook(){
        var verify = confirm("Are you certain you want to remove this book?");
        if(verify){
            localStorage.removeItem(this.key);
            alert("Book removed")
            window.location.reload();
        }else{
            alert("Whew, that was close!")
        };
    };


    //Following will cleared local storage

    function clearLocalStor(){
        if(localStorage.length === 0){
            alert("You do not currently have any books stored");

        } else {

            var areUsure = confirm("Are you sure you want to delete your books?");
            if (areUsure){
                localStorage.clear();
                alert("All books have been cleared from memory");
                window.location.reload();
                return false;

            } else {

                alert("Your library is safe...for now");

            };
        };
    };

    function valCheck(f){
        var checkTitle = $('Title');
        var checkDate = $('date');
        var checkBooknumber = $('booknumber');

        //reset Error mess
        notRite.innerHTML = "";
            checkTitle.style.border = "1px solid black";
            checkDate.style.border = "1px solid black";
            checkBooknumber.style.border = "1px solid black";

        //Error Messages
        var errorArray = [];

        //Check for Title selection
        if(checkTitle.value === "--Choose a Title--"){
            var titleError = "Select a Book Title";
            checkTitle.style.border = "1px solid red";
            errorArray.push(titleError);
        }

         //Check for date input
        if(checkDate.value === ""){
            var dateError = "Select a Date";
            checkDate.style.border = "1px solid red";
            errorArray.push(dateError);
        }

        //Check for issue number
        if(checkBooknumber.value === ""){
            var numberError = "Enter an Issue Number";
            checkBooknumber.style.border = "1px solid red";
            errorArray.push(numberError);
        }

        // display errors
        if(errorArray.length >= 1){
            for(var i=0, j=errorArray.length; i < j; i++){
                var mess = document.createElement("li");
                mess.innerHTML = errorArray[i];
                notRite.appendChild(mess);
            }
            f.preventDefault();
            return false;
        }else{
            saveData(this.key);
        }




    };

    //Default Variables
    var readValue = "",
        styleValue = "",
        notRite = $("errors");

    var displayData = $('displayData');
    displayData.addEventListener("click", retrieveData);
    var clearForm = $('clearForm');
    clearForm.addEventListener("click", clearLocalStor);
    var submitData = $("button");
    submitData.addEventListener("click", valCheck);

    makeCategory();

});








