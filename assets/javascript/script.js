/////
// variables
/////


// calling in moment to be used in several places
const m = moment();

// variables for on save button click 
var words;
var hourInfo;

// variables for color coding
var timeTest = $(".hour").html();
var realTime = m.format("hh:mm a");
console.log("Time test" + timeTest);
console.log("Current Time" + realTime);


/////
// display 
/////


// Near the top of the calendar, the application should display the current day.
// moment(specific format that we desire)
// grab local date of the users machine, and spit it out in the
// format that we desire
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));


/////
// functions
/////


// each hour should be color coded to reflect whether the time slot is in the past, the present, 
// or the future. This will change depending on the time of day.
// * App is aware of what time it is
// * if line is current hour it is green and the line after it is purple
// * else it is a light lavendar

// if that knows what the current time is and highlights the current hour
// if current hour, else if current hour +1, else past hour color
// is ran on each page refresh and each save?

// THIS FUNCTION IS NOT WORKING THE WAY I THOUGHT IT WOULD
// ADDITIONALLY IT NEEDS TO BE CALLED ON DOCUMENT LOAD AND
// ALSO BE AVAILABLE TO BE CALLED ON SAVE
$(document).ready( function() {
    $(".input").each(function () {
    //for each of the hours unique positions apply below
    // right now it's applying to all
        if (realTime > timeTest) {
            $(".input").toggleClass("past");
            console.log("You're on the right path");
        } else if (realTime < timeTest) {
            $(".input").toggleClass("future");
        } else {
            $(".input").toggleClass("present");
        }
    });
    
    // run FUNCTION SAVEWORDS?
});

// FUNCTION SAVEWORDS
// Need to change these into a dummy function that refreshes each 
// slot with it's currently stored information
// var saveWords = JSON.parse(localStorage.getItem("9 am"));
// $("#nineAm").val("");
// $("#nineAm").val(saveWords);
// dummy function that then is called by the first dummy function 
// and prints the localStorage
// informaiton to the page

// function that listen for clicks, knows which row the button is connected
// to, and then runs the dummy function to save the information
// dummy function that allows us to save that row to localStorag
// happens on click of any .saveBtn
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));

    // run FUNCTION SAVEWORDS
    // run FUNCTION COLORING
})











