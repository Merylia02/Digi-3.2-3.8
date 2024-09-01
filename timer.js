var hours;
var minutes;
var seconds;

var outputHour = document.getElementById("outputHour");
var outputMin = document.getElementById("outputMin");
var outputSec = document.getElementById("outputSec");

var start = document.getElementById("start");
var stop = document.getElementById("stop");

var output = document.getElementById("output");
var input = document.getElementById("timerID");

var timerBackEnd;

function SetTimerValue() {
    hours = Number(document.getElementById("hours").value);
    minutes = Number(document.getElementById("minutes").value);
    seconds = Number(document.getElementById("seconds").value);

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

}

function StartTimer() {
    
    if(hours > 0 || minutes > 0 || seconds > 0 ){
        alert("timer resets upon switching pages & I'd advise not to set a timer longer than 1:30:00");
        output.style.display = "flex";

        outputHour.innerHTML = hours;
        outputMin.innerHTML = minutes;
        outputSec.innerHTML = seconds;

        start.style.display = "none";
        stop.style.display = "initial";

        // starts countdown
        timerBackEnd = setInterval(timerCountdown, 1000)

        //delete input box
        input.style.display = "none";
    }
    else{
        alert("Enter time here.")
    }
}
// The countdown of the timer
function timerCountdown(){

    if(seconds > 0){
        seconds--;
        outputSec.innerHTML = seconds;
    }
    else if(minutes > 0){
            minutes--;
            outputMin.innerHTML = minutes

            seconds = 59
            outputSec.innerHTML = seconds
        }
        else if(hours > 0){
                hours--;
                outputHour.innerHTML = hours

                minutes = 59
                outputMin.innerHTML = minutes

                seconds = 59
                outputSec.innerHTML = seconds
            }
            else{
                //times up result
                stopTimer();
                document.getElementById("hours").value = "00";
                document.getElementById("minutes").value = "00";
                document.getElementById("seconds").value = "00";
                //here sound
                new Audio('./audio/bell-172780.mp3').play();
                return;
            }
}


function stopTimer(){
    clearInterval(timerBackEnd);

    start.style.display = "initial";
    stop.style.display = "none";

    //show input again
    input.style.display = "flex";
    output.style.display = "none";
}

function cancelTimer(){
    stopTimer()
    document.getElementById("hours").value = "00";
    document.getElementById("minutes").value = "00";
    document.getElementById("seconds").value = "00";

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";

    outputHour.innerHTML = "00";
    outputMin.innerHTML = "00";
    outputSec.innerHTML = "00";

}
