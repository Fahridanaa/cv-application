/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './HeaderInput';

export default function CustomForm({ id, title, children }) {
	const [isActive, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div id={id} className="formInput">
			<Header
				className="formHeader"
				title={title}
				id={`${id}-header`}
				handleToggle={handleToggle}
				isActive={isActive}
			/>
			<div
				id={`${id}-input`}
				className={'inputSection ' + (isActive ? 'show' : '')}>
				{children}
			</div>
		</div>
	);
}
