// variables for btns
const startStopBtn = document.getElementById('startStopBtn')
const resetBtn = document.getElementById('resetBtn')

// variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zero for attractive UI
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variable for setInterval and timerStatus
let timerInterval = null;
let timerStatus = 'stopped';

// stopwatch function
function stopwatch() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    //if seconds minutes or hour is less than 10 (single digit) add 0 as string to it for better UI
    leadingSeconds = (seconds < 10) ? "0" + seconds : seconds;
    leadingMinutes = (minutes < 10) ? "0" + minutes : minutes;
    leadingHours = (hours < 10) ? "0" + hours : hours;

    //this will display time to webpage
    let displayTimer = document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}


//This function will change the icon of play pause button on click and also will stop and resume the time on click
function startStopFunc(){
    if(timerStatus === 'stopped'){
        //we will use window so that as soon as browser loads function will invoke it is most powerful method/function. 
        timerInterval = window.setInterval(stopwatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
        timerStatus = 'started' 
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
        timerStatus = 'stopped'
    }
}
startStopBtn.addEventListener('click',startStopFunc)

//This function will reset the timer to 00:00:00
function resetBtnFunc(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById('timer').innerHTML = "00:00:00"
    document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
}
resetBtn.addEventListener('click',resetBtnFunc)