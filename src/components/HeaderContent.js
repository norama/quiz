import React from 'react';

import './HeaderContent.scss';

const HeaderContent = ({ title }) => (
	<div className="HeaderContent__root">
		<div className="HeaderContent__circle" />
		<div className="HeaderContent__circle" />
		<div className="HeaderContent__circle" />
		<div className="HeaderContent__text">
			<div className="HeaderContent__text-title">{title}</div>
			<div className="HeaderContent__text-separator"></div>
			<div className="HeaderContent__text-label">JS test</div>
		</div>
	</div>
);

export default HeaderContent;