function Point(x = 0, y = 0) {
	// if (!(this instanceof Point)) {
	// 	throw new Error('Illegal function call Point().');
	// }

	if (!(this instanceof Point)) {
		return new Point(x, y);
	}

	this.x = x;
	this.y = y;

	this.setTo = function(x, y) {
		this.x = x;
		this.y = y;
	}
}

Point.distance = function(p1, p2) {
	// Calculate distance between p1 and p2.
	return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
}

var p1 = [0, 0];
var p2 = [3, 4];

console.log(Point.distance(p1, p2));

var p3 = new Point(1, 2);
console.log(p3);

var p4 = Point(3, 4);
console.log(p4);
