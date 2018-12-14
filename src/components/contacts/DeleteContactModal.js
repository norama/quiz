import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import './ContactModal.scss';
import './ContactForm.scss';

const TITLE = "Smazat kontakt";
const TEXT = "Potvrd'te smazání kontaktu";
const LABELS = {
	delete: 'SMAZAT',
	cancel: 'ZRUŠIT'
};

class DeleteContactModal extends React.Component {

	render() {
		return (
			<Modal isOpen={this.props.isOpen} className="ContactModal__root">
				<ModalHeader className="ContactModal__header">{TITLE}</ModalHeader>
				<ModalBody>
					<div className="ContactModal__text">
						<span>{TEXT + " "}</span>
						<span className="ContactModal__name">{this.props.contact.name}</span>
						<span>{"."}</span>
					</div>
					<Button outline
						onClick={this.props.onCancel}
						color="secondary"
						className="float-left ContactForm__button"
						size="sm"
					>
						{LABELS['cancel']}
					</Button>
					<Button
						onClick={this.props.onSubmit}
						color="danger"
						className="float-right ContactForm__button"
						size="sm"
					>
						{LABELS['delete']}
					</Button>
				</ModalBody>
			</Modal>
		);
	}
}

DeleteContactModal.propTypes = {
	contact: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		tel: PropTypes.string.isRequired
	}).isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired
};

export default DeleteContactModal;