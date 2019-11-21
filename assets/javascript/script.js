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

/////
// variables
/////

const m = moment();


/////
// functions
/////

// function using moment.js to call in the date for the top of the page
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

// dummy function that allows us to listen for clicks, knows which row the button is connected
// to, and then saves that row to localStorage

// function to hear what is saved in the slot and runs the dummy function to save it

// function that knows what the current time is and highlights the current hour in green
// also knows then to mark the next hour purple, updating CSS classes dynamically

// testing out the box
// var words = document.querySelector("#test").value;
var words;


$("#save").click(function(){
    console.log("I hear a click");
    console.log($("#test").val());

    //may have issues with pulling it back out as it appears
    //to be an object when being inspected
    //so to combat that JSON stringify it
    localStorage.setItem("test words", $("#test").val());
});





