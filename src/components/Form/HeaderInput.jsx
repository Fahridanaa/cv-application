import PropTypes from 'prop-types';
import { useState } from 'react';
import HeaderInputShowButton from './HeaderInputShowButton';
import '../../styles/HeaderInput.css';

function HeaderInput({ title, id }) {
	const [isActive, setIsActive] = useState(false);
	const handleToggle = () => {
		setIsActive(!isActive);
	};
	const titleStyle = {};

	return (
		<div id={id} className={`${isActive ? 'buttonActive' : ''}`}>
			<h1 style={titleStyle}>{title}</h1>
			<HeaderInputShowButton onButtonClick={handleToggle} isActive={isActive} />
		</div>
	);
}

export default HeaderInput;
HeaderInput.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
