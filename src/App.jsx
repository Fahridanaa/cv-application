import Resume from './components/Resume/Resume';
import CustomInput from './components/Form/CustomInput';
import Header from './components/Form/HeaderInput';
import './styles/App.css';
import { useState } from 'react';
import ResumeHeader from './components/Resume/ResumeHeader';

function App() {
	function useFormInput(initialValue) {
		const [value, setValue] = useState(initialValue);
		const handleChange = (event) => setValue(event.target.value);

		return {
			value,
			onChange: handleChange,
		};
	}
	const [isActive, setIsActive] = useState(false);
	const handleToggle = () => {
		setIsActive(!isActive);
	};

	const name = useFormInput('');
	const address = useFormInput('');
	const phone = useFormInput('');
	const email = useFormInput('');

	return (
		<div id="App">
			<div id="edit-side">
				<div id="personal-info">
					<Header
						title="Personal Info"
						id="personal-info-header"
						handleToggle={handleToggle}
						isActive={isActive}
					/>
					<div
						id="personal-info-input"
						className={isActive ? 'show' : ''}>
						<CustomInput
							inputType={{ type: 'text' }}
							customLabel="Name"
							isRecommended
							{...name}
						/>
						<CustomInput
							inputType={{ type: 'email' }}
							customLabel="Email"
							isRecommended
							{...email}
						/>
						<CustomInput
							inputType={{ type: 'tel' }}
							customLabel="Phone"
							isRecommended
							{...phone}
						/>
						<CustomInput
							inputType={{ type: 'text' }}
							customLabel="Address"
							isRecommended
							{...address}
						/>
					</div>
				</div>
			</div>
			<Resume>
				{(name.value !== '' ||
					address.value !== '' ||
					phone.value !== '' ||
					email.value !== '') && (
					<ResumeHeader
						name={name.value}
						address={address.value}
						phone={phone.value}
						email={email.value}
					/>
				)}
			</Resume>
		</div>
	);
}

export default App;
