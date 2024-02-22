const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");

setInterval(function attTimer() {
	let d = new Date();
	let m = d.getMinutes().toString().split("");
	let s = d.getSeconds().toString().split("");

	switch (m[1]) {
		case undefined:
			n1.innerText = 0
			n2.innerText = m[0];
			break;
		default:
			n1.innerText = m[0];
			n2.innerText = m[1];
			break;
	}
	switch (s[1]) {
		case undefined:
			n3.innerText = 0
			n4.innerText = s[0];
			break;
		default:
			n3.innerText = s[0];
			n4.innerText = s[1];
			break;
	}
}, 1000);
