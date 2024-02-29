function Point() {
	this.x = 0;
	this.y = 0;
}

let p1 = new Point();
let p2 = new Point();

console.log(p1);
console.log(p2);

function PointWithParams(x, y) {
	this.x = x;
	this.y = y;
}

let p3 = new PointWithParams(1, 2);
let p4 = new PointWithParams(3, 4);

console.log(p3);
console.log(p4);

// this doesn't work on some older browsers
function PointWithOptParams(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

let p5 = new PointWithOptParams();
let p6 = new PointWithOptParams(1, 2);

console.log(p5);
console.log(p6);

// this is an alternative way to make params optional
function PointWithOptParamsOldBrowsers(x, y) {
	this.x = x !== undefined ? x : 0;
	this.y = y !== undefined ? y : 0;
}
