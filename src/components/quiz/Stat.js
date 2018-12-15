import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from 'reactstrap';

import './Stat.scss';

class Stat extends React.Component {

	render() {
		return (
			<h4 className="Stat__root">
				<Badge color="success" className="Stat__badge">
					<i className="fas fa-check-circle"></i>
					{this.props.stat.success}
				</Badge>
				<Badge color="secondary" className="Stat__badge">
					<i className="fas fa-list-ol"></i>
					{this.props.stat.count}
				</Badge>
				<Badge color="danger" className="Stat__badge">
					<i className="fas fa-times-circle"></i>
					{this.props.stat.failure}
				</Badge>
			</h4>
		);
	}
}

Stat.propTypes = {
	stat: PropTypes.shape({
		success: PropTypes.number.isRequired,
		failure: PropTypes.number.isRequired,
		count: PropTypes.number.isRequired
	}).isRequired
};

export default Stat;

