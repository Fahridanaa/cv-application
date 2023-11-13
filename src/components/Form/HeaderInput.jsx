import PropTypes from 'prop-types';
import arrowDownIcon from '../../assets/chevron-down-outline.svg'; // with import
import '../../styles/Header.css';

function HeaderInput({ title, id }) {
	const titleStyle = {};

	return (
		<div id={id}>
			<h1 style={titleStyle}>{title}</h1>
			<img src={arrowDownIcon} />
		</div>
	);
}

HeaderInput.propTypes = {
	title: PropTypes.string.isRequired,
};

export default HeaderInput;
HeaderInput.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
