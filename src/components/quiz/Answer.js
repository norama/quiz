import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import { Button } from 'reactstrap';

import './Quiz.scss';
import './Answer.scss';

const LABEL = "Výsledek";
const RESULT = {
	success: "Odpověděli jste správně.",
	failure: "Odpověděli jste špatně."
};
const NEXT = "DALŠÍ OTÁZKA";

class Answer extends React.Component {

	render() {
		return (
			<Card className="Quiz__root">
				<CardHeader className="Quiz__header">
					{LABEL}
				</CardHeader>
				<CardBody className="Answer__body">
					<CardTitle>
						<span className={this.props.success ? "text-success" : "text-danger"}>
							{"" + this.props.result}
						</span>
					</CardTitle>
					<CardText>
						{this.props.success ? <Success /> : <Failure />}
					</CardText>
					<Button
						color="primary"
						size="lg"
						onClick={this.props.onNext}
					>
						{NEXT}
					</Button>
				</CardBody>
			</Card>
		);
	}
}

const Success = () => (
	<span><i className="fas fa-check-circle text-success"></i>{RESULT['success']}</span>
);

const Failure = () => (
	<span><i className="fas fa-times-circle text-danger"></i>{RESULT['failure']}</span>
);

Answer.propTypes = {
	success: PropTypes.bool.isRequired,
	result: PropTypes.number.isRequired,
	onNext: PropTypes.func.isRequired
};

export default Answer;