/* eslint-disable react/prop-types */
import arrowDownIcon from '../../assets/chevron-down-outline.svg';
import '../../styles/HeaderInputShowButton.css';

export default function HeaderInputShowButton({ onButtonClick, isActive }) {
	return (
		<button onClick={onButtonClick} className={isActive ? 'active' : ''}>
			<img src={arrowDownIcon} alt="DropDown" />
		</button>
	);
}
