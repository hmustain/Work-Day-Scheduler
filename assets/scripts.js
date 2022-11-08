// going to use moment.js to add the current date and time to the top of the page
// https://momentjs.com/docs/#/displaying/
// went back to activity 25 and 26 for reference
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#current-time").text(time);

//need time to update dynamically instead of on page refresh
function currentTime() {
    time = setInterval("#current-time", 1000);
}

currentTime();



