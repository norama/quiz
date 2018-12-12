import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import './ContactForm.scss';

const FEEDBACK = {
	name: "Prosím zadejte jméno",
	email: "Prosím zadejte platný email"
};

const PLACEHOLDER = {
	name: "Jméno *",
	email: "Email *"
};

class ContactForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: ''
		};
	}

	render() {
		return (
			<AvForm onValidSubmit={this.handleSubmit}>
				<AvField
					inputClass="ContactForm__input"
					type="text"
					name="name"
					errorMessage={FEEDBACK['name']}
					validate={{
						required: {value: true}
					}}
					value={this.state.name}
					onChange={this.handleNameChange}
					placeholder={PLACEHOLDER['name']}
				/>
				<AvField
					inputClass="ContactForm__input"
					type="email"
					name="email"
					errorMessage={FEEDBACK['email']}
					validate={{
						required: {value: true}
					}}
					value={this.state.email}
					onChange={this.handleEmailChange}
					placeholder={PLACEHOLDER['email']}
				/>
				<Button
					type="submit"
					color="primary"
					className="float-right ContactForm__button"
					size="sm"
				>
					{this.props.submitLabel}
				</Button>
			</AvForm>

		);
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		});
	};

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleSubmit = () => {
		this.props.onSubmit({
			name: this.state.name,
			email: this.state.email
		});
	}
}

export default ContactForm;