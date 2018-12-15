import randomPuzzle from '../../data/randomPuzzle';

const MIN = 1;
const MAX = 20;

function mockRandom(min=MIN, max=MAX) {
	if (min > max) {
		[min, max] = [max, min];
	}
	return Math.floor((min + max) / 2);
}

describe('randomPuzzle()', () => {

	test('test puzzle format', () => {
		const puzzle = randomPuzzle(mockRandom);

		console.log(puzzle);

		expect(puzzle.text).toBeTruthy();
		expect(puzzle.options).toHaveLength(4);

		// options contain result
		expect(puzzle.options.includes(puzzle.result)).toBe(true);

		// options strictly increasing
		for (let i=1; i < puzzle.options.length; ++i) {
			expect(puzzle.options[i-1] < puzzle.options[i]);
		}
	});

	test('test puzzle result correctness', () => {
		const puzzle = randomPuzzle(mockRandom);

		expect(eval(puzzle.text)).toBe(puzzle.result);
	});
});