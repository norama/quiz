const MIN = 1;
const MAX = 20;

// random number between min (included) and max (included)
function random(min=MIN, max=MAX) {
	if (min > max) {
		[min, max] = [max, min];
	}
	return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export default random;