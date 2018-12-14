import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { Card, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import uuid from 'uuid/v1';

import ContactForm from './contacts/ContactForm';
import ContactCard from './contacts/ContactCard';

import './Contacts.scss';

const LABELS = {
	add: "PŘIDAT"
};

class Contacts extends React.Component {

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
					<ContactList
						contacts={this.props.contacts}
						onUpdateContact={this.handleUpdateContact}
						onDeleteContact={this.handleDeleteContact}
					/>
				</div>
			</div>
		);
	}

	handleAddContact = (contact) => {
		const contacts = [...this.props.contacts, contact];
		this.props.onChangeContacts(contacts);
	};

	handleUpdateContact = (contact) => {
		const contacts = this.props.contacts.map((origContact) => (
			origContact.id === contact.id ? contact : origContact
		));
		this.props.onChangeContacts(contacts);
	};

	handleDeleteContact = (contact) => {
		const contacts = _.filter(this.props.contacts,
			(origContact) => (origContact.id !== contact.id)
		);
		this.props.onChangeContacts(contacts);
	};
}

class AddContactForm extends React.Component {

	render() {
		return (
			<Card>
				<CardBody className="Contacts__card-body">
					<ContactForm
						onSubmit={this.handleAddContact}
						submitLabel={LABELS['add']}
					/>
				</CardBody>
			</Card>
		);
	}

	handleAddContact = (contact) => {
		contact.id = uuid();
		this.props.onAddContact(contact);
	};
}

const ContactList = ({ contacts, onUpdateContact, onDeleteContact }) => (
	<Container className="ContactList__container">
		{rows(contacts, 3).map((row) => (
			<Row key={row[0].id}>
				{row.map((contact) => (
					<Col xs="12" sm="4" className="d-flex ContactList__item-col" key={contact.id}>
						<ContactCard
							contact={contact}
							onUpdateContact={onUpdateContact}
							onDeleteContact={onDeleteContact}
						/>
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

Contacts.propTypes = {
	onMount: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		tel: PropTypes.string.isRequired
	})).isRequired,
	onChangeContacts: PropTypes.func.isRequired
};

export default Contacts;