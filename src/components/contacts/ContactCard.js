import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import UpdateContactModal from './UpdateContactModal';
import DeleteContactModal from './DeleteContactModal';

import './ContactCard.scss';

class ContactCard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			update: false,
			delete: false
		};
	}

	render() {
		return (
			<Card className="ContactCard__card">
				<CardBody className="ContactCard__card-body">
					<CardTitle className="ContactCard__text">
						<div className="ContactCard__name">{this.props.contact.name}</div>
						<div className="ContactCard__icons">
							<div className="float-right d-flex">
								<i className="fas fa-pencil-alt ContactCard__icon" onClick={this.showUpdateModal}></i>
								<i className="fas fa-trash-alt ContactCard__icon" onClick={this.showDeleteModal}></i>
							</div>
						</div>
					</CardTitle>
					<CardText className="ContactCard__text">{this.props.contact.email}</CardText>
					<CardText className="ContactCard__text">{this.props.contact.tel}</CardText>
				</CardBody>
				<UpdateContactModal
					contact={this.props.contact}
					isOpen={this.state.update}
					onSubmit={this.handleUpdateContact}
					onCancel={this.hideUpdateModal}
				/>
				<DeleteContactModal
					contact={this.props.contact}
					isOpen={this.state.delete}
					onSubmit={this.handleDeleteContact}
					onCancel={this.hideDeleteModal}
				/>
			</Card>
		);
	}

	showUpdateModal = () => {
		this.setState({ update: true });
	};

	hideUpdateModal = () => {
		this.setState({ update: false });
	};

	showDeleteModal = () => {
		this.setState({ delete: true });
	};

	hideDeleteModal = () => {
		this.setState({ delete: false });
	};

	handleUpdateContact = (contact) => {
		this.setState({ update: false }, () => {
			this.props.onUpdateContact(contact);
		});
	}

	handleDeleteContact = () => {
		this.setState({ delete: false }, () => {
			this.props.onDeleteContact(this.props.contact);
		});
	}
}

ContactCard.propTypes = {
	contact: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		tel: PropTypes.string.isRequired
	}).isRequired,
	onUpdateContact: PropTypes.func.isRequired,
	onDeleteContact: PropTypes.func.isRequired
};

export default ContactCard;