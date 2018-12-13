import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './ContactCard.scss';


class ContactCard extends React.Component {

	render() {
		return (
			<Card className="ContactCard__card">
				<CardBody className="ContactCard__card-body">
					<CardTitle className="ContactCard__text">
						<div className="ContactCard__name">{this.props.contact.name}</div>
						<div className="ContactCard__icons">
							<div className="float-right d-flex">
								<i className="fas fa-pencil-alt ContactCard__icon"></i>
								<i className="fas fa-trash-alt ContactCard__icon"></i>
							</div>
						</div>
					</CardTitle>
					<CardText className="ContactCard__text">{this.props.contact.email}</CardText>
					<CardText className="ContactCard__text">{this.props.contact.tel}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default ContactCard;