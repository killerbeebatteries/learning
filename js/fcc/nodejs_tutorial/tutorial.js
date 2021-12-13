const sum = (num1, num2) => num1 + num2;

const PI = 3.14

class SomeMathsObject {
	constructor() {
		console.log("This is a class?");
	}
}

// individual exports
//module.exports.sum = sum;
//module.exports.PI = PI;
//module.exports.SomeMathsObject = SomeMathsObject;

// single-line exports
module.exports = { sum : sum, PI : PI, SomeMathsObject : SomeMathsObject }
