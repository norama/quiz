import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import './ContactForm.scss';

const FEEDBACK = {
	name: "Prosím zadejte jméno",
	email: "Prosím zadejte platný email"
};

const PLACEHOLDER = {
	name: "Jméno *",
	email: "Email *",
	tel: "Tel. číslo"
};

const EMPTY_CONTACT = {
	id: null,
	name: '',
	email: '',
	tel: ''
};

class ContactForm extends React.Component {

	constructor(props) {
		super(props);

		this.formRef = React.createRef();

		this.state = _.clone(this.props.contact);
	}

	render() {
		return (
			<AvForm onValidSubmit={this.handleSubmit} ref={this.formRef}>
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
				<AvField
					inputClass="ContactForm__input"
					type="text"
					name="tel"
					value={this.state.tel}
					onChange={this.handleTelChange}
					placeholder={PLACEHOLDER['tel']}
				/>
				{this.props.onCancel &&
					<Button outline
						onClick={this.props.onCancel}
						color="secondary"
						className="float-left ContactForm__button"
						size="sm"
					>
						{this.props.cancelLabel}
					</Button>
				}
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

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		});
	};

	handleTelChange = (e) => {
		this.setState({
			tel: e.target.value,
		});
	};

	handleSubmit = () => {
		this.props.onSubmit(_.clone(this.state));

		this.formRef.current.reset();

		this.setState(EMPTY_CONTACT);
	}
}

ContactForm.propTypes = {
	contact: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		tel: PropTypes.string.isRequired
	}),
	onSubmit: PropTypes.func.isRequired,
	submitLabel: PropTypes.string.isRequired,
	onCancel: PropTypes.func,
	cancelLabel: PropTypes.string
};

ContactForm.defaultProps = {
	contact: EMPTY_CONTACT
};

export default ContactForm;