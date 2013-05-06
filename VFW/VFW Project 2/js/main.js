/* Chris Conti
 VFW 1304
 Project 2 JavaScript*/

//Function waiting for DOM
window.addEventListener("DOMContentLoaded", function () {

    var titleList = ["Batman", "Suicide Squad", "Nightwing", "Dark Knight", "Batman and Robin", "Catwoman", "Detective Comics", "Batman Annual", "Batman, Inc."];

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
                $('items').style.display = "none";
                break;
            default:
                return false;
        };
    };

    //Dump form data into local storage

    function saveData() {
        //random key number
        console.log("save it enter");
        var id = Math.floor(Math.random()*120211);
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
            };

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

    //Default Variables
    var readValue = "",
        styleValue = "";

    var displayData = $('displayData');
    displayData.addEventListener("click", retrieveData);
    var clearForm = $('clearForm');
    clearForm.addEventListener("click", clearLocalStor);
    var submitData = $('saveData');
    submitData.addEventListener("click", saveData);

    makeCategory();

});








