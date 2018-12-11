import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import './Main.scss';

const Main = () => (
	<Router>
		<div>
			<Nav>
				<NavItem>
					<NavLink to="/contacts" activeClassName="selected">Kontakty</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/quiz" activeClassName="selected">Kvíz</NavLink>
				</NavItem>
			</Nav>

			<Route path="/" render={() => (<Redirect to="/contacts"/>)} />
			<Route path="/contacts" component={Contacts} />
			<Route path="/quiz" component={Quiz} />
		</div>
	</Router>
);

const Contacts = () => (
	<h2>Contacts</h2>
);


const Quiz = () => (
	<h2>Quiz</h2>
);

export default Main;