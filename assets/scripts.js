// going to use moment.js to add the current date and time to the top of the page
// https://momentjs.com/docs/#/displaying/
// went back to activity 25 and 26 for reference
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#current-time").text(time);

var currentHour = moment().hour();
// go find docs on how to convert from military time to standard
console.log("the current hours is " + currentHour);

//need time to update dynamically instead of on page refresh
// asked bcs helped me here
setInterval(function(){
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#current-time").text(time);
    }, 1000);

// for tomorrow
// 1st try to see if we can get the first time block to change colors
// once we can figure out how to get the 1st one to change colors then lets see if we can create a loop to loop through the rest
var eightHr = $('.time-block')[0];
var id = $(eightHr).attr('id');

var hour = id.split('-')[1];

if (hour < currentHour) {
      console.log("true");
} else { console.log("false")};

$(function() {
if (hour < currentHour) {
    $(hour).addClass(".past");
    console.log("my function is not working");
}});

// expected thing for this to do would be if hour (which is 8 is less than current hour which is 11 is true then make the background color for that item black why is this not working?)

console.log(hour);
// ^ expected value is "8"

// console.log(eightHr.attr('id'));
