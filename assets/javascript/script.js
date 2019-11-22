/////
// requirements
/////

// Near the top of the calendar, the application should display the current day.
    // https://momentjs.com/guides/
    // moment(specific format that we desire)
    // grab local time of the users machine, and spit it out in the
    // format that we desire


// The app should display standard business hours (9 a.m. to 5 p.m.). 
// Each time slot should represent one hour and contain the following:
// * The time
// * A field to hold user input
// * A save button (preferably gold in color)
// Clicking on the save button will store the time and user input in `localStorage`.

// each hour should be color coded to reflect whether the time slot is in the past, the present, 
// or the future. This will change depending on the time of day.
// * App is aware of what time it is
// * if line is current hour it is green and the line after it is purple
// * else it is a light lavendar

// testing out the box
// var words;
// var saveWords = JSON.parse(localStorage.getItem("test words"));
// console.log("saveWords: " + saveWords);
// $("#test").empty();
// $("#test").val(saveWords);
// $("#save").click(function(){
//     console.log("I hear a click");
//     console.log($("#test").val());
//     words = $("#test").val();
//     localStorage.setItem("test words", JSON.stringify(words));
//     console.log("words :" + words);
//     saveWords = JSON.parse(localStorage.getItem("test words"));
//     console.log(saveWords);
// });

/////
// jumbotron area
/////

// variables

const m = moment();

// functions

// function using moment.js to call in the date for the top of the page
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

/////
// dayplanner area
/////

// variables and what ifs

var words;
var saveWords = JSON.parse(localStorage.getItem("9 am"));
$("#nineAm").val("");
$("#nineAm").val(saveWords);

// if that knows what the current time is and highlights the current hour
// if current hour, else if current hour +1, else past hour color
// is ran on each page refresh and each save?


// functions

$(".saveBtn").click(function(){
    words = $("#nineAm").val();
    localStorage.setItem("9 am", JSON.stringify(words));
    saveWords = JSON.parse(localStorage.getItem("#nineAm"));
});

// dummy function that allows us to save that row to localStorage

// function that listen for clicks, knows which row the button is connected
// to, and then runs the dummy function to save the information

// dummy function that then is called by the first dummy function and prints the localStorage
// informaiton to the page







