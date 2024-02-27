function toggleMenu() {
	const menu = document.getElementById("floating-config-menu");
	const overlay = document.getElementById("overlay");
	menu.classList.toggle("active");
	overlay.classList.toggle("active");
}
