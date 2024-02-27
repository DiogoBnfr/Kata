const timerElement = document.getElementById("timer");
const stageElement = document.getElementById("stage");
const startButtonElement = document.getElementById("startButton");

const PAUSE = "PAUSE";
const FOCUS = "FOCUS";
const BREAK = "BREAK";
let stage = FOCUS;

let focusDurationInMinutes = 0.1;
let breakDurationInMinutes = 0.1;
let currentStageInSeconds;

let timerState = undefined; // != undefined == active

function setTimer() {
	if (stage == FOCUS) currentStageInSeconds = focusDurationInMinutes * 60;
	if (stage == BREAK) currentStageInSeconds = breakDurationInMinutes * 60;
	timerElement.innerText = formatTimeToDisplay();
}

function startTimer() {
	if (timerState == undefined) {
		if (stage == FOCUS) stageElement.innerText = FOCUS;
		startButtonElement.innerHTML = "STOP";
		timerState = setInterval(updateCountdown, 1000);
	} else stopTimer();
}

function stopTimer() {
	stageElement.innerText = PAUSE;
	startButtonElement.innerText = "START";
	clearInterval(timerState);
	timerState = undefined;
}

function resetTimer() {
	clearInterval(timerState);
	timerState = undefined;
	setTimer();
	startButtonElement.innerText = "START";
}

function updateCountdown() {
	currentStageInSeconds--;
	timerElement.innerText = formatTimeToDisplay();
}

function formatTimeToDisplay() {
	let hours = Math.floor(currentStageInSeconds / 3600);
	let minutes = Math.floor((currentStageInSeconds % 3600) / 60);
	let seconds = Math.floor(currentStageInSeconds % 60);

	if (hours == 0 && minutes == 0 && seconds == 0)
		changeStage();

	seconds = seconds < 10 ? '0' + seconds : seconds;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	hours = hours < 10 ? '0' + hours : hours;

	return `${hours}:${minutes}:${seconds}`;
}

function changeStage() {
	clearInterval(timerState);
	timerState = undefined;
	if (stage == FOCUS) {
		stageElement.innerText = BREAK;
		stage = BREAK;
	} else {
		stageElement.innerText = FOCUS;
		stage = FOCUS;
	}
	setTimer();
	startTimer();
}

function changeSettings() {
	let focusMinInputVal = document.getElementById("focusMinutes").value;
	let breakMinInputVal = document.getElementById("breakMinutes").value;

	if (isNaN(parseFloat(focusMinInputVal)) != true)
		focusDurationInMinutes = parseFloat(focusMinInputVal);
	if (isNaN(parseFloat(breakMinInputVal)) != true)
		breakDurationInMinutes = parseFloat(breakMinInputVal);

	resetTimer();
}

setTimer();
