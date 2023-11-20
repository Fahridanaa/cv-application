/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import HeaderInputShowButton from './HeaderInputShowButton';
import '../../styles/HeaderInput.css';

function HeaderInput({ title, id, handleToggle, isActive }) {
	const titleStyle = {};

	return (
		<div id={id}>
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
