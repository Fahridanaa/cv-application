import '../../styles/TextInput.css';

// eslint-disable-next-line react/prop-types
export default function TextInput({ customLabel, isRecommended }) {
	return (
		<div id={customLabel}>
			<label>
				{customLabel} {isRecommended && 'Recomended'}
			</label>
			<input type="text" />
		</div>
	);
}
