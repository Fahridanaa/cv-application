/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './HeaderInput';

export default function CustomForm({ id, title, children }) {
	const [isActive, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div id={id} className="drop-shadow-sm border border-black p-2 rounded-xl bg-[#f5f5f5] text-xl font-medium">
			<Header
				className="flex items-center justify-between"
				title={title}
				id={`${id}-header`}
				handleToggle={handleToggle}
				isActive={isActive}
			/>
			<div
				id={`${id}-input`}
				className={`${isActive ? 'flex flex-col' : 'hidden'}`}>
				{children}
			</div>
		</div>
	);
}
