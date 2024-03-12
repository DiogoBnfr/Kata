function Shape(fill, x, y) {
	this.fill = fill;
	this.x = x;
	this.y = y;
}

function Rectangle(length, height, fill, x, y) {
	this.parent = Shape;
	this.parent(fill, x, y);

	this.length = length;
	this.height = height;
}

var rect = new Rectangle(4, 4, '#fda', 0, 0);

console.log(rect);
