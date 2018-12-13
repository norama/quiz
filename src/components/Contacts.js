import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import uuid from 'uuid/v1';

import ContactForm from './contacts/ContactForm';
import ContactCard from './contacts/ContactCard';

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
					<AddContactForm onAddContact={this.handleAddContact} />
				</div>
				<hr />
				<div className="Contacts__contacts-list">
					<ContactList contacts={this.state.contacts} />
				</div>
			</div>
		);
	}

	handleAddContact = (contact) => {
		this.setState((prevState) => ({
			contacts: [...prevState.contacts, contact]
		}));
	};
}

class AddContactForm extends React.Component {

	render() {
		return (
			<Card>
				<CardBody className="Contacts__card-body">
					<ContactForm onSubmit={this.handleAddContact} submitLabel={LABELS['add']} />
				</CardBody>
			</Card>
		);
	}

	handleAddContact = (contact) => {
		contact.id = uuid();
		this.props.onAddContact(contact);
	};
}

const ContactList = ({ contacts }) => (
	<Container className="ContactList__container">
		{rows(contacts, 3).map((row) => (
			<Row key={row[0].id}>
				{row.map((contact) => (
					<Col xs="12" sm="4" className="d-flex ContactList__item-col" key={contact.id}>
						<ContactCard contact={contact}/>
					</Col>
				))}
			</Row>
		))}
	</Container>
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