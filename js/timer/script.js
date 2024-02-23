const timer = document.getElementById("timer");
const stage = document.getElementById("stage");
const startButton = document.getElementById("startButton");

const PAUSE = "PAUSE";
const FOCUS = "FOCUS";
const BREAK = "BREAK";

let interval = undefined;

const defaultFocusMinutes = 60;
let defaultSeconds = defaultFocusMinutes * 60;

function convertTime() {
	let hours = Math.floor(defaultSeconds / 3600);
	let minutes = Math.floor((defaultSeconds % 3600) / 60);
	let seconds = defaultSeconds % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	hours = hours < 10 ? '0' + hours : hours;

	return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
	if (interval == undefined) {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
		startButton.innerText = "STOP";
		stage.innerText = FOCUS;
	} else {
		clearInterval(interval);
		interval = undefined;
		startButton.innerText = "START";
		stage.innerText = PAUSE;
	}
}

function updateCountdown() {
	defaultSeconds--;
	timer.innerHTML = convertTime();
}

function resetTimer() {
	clearInterval(interval);
	interval = undefined;
	startButton.innerText = "START";
	defaultSeconds = defaultFocusMinutes * 60;
	timer.innerText = convertTime();
}

function toggleMenu() {
	const menu = document.getElementById("floating-config-menu");
	const overlay = document.getElementById("overlay");
	menu.classList.toggle("active");
	overlay.classList.toggle("active");
}

resetTimer();
