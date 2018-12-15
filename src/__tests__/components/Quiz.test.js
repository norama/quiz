import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';
import Quiz from '../../components/Quiz';
import Question from '../../components/quiz/Question';
import Answer from '../../components/quiz/Answer';

import { element, containsElement } from '../TestUtils';

const EMPTY_FUNC = () => {};

const QUIZ1 = {
	puzzle: {
		text: "3 * 7",
		options: [8, 21, 25, 28],
		result: 21
	},
	answer: null,
	stat: {
		success: 0,
		failure: 0,
		count: 1
	}
};

const QUIZ2 = {
	puzzle: {
		text: "3 * 7",
		options: [8, 21, 25, 28],
		result: 21
	},
	answer: 21,
	stat: {
		success: 1,
		failure: 0,
		count: 1
	}
};

const QUIZ3 = {
	puzzle: {
		text: "3 * 7",
		options: [8, 21, 25, 28],
		result: 21
	},
	answer: 8,
	stat: {
		success: 0,
		failure: 1,
		count: 1
	}
};

describe('<Quiz />', () => {

	test('renders with new puzzle', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Quiz onMount={EMPTY_FUNC} quiz={QUIZ1} onChangeQuiz={EMPTY_FUNC} />
			</MemoryRouter>
		);

		expect(containsElement(wrapper, Question)).toBe(true);
		expect(containsElement(wrapper, Answer)).toBe(false);
	});

	test('renders with puzzle and correct answer', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Quiz onMount={EMPTY_FUNC} quiz={QUIZ2} onChangeQuiz={EMPTY_FUNC} />
			</MemoryRouter>
		);

		expect(containsElement(wrapper, Question)).toBe(false);
		expect(containsElement(wrapper, Answer)).toBe(true);

		const answer = element(wrapper, Answer);

		expect(answer.props["success"]).toBe(true);
	});

	test('renders with puzzle and incorrect answer', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Quiz onMount={EMPTY_FUNC} quiz={QUIZ3} onChangeQuiz={EMPTY_FUNC} />
			</MemoryRouter>
		);

		expect(containsElement(wrapper, Question)).toBe(false);
		expect(containsElement(wrapper, Answer)).toBe(true);

		const answer = element(wrapper, Answer);

		expect(answer.props["success"]).toBe(false);
	});
});


