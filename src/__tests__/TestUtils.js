export function elements(wrapper, selector) {
	return wrapper.find(selector).getElements();
}

export function element(wrapper, selector) {
	return elements(wrapper, selector)[0];
}

export function containsElement(wrapper, selector) {
	return elements(wrapper, selector).length > 0;
}


test('dummy', () => {
	expect(true).toBe(true);
});
