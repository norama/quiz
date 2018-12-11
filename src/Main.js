import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { Nav, NavItem, Card, CardHeader, CardBody } from 'reactstrap';

import HeaderContent from './components/HeaderContent';

import './Main.scss';

const TEXTS = {
	contacts: 'Kontakty',
	quiz: 'Kvíz'
};

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			page: null
		};
	}

	render() {
		console.log(window);
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
						<Route path="/contacts" render={() => (<Contacts onMount={this.handleContactsSelected} />)} />
						<Route path="/quiz" render={() => (<Quiz onMount={this.handleQuizSelected} />)} />
					</CardBody>
				</Card>
			</Router>
		);
	}

	handleContactsSelected = () => {
		this.setState({ page: 'contacts'});
	}

	handleQuizSelected = () => {
		this.setState({ page: 'quiz'});
	}
} 

class Contacts extends React.Component {
	render() {
		return (
			<h2>{TEXTS['contacts']}</h2>
		);
	}

	componentDidMount() {
		this.props.onMount();
	}
}


class Quiz extends React.Component {
	render() {
		return (
			<h2>{TEXTS['quiz']}</h2>
		);
	}

	componentDidMount() {
		this.props.onMount();
	}
}

export default Main;