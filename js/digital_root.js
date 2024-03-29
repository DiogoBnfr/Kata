function digitalRoot(n) {
	if (n < 10) return n;
	let sum = 0;
	n.toString().split('').forEach(function(x) { sum += parseInt(x, 10); });
	return digitalRoot(sum);
}

console.log(digitalRoot(493193));
