var timeLimitBackend;
var timeLeft = 0;

timeLimitBackend = setInterval(timeLimitCountdown, 1000)

function timeLimitCountdown (){
    if(timeLeft < 5400) {
        timeLeft++;
    }
    else{
        timeLeft = 0;
        alert("recomended break")
    }
}