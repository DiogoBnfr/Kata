// comment

/* multi
 * line
 * the last line is not a comment one
 */

var foo; // optional initialization, can be local or global

let bar; // optional initialization, block-scoped, a local variable

const asd = "hello"; // local variable, readonly, need to be initialized

// foo & bar are undefined rn
console.log(foo);

if (Math.random() > 0.5) {
	const y = 5;
}

console.log(y); // y is not defined due to block-scope

if (true) {
	var x = 5;
}

console.log(x); // x is 5

console.log(x === undefined);
var x = 3;

(function () {
	console.log(x);
	var x = "local value";
})();

var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

console.log(a); // reference error
const a = 3;

console.log(b) // reference error
let b = 3;

function foo() {
	const g = 5;
	var g; // error
}
