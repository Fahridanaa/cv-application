/* eslint-disable react/prop-types */
export default function CustomInput({
	value,
	inputType,
	customLabel,
	isRecommended,
	onChange,
}) {
	return (
		<div id={customLabel} className="flex flex-col gap-1 m-2">
			<label className="text-lg font-medium">
				{customLabel}
				{isRecommended && <span className="text-sm text-red-400 ml-2"> recommended</span>}
			</label>
			<input type={ inputType.type } value={value} onChange={onChange} className="p-1 rounded-lg border border-[#ccc] text-lg"/>
		</div>
	);
}
