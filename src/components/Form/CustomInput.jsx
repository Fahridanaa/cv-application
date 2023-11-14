/* eslint-disable react/prop-types */
import '../../styles/CustomInput.css';

export default function CustomInput({
	value,
	inputType,
	customLabel,
	isRecommended,
	onChange,
}) {
	return (
		<div id={customLabel}>
			<label>
				{customLabel}
				{isRecommended && <span> recommended</span>}
			</label>
			<input type={{ inputType }} value={value} onChange={onChange} />
		</div>
	);
}
