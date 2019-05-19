$(document).ready(function() {
$("#start").on("click", start);
$("#finish").on("click", stop);


var intervalId;
var clockRunning = false;
var time = 90;

// display timer 

$("#timer").text("01:30");

//timer to count down time remaining in game

function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

function count() {
    time--;
    var converted = timeConverter(time);
    console.log(converted);
    $("#timer").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

  function stop() {

    clearInterval(intervalId);
    clockRunning = false;
  }





//end of game should display questions correct/incorrect 


// question and answer system



//submit button

});