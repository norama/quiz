import React from 'react';
import PropTypes from 'prop-types';

import Question from './quiz/Question';
import Answer from './quiz/Answer';
import Stat from './quiz/Stat';

import randomPuzzle from '../data/randomPuzzle';

const EMPTY_STAT = {
	success: 0,
	failure: 0,
	count: 0
};

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
			<div>
				{quiz.answer !== null ? 
					<Answer
						success={quiz.answer === quiz.puzzle.result}
						result={quiz.puzzle.result}
						onNext={this.handleNext}
					/>
				:
					<Question
						text={quiz.puzzle.text}
						options={quiz.puzzle.options}
						onAnswer={this.handleAnswer}
					/>
				}
				<Stat stat={quiz.stat} />
			</div>
		) : null;
	}

	handleNext = () => {
		this.props.onChangeQuiz({
			puzzle: randomPuzzle(),
			answer: null,
			stat: this.nextStat()
		});
	};

	handleAnswer = (answer) => {
		const quiz = this.props.quiz;

		this.props.onChangeQuiz({
			puzzle: quiz.puzzle,
			answer,
			stat: this.answerStat(answer === quiz.puzzle.result)
		});
	};

	nextStat() {
		const quiz = this.props.quiz;
		const stat = quiz ? quiz.stat : EMPTY_STAT;

		return {
			success: stat.success,
			failure: stat.failure,
			count: stat.count + 1
		};
	}

	answerStat(success) {
		const stat = this.props.quiz.stat;

		return {
			success: stat.success + (success ? 1 : 0),
			failure: stat.failure + (success ? 0 : 1),
			count: stat.count
		};
	}
}

Quiz.propTypes = {
	onMount: PropTypes.func.isRequired,
	quiz: PropTypes.shape({
		puzzle: PropTypes.shape({
					text: PropTypes.string.isRequired,
					options: PropTypes.arrayOf(PropTypes.number).isRequired,
					result: PropTypes.number.isRequired
				}).isRequired,
		answer: PropTypes.number,
		stat: PropTypes.shape({
			success: PropTypes.number.isRequired,
			failure: PropTypes.number.isRequired,
			count: PropTypes.number.isRequired
		}).isRequired
	}),
	onChangeQuiz: PropTypes.func.isRequired
};

export default Quiz;