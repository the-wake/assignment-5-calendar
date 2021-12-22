var hours = [
    document.getElementById("a9"),
    document.getElementById("a10"),
    document.getElementById("a11"),
    document.getElementById("p12"),
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("p4"),
    document.getElementById("p5"),
    document.getElementById("p6"),
];

var storedNotes = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

var saveBtn = $(".saveBtn");

var startHr = 9;
var endHr = 18;
var hrsLength = (endHr-startHr);

var currentHr = parseInt((moment().format("H")));

function setTime() {
    // Sets the variables for time and populates the page.
    var dayTime = moment().format("ddd, MMMM DD, YYYY - hh:mm a");
    var timestamp = document.getElementById("currentDay");
    timestamp.textContent=(dayTime);
};

function applyClass(i) {
    for (var i = 0; i < hours.length; i++) {
        // I set a data tag on each textArea with the hour, and compare that to the current hour to set the style.
        var hour = parseInt(hours[i].getAttribute("data-hour"));
        console.log(hours[i].getAttribute("data-hour"));
        console.log(currentHr);
        if (hour < currentHr) {
            hours[i].classList.add("past");
        } if (hour == currentHr) {
            hours[i].classList.add("present");
        } if (hour > currentHr) {
            hours[i].classList.add("future");
        }
    }
};

saveBtn.on('click', function(i) {
    for (var i = 0; i < hours.length; i++) {
        storedNotes[i]=(hours[i].value);
        localStorage.setItem("agendaItems",JSON.stringify(storedNotes));
    }
});

function initialize(i) {
    // Calls the setTime and applyClass functions on page load.
    setTime();
    applyClass();
    // Populate text areas from local storage.
    if(localStorage.getItem("agendaItems")) {
        for (var i = 0; i < hours.length; i++) {
            // First, run script pulling data from local storage to global variable.
            storedNotes[i] = JSON.parse(localStorage.getItem("agendaItems"))[i];
            // Then, populate fields from global variable.
            if (storedNotes[i]) {
                hours[i].value = storedNotes[i];
            }
        }
    }
};

// Creates a 1-per-second interval for updating the display time and dynamically applying formatting classes.
setInterval(setTime, 1000);
setInterval(applyClass, 1000);

initialize();

// Stretch goals
    // Add a button to clear all fields.
    // Add an event listener for enter keyup that runs the saveBtn script.
    // Think about how this would be done fully iteratively.
