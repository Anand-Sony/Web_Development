const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const milliSecondsLabel = document.getElementById('milliSeconds');

const startButton = document.getElementById('Startbtn');
const stopButton = document.getElementById('Stopbtn');
const pauseButton = document.getElementById('Pausebtn');
const resetButton = document.getElementById('Resetbtn');
const clearLapsButton = document.getElementById('ClearLapsbtn');
const lapList = document.getElementById('laplist');

// Stopwatch
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval;
let isRunning = false;
let laps = [];

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
clearLapsButton.addEventListener('click', clearLaps);

function startTimer(){
    if (!isRunning) {
        interval = setInterval(updateTimer, 10);
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        pauseButton.disabled = false;
    }
}

function stopTimer(){
    clearInterval(interval);
    addLapToList();
    resetTimerData();
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    pauseButton.disabled = true;
}

function pauseTimer(){
    clearInterval(interval);
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    pauseButton.disabled = true;
    clearLaps();
}

function updateTimer(){
    milliSeconds++;
    if(milliSeconds === 100){
        milliSeconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    milliSecondsLabel.textContent = padTime(milliSeconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2, '0');
}

function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    displayTimer();
}

function addLapToList(){
    const lapTime = `${padTime(minutes)} : ${padTime(seconds)} : ${padTime(milliSeconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>laps ${laps.length + 1}:</span> ${lapTime}`;
    lapList.appendChild(listItem);
    laps.push(lapTime);
}

function clearLaps(){
    lapList.innerHTML = '';
    laps = [];
}