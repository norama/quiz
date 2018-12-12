import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './ContactCard.scss';


class ContactCard extends React.Component {

	render() {
		return (
			<Card className="ContactCard__card">
				<CardBody className="ContactCard__card-body">
					<CardTitle className="ContactCard__text">{this.props.contact.name}</CardTitle>
					<CardText className="ContactCard__text">{this.props.contact.email}</CardText>
					<CardText className="ContactCard__text">{this.props.contact.tel}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default ContactCard;