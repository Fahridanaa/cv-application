/* eslint-disable react/prop-types */
import arrowDownIcon from '../../assets/chevron-down-outline.svg';

export default function HeaderInputShowButton({ onButtonClick, isActive }) {
	return (
		<button id='showButton' onClick={onButtonClick} className={`w-[5%] border-none bg-transparent cursor-pointer transition-transform ease-in-out duration-300 ${isActive ? 'rotate-0' : 'rotate-90'}`}>
			<img src={arrowDownIcon} alt="DropDown" className="w-fit"/>
		</button>
	);
}
