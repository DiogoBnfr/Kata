var buttonClickAudio = new Audio('button_click.mp3');

function buttonClickPlay() {
	buttonClickAudio.play();
	buttonClickAudio.currentTime = 0;
}

const overlay = document.getElementById("overlay");
const menu = document.getElementById("floating-config-menu");
const info = document.getElementById("floating-info");

function toggleAllOff() {
	overlay.classList.toggle("active");
	if (menu.classList.contains("active")) menu.classList.toggle("active");
	if (info.classList.contains("active")) info.classList.toggle("active");
}

function toggleOverlay() {
	overlay.classList.toggle("active");
}

function toggleMenu() {
	buttonClickPlay();
	menu.classList.toggle("active");
	toggleOverlay();
}

function toggleInfo() {
	buttonClickPlay();
	info.classList.toggle("active");
	toggleOverlay();
}
