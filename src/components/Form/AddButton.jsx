/* eslint-disable react/prop-types */
import AddIcon from '../../assets/add-circle-outline.svg';

export default function AddButton({ desc }) {
	return (
		<button className="add-button">
			{desc}
			<img src={AddIcon} alt="Add Icon" />
		</button>
	);
}
