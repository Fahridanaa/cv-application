import arrowDownIcon from '../../assets/chevron-down-outline.svg';
import '../../styles/HeaderInputShowButton.css';

export default function HeaderInputShowButton() {
	return (
		<button onClick={clickHandler}>
			<img src={arrowDownIcon} alt="DropDown" />
		</button>
	);
}

function clickHandler(e) {
	e.preventDefault();
	Document.prototype.getElementById('personal-info').classList.toggle('show');
}
