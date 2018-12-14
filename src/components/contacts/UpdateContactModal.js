import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import ContactForm from './ContactForm';

import './ContactModal.scss';

const TITLE = "Upravit kontakt";
const LABELS = {
	ok: 'OK',
	cancel: 'ZRUŠIT'
};

class UpdateContactModal extends React.Component {

	render() {
		return (
			<Modal isOpen={this.props.isOpen}>
				<ModalHeader className="ContactModal__header">{TITLE}</ModalHeader>
				<ModalBody>
					<ContactForm
						contact={this.props.contact}
						onSubmit={this.props.onSubmit}
						submitLabel={LABELS['ok']}
						onCancel={this.props.onCancel}
						cancelLabel={LABELS['cancel']}
					/>
				</ModalBody>
			</Modal>
		);
	}
}

UpdateContactModal.propTypes = {
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

export default UpdateContactModal;