let username = 'Greg';

function name(name) {
	console.log(name.toString());
}

name(username);

let displayName = function(name) {
	console.log(name.toString());
};

displayName(username);

var sum = function(x, y) {
	return x + y;
}

console.log(sum(5, 2));

var utils = {
	add: function(x, y) { return x + y; },
	subtract: function(x, y) { return x - y; }
}

console.log(utils.add(5, 2));
console.log(utils.subtract(5, 2));

function execute(fn) {
	fn();
}

execute(function() { console.log('Hello World!'); })

function getLogger() {
	return function(val) {
		console.log('We are learning ' + val + '.');
	}
}

var langIntro = getLogger();

langIntro('JavaScript');

(function() {
	console.log('I am in an IIFE.')
})();

var nums = [1, 2, 3];
var squares = nums.map(function toSquare(num) { return num ** 2; });

console.log(squares);

// using argumemnts.callee
var nums = [1, 2, 3, 4, 5, 6];

var fibs = nums.map(function(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;
	return arguments.callee(n - 1) + arguments.callee(n - 2);
});

console.log(fibs);

// using named function expression
var nums = [1, 2, 3, 4, 5, 6];

var fibs = nums.map(function fib(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;
	return fib(n - 1) + fib(n - 2);
});

console.log(fibs);
// console.log(fib); = ERROR

function f() {
	console.log(this.x);
}

var o = {
	x: 10,
	func: f
};

var x = 20;
o.func();

console.log(this);

function f() {
	console.log(this);
}

f();
