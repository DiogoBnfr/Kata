var buttonClickAudio = new Audio('button_click.mp3');

function buttonClickPlay() {
	buttonClickAudio.play();
	buttonClickAudio.currentTime = 0;
}

function toggleMenu() {
	buttonClickPlay();

	const menu = document.getElementById("floating-config-menu");
	const overlay = document.getElementById("overlay");
	menu.classList.toggle("active");
	overlay.classList.toggle("active");
}
