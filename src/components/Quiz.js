import React from 'react';
import PropTypes from 'prop-types';

import Question from './quiz/Question';
import Answer from './quiz/Answer';

import randomPuzzle from '../data/randomPuzzle';

class Quiz extends React.Component {

	componentDidMount() {
		this.props.onMount();

		if (this.props.quiz === null) {
			this.handleNext();
		}
	}

	render() {
		const quiz = this.props.quiz;

		return quiz ? (
			quiz.answer ? (
				<Answer
					answer={quiz.answer}
					result={quiz.puzzle.result}
					onNext={this.handleNext}
				/>
			) : (
				<Question
					text={quiz.puzzle.text}
					options={quiz.puzzle.options}
					onAnswer={this.handleAnswer}
				/>
			)
		) : null;
	}

	handleNext = () => {
		this.props.onChangeQuiz({
			puzzle: randomPuzzle(),
			answer: null
		});
	};

	handleAnswer = (answer) => {
		this.props.onChangeQuiz({
			puzzle: this.props.quiz.puzzle,
			answer
		});
	};
}

Quiz.propTypes = {
	onMount: PropTypes.func.isRequired,
	quiz: PropTypes.shape({
		puzzle: PropTypes.shape({
					text: PropTypes.string.isRequired,
					options: PropTypes.arrayOf(PropTypes.number).isRequired,
					result: PropTypes.number.isRequired
				}),
		answer: PropTypes.number
	}),
	onChangeQuiz: PropTypes.func.isRequired
};

export default Quiz;