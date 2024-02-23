const timer = document.getElementById("timer");

let interval;

const defaultMinutes = 10;
let defaultSeconds = defaultMinutes * 60;

function convertTime() {
	let hours = Math.floor(defaultSeconds / 60 / 60);
	let minutes = Math.floor(defaultSeconds / 60);
	let seconds = defaultSeconds % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	hours = hours < 10 ? '0' + hours : hours;

	return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
	updateCountdown();
	interval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
	timer.innerHTML = convertTime();
	defaultSeconds--;
}

function resetTimer() {
	clearInterval(interval);
	defaultSeconds = defaultMinutes * 60;
	timer.innerText = convertTime();
}

function stopTimer() {
	clearInterval(interval);
}

function toggleMenu() {
	const menu = document.getElementById("floating-config-menu");
	const overlay = document.getElementById("overlay");
	menu.classList.toggle("active");
	overlay.classList.toggle("active");
}

resetTimer();
