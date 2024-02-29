let date = new Date();

let user = { age: 13, isAdmin: true, createDate: date };

console.log(user.name === undefined);
console.log("name" in user);

let key = "age";
console.log(key in user);

for (let key in user) {
	console.log(key + ": " + user[key]);
}

let codes = {
	"49": "Germany",
	"41": "Switzerland",
	"44": "Great Britain",
	"1": "USA"
};

for (let code in codes) {
	console.log(code);
}

// constructors


