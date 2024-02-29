function Point(x = 0, y = 0) {
	this.x = x;
	this.y = y;

	this.setTo = function(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

var p1 = new Point(-2, 8);
console.log(p1.x, p1.y);

p1.setTo(1, 5);
console.log(p1.x, p1.y);

p1.setTo();
console.log(p1.x, p1.y);

var p2 = new Point(1, 2);
console.log(p1.setTo == p2.setTo);
console.log(p1.setTo === p2.setTo);
