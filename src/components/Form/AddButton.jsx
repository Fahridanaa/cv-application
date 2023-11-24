/* eslint-disable react/prop-types */
import AddIcon from '../../assets/add-circle-outline.svg';

export default function AddButton({ desc }) {
	return (
		<button
			className="add-button"
			style={{
				width: '30%',
				borderRadius: '15px',
				margin: '10px auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<img src={AddIcon} alt="Add Icon" style={{ width: '10%' }} />
			<p>{desc}</p>
		</button>
	);
}
