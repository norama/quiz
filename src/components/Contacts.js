import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, FormFeedback, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import ContactForm from './contacts/ContactForm';

import './Contacts.scss';

const LABELS = {
	add: "PŘIDAT"
};

class Contacts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return (
			<div className="Contacts__root">
				<div className="Contacts__add-contact-form">
					<AddContactForm addContact={this.addContact} />
				</div>
				<hr />
				<div className="Contacts__contacts-list">
					<ContactsList contacts={this.state.contacts} />
				</div>
			</div>
		);
	}

	addContact = (contact) => {
		this.setState((prevState) => ({
			contacts: [...prevState.contacts, contact]
		}));
	};
}

class AddContactForm extends React.Component {

	render() {
		return (
			<Card>
				<CardBody>
					<ContactForm onSubmit={this.handleAddContact} submitLabel={LABELS['add']} />
				</CardBody>
			</Card>
		);
	}

	handleAddContact = (contact) => {
		alert(JSON.stringify(contact, null, '  '));
	};
}

const ContactsList = () => (
	<Container></Container>
);

function rows(items, cols) {
	return items.reduce((acc, item) => {
		if (acc.length === 0 || acc[acc.length - 1].length === cols) {
			acc.push([ item ]);
		} else {
			acc[acc.length - 1].push(item);
		}
		return acc;
	}, []);
}

export default Contacts;