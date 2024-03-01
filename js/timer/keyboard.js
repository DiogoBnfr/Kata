const focusMinutesInput = document.getElementById('focusMinutes');
const breakMinutesInput = document.getElementById('breakMinutes');
const saveButton = document.getElementById('saveButton');
const configButton = document.getElementById('configButton');
const floatingMenu = document.getElementById('floating-config-menu');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const changeButton = document.getElementById('changeButton');

focusMinutesInput.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		saveButton.click();
	}
})

breakMinutesInput.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		saveButton.click();
	}
})

window.addEventListener("keypress", function(event) {
	if (event.key == "c") {
		event.preventDefault();
		configButton.click();
	}
})

window.addEventListener("keypress", function(event) {
	if (event.key == " ") {
		event.preventDefault();
		startButton.click();
	}
})

window.addEventListener("keypress", function(event) {
	if (event.key == "r") {
		event.preventDefault();
		resetButton.click();
	}
})

window.addEventListener("keypress", function(event) {
	if (event.key == "s") {
		event.preventDefault();
		changeButton.click();
	}
})
