import random from './random';

const OPTIONS_COUNT = 4;

const MAX = 20;

const OPERATIONS = [{
	func: (x, y) => (x + y),
	sign: "+"
}, {
	func: (x, y) => (x - y),
	sign: "-"
}, {
	func: (x, y) => (x * y),
	sign: "*"
}];

const TRIALS_COUNT = 1000;

/**
 * Returns randomly generated puzzle in form of:
 *
 * {
 *		text: <puzzle text as string, e.g. "3 * 7">
 *		options: <array of options in ascending order, one of them is the result, e.g. [15, 17, 21, 23]>
 * 		result: <the correct result, e.g. "21">
 * }
 *
 */
function randomPuzzle(randomFunc = random) {

	const x = randomFunc();
	const y = randomFunc();
	const operationIndex = randomFunc(0, 2);
	const operation = OPERATIONS[operationIndex];
	const result = operation.func(x, y);

	// start with the correct result
	let options = [ result ];

	// add different random options, limit trials just in case...
	let count = 0;
	while (options.length < OPTIONS_COUNT && count++ < TRIALS_COUNT) {
		const option = randomOption(operation, x, y, result, randomFunc);
		if (!options.includes(option)) {
			options.push(option);
		}
	}

	// sort the options
	options.sort((a, b) => (a - b));

	// just in case: fill missing options deterministically
	while (options.length < OPTIONS_COUNT) {
		const last = options[options.length - 1];
		options.push(last + 2);
	}

	// the puzzle text
	const text = "" + x + " " + operation.sign + " " + y;

	// construct the puzzle
	return {
		text,
		options,
		result
	};
}

// random false result option based on arguments and operation
function randomOption(operation, x, y, result, randomFunc) {

	switch (operation.sign) {
		case "+":
			return randomFunc(Math.max(x, y), result * 2 + 8);

		case "-":
			return randomFunc(-MAX, x);

		default:
			// "*": just do something crazy depending on x and y :-)
			return result +
				randomFunc(0, 1) * randomFunc(0, 10) * x -
				randomFunc(0, 1) * randomFunc(0, 3) * y;
	}
}

export default randomPuzzle;