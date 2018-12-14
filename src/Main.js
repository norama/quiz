import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { Nav, NavItem, Card, CardHeader, CardBody } from 'reactstrap';

import HeaderContent from './components/HeaderContent';
import Contacts from './components/Contacts';
import Quiz from './components/Quiz';

import './Main.scss';

const TEXTS = {
	contacts: 'Kontakty',
	quiz: 'Kvíz'
};

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			page: null,
			contacts: [],
			quiz: null
		};
	}

	render() {
		return (
			<Router>
				<Card className="Main__panel">
					<CardHeader className="Main__panel-header">
						<HeaderContent title={TEXTS[this.state.page]} />
					</CardHeader>
					<CardBody className="Main__panel-body">
						<Nav className="Main__nav">
							<NavItem>
								<NavLink to="/contacts" activeClassName="selected" innerRef={(contacts) => {this.contacts = contacts}}>Kontakty</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/quiz" activeClassName="selected" innerRef={(quiz) => {this.quiz = quiz}}>Kvíz</NavLink>
							</NavItem>
						</Nav>
		
						<Route exact path="/" render={() => (<Redirect to="/contacts"/>)} />
						<Route path="/contacts" render={() => (
								<Contacts
									onMount={this.handleContactsSelected}
									contacts={this.state.contacts}
									onChangeContacts={this.handleChangeContacts}
								/>
							)}
						/>
						<Route path="/quiz" render={() => (
								<Quiz
									onMount={this.handleQuizSelected}
									quiz={this.state.quiz}
									onChangeQuiz={this.handleChangeQuiz}
								/>
							)}
						/>
					</CardBody>
				</Card>
			</Router>
		);
	}

	handleContactsSelected = () => {
		this.setState({ page: 'contacts' });
	}

	handleQuizSelected = () => {
		this.setState({ page: 'quiz' });
	}

	handleChangeContacts = (contacts) => {
		this.setState({ contacts });
	};

	handleChangeQuiz = (quiz) => {
		this.setState({ quiz });
	}
} 

export default Main;