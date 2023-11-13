/* eslint-disable react/prop-types */
import '../../styles/TextInput.css';

export default function CustomInput({
	value,
	inputType,
	customLabel,
	isRecommended,
	inputHandler,
}) {
	return (
		<div id={customLabel}>
			<label>
				{customLabel}
				{isRecommended && <span> recommended</span>}
			</label>
			<input
				type={{ inputType }}
				value={value}
				onChange={(event) => inputHandler(event.target.value)}
				{...(isRecommended && { required: true })}
			/>
		</div>
	);
}
