var currentDay = document.getElementById("currentDay");
var timeBlock = document.getElementsByClassName("time-block");
var saveBtn = document.getElementsByClassName("saveBtn");
var hour = parseInt(moment().format('HH'));
var clearBtn = document.querySelector(".clearBtn");


console.log(hour);


// show current day, month and time
var today = moment().format("dddd, Do MMMM, h:mm:ss a");
currentDay.innerHTML = today;
/* $("#currentDay").text(today); */


// function that updates current time
var update = function() {
    currentDay.innerHTML = moment().format('dddd, Do MMMM, h:mm:ss a');
}
// set interval to update every second
setInterval(update, 1000);




document.addEventListener('DOMContentLoaded', function() {

    // load stored JSON if it exists otherwise an empty object 
    var values = JSON.parse(localStorage.getItem('description') || '{}');
    // delcare input fields
    var inputs = document.getElementsByName('description');


    //loops through all inputs
    for (let i = 0; i < inputs.length; i++) {

    var inputLoop = inputs[i];
    // store values or an empty string
    inputLoop.value = values[i] || '';
  
    console.log(inputLoop.value);

    
    //on change event on all inputs run function
    inputLoop.onchange = function() {
        // assign value to the object above
        values[i] = this.value;
        // store updated version of object
        localStorage.setItem('description', JSON.stringify(values));
        
      }
    }
    
});




/* 
// loop through button class
 for (i = 0; i < saveBtn.length; i++) {

// add a click event to all buttons using same class
 saveBtn[i].addEventListener('click', saveNote);  

}; 
 */

/* 
// this will get the value of each input
function saveNote () {
       
    var itemOne = document.getElementById("9").value;
    var itemTwo = document.getElementById("10").value;
    var itemThree = document.getElementById("11").value;
    var itemFour = document.getElementById("12").value;
    var itemFive = document.getElementById("13").value;
    var itemSix = document.getElementById("14").value;
    var itemSeven = document.getElementById("15").value;
    var itemEight = document.getElementById("16").value;
    var itemNine = document.getElementById("17").value;

// this will save the value of each input to local storage
    localStorage.setItem("#1", itemOne);
    localStorage.setItem("#2", itemTwo);
    localStorage.setItem("#3", itemThree);
    localStorage.setItem("#4", itemFour);
    localStorage.setItem("#5", itemFive);
    localStorage.setItem("#6", itemSix);
    localStorage.setItem("#7", itemSeven);
    localStorage.setItem("#8", itemEight);
    localStorage.setItem("#9", itemNine);


} */

/* 
// load each input from local storage
document.getElementById('9').setAttribute('value', localStorage.getItem('#1'));
document.getElementById('10').setAttribute('value', localStorage.getItem('#2'));
document.getElementById('11').setAttribute('value', localStorage.getItem('#3'));
document.getElementById('12').setAttribute('value', localStorage.getItem('#4'));
document.getElementById('13').setAttribute('value', localStorage.getItem('#5'));
document.getElementById('14').setAttribute('value', localStorage.getItem('#6'));
document.getElementById('15').setAttribute('value', localStorage.getItem('#7'));
document.getElementById('16').setAttribute('value', localStorage.getItem('#8'));
document.getElementById('17').setAttribute('value', localStorage.getItem('#9'));
 */







// colour coded inputs depending on the hour.
// target each input and run function
$("input").each(function () {
    // retrive number from id field and assign it to a variable
    var name = parseInt($(this).attr("id"));

    // if statememts to check input number against time and assign class
    if (name < hour) {
        $(this).addClass("past");
    }

    if (name > hour) {
        $(this).addClass("future")
    }

    if (name === hour) {
        $(this).addClass("present")
    }
    
});



// clear schedual button on click run clear storage function
clearBtn.addEventListener("click", clearStorage);

// show a prompt box, if yes clear storage and reload page, if no, close & dont clear
function clearStorage () {
    
    if (confirm("Are you sure?") === true) {
        localStorage.clear();
        location.reload();
    } 
    else {
        return;
    }
};

