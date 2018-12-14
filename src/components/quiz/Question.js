import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody } from 'reactstrap';
import { Table, Button } from 'reactstrap';

import './Quiz.scss';
import './Question.scss';

const LABEL = "Kolik je";

class Question extends React.Component {

	render() {
		const options = this.props.options;
		const onAnswer = this.props.onAnswer;

		return (
			<Card className="Quiz__root">
				<CardHeader className="Quiz__header">
					{LABEL + " " + this.props.text}
				</CardHeader>
				<CardBody className="Question__body">
					<Table
						className="Question__table"
						borderless={true}
					>
						<tbody>
							<tr>
								<td><Option value={options[0]} onSelect={onAnswer} /></td>
								<td><Option value={options[1]} onSelect={onAnswer} /></td>
							</tr>
							<tr>
								<td><Option value={options[2]} onSelect={onAnswer} /></td>
								<td><Option value={options[3]} onSelect={onAnswer} /></td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
			</Card>
		);
	}
}

class Option extends React.Component {

	render() {
		return (
			<Button
				className="Question__button"
				color="primary"
				size="sm"
				onClick={this.handleSelect}
			>
				{this.props.value}
			</Button>
		);
	}

	handleSelect = () => {
		this.props.onSelect(this.props.value);
	};
}

Option.propTypes = {
	value: PropTypes.number.isRequired,
	onSelect: PropTypes.func.isRequired
};

Question.propTypes = {
	text: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.number).isRequired,
	onAnswer: PropTypes.func.isRequired
};

export default Question;