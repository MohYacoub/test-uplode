const timer = document.getElementById("mar");
// const timer = document.getElementsByTagName("h1");

// console.log(timer)
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;


function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        document.getElementById('togle').innerHTML = " <button id='btn-play' onclick='stopTimer()'><i class='fas fa-pause fa-5x'></i> </button>";
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        document.getElementById('togle').innerHTML = " <button id='btn-play' onclick='startTimer()'><i class='fas fa-play fa-5x'></i> </button>";

    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    stopTimer();
    hr = 0;
    min = 0;
    sec = 0;
    stoptime = true;
    timer.innerHTML = '00:00:00';
}