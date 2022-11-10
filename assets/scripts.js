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
setInterval(function () {
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#current-time").text(time);
}, 1000);

// for tomorrow
// 1st try to see if we can get the first time block to change colors
// once we can figure out how to get the 1st one to change colors then lets see if we can create a loop to loop through the rest

var eightHr = $('.time-block')[0];
var ninthHr = $('.time-block')[1];
var tenthHr = $('.time-block')[2];
var eleventhHr = $('.time-block')[3];
var twelfthHr = $('.time-block')[4];
var thirteenthHr = $('.time-block')[5];
var fourteenthHr = $('.time-block')[6];
var fifteenthHr = $('.time-block')[7];
var sixteenthHr = $('.time-block')[8];
var seventeenthHr = $('.time-block')[9];

var hours = [eightHr, ninthHr, tenthHr, eleventhHr, twelfthHr, thirteenthHr, fourteenthHr, fifteenthHr, sixteenthHr, seventeenthHr];

// variable for id for each hour
var id8 = $(eightHr).attr('id');
var id9 = $(ninthHr).attr('id');
var id10 = $(tenthHr).attr('id');
var id11 = $(eleventhHr).attr('id');
var id12 = $(twelfthHr).attr('id');
var id13 = $(thirteenthHr).attr('id');
var id14 = $(fourteenthHr).attr('id');
var id15 = $(fifteenthHr).attr('id');
var id16 = $(sixteenthHr).attr('id');
var id17 = $(seventeenthHr).attr('id');
// creating a new variable to just show the number instead of the word hour. this way i can start comparing each variable to current time
var hour8 = id8.split('-')[1];
var hour9 = id9.split('-')[1];
var hour10 = id10.split('-')[1];
var hour11 = id11.split('-')[1];
var hour12 = id12.split('-')[1];
var hour13 = id13.split('-')[1];
var hour14 = id14.split('-')[1];
var hour15 = id15.split('-')[1];
var hour16 = id16.split('-')[1];
var hour17 = id17.split('-')[1];

// create an array
var timeBlocks = [hour8,
    hour9,
    hour10,
    hour11,
    hour12,
    hour13,
    hour14,
    hour15,
    hour16,
    hour17];

// create for loop with if else statements inside using [i] to index through each line in the array

function timeUpdate() {
    for (let i = 0; i < timeBlocks.length; i++) {
        if (timeBlocks[i] < currentHour) {
            $(hours[i]).addClass("past");
            $(hours[i]).removeClass("present");
            $(hours[i]).removeClass("future");

        }
        else if (timeBlocks[i] == currentHour) {
            $(hours[i]).removeClass("past");
            $(hours[i]).addClass("present");
            $(hours[i]).removeClass("future");
        }
        else {
            $(hours[i]).removeClass("past");
            $(hours[i]).removeClass("present");
            $(hours[i]).addClass("future");
        }
    }
};
timeUpdate();

// when adding using add.class jquery already know it's a class so do not have to put the ".past" instead put "past"

// everything below here is console.log's that helped me determine if my variables were working.

console.log("the time for variable hour is " + hour8);
// ^ expected value is "8"
console.log("the time for variable hour is " + hour9);
console.log("the time for variable hour is " + hour10);
console.log("the time for variable hour is " + hour11);
console.log("the time for variable hour is " + hour12);
console.log("the time for variable hour is " + hour13);
console.log("the time for variable hour is " + hour14);
console.log("the time for variable hour is " + hour15);
console.log("the time for variable hour is " + hour16);
console.log("the time for variable hour is " + hour17);

// console log timeBlocks array
console.log("the value of time blocks are " + timeBlocks);

console.log(timeBlocks);

if (timeBlocks < currentHour) {
    console.log("true");
} else { console.log("false") };

if (hour8 < currentHour) {
    console.log("true");
} else { console.log("false") };

for (let i = 0; i < timeBlocks.length; i++) {
    console.log(timeBlocks[i]);

}

for (let i = 0; i < timeBlocks.length; i++) {
    if (timeBlocks[i] < currentHour) {
        console.log("True!")
    } else (console.log("False!"))
};

console.log(hours);

// console.log("timeBlock: type", typeof (timeBlocks[i]))

