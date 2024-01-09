/* eslint-disable react/prop-types */
import AddIcon from '../../assets/add-circle-outline.svg';

export default function AddButton({ desc }) {
	return (
		<button
			className="w-1/4 rounded-xl flex items-center justify-center cursor-pointer border border-black self-center">
			<img src={AddIcon} alt="Add Icon" className="w-[10%]"/>
			<p>{desc}</p>
		</button>
	);
}
