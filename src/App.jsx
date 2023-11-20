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
	const [personalInfoActive, setPersonalInfoActive] = useState(false);
	const [educationActive, setEducationActive] = useState(false);
	const [experienceActive, setExperienceActive] = useState(false);

	const handleTogglePersonalInfo = () => {
		setPersonalInfoActive(!personalInfoActive);
	};

	const handleToggleEducation = () => {
		setEducationActive(!educationActive);
	};

	const handleToggleExperience = () => {
		setExperienceActive(!experienceActive);
	};

	const name = useFormInput('');
	const address = useFormInput('');
	const phone = useFormInput('');
	const email = useFormInput('');

	return (
		<div id="App">
			<div id="edit-side">
				<div id="personal-info" className="formInput">
					<Header
						className="formHeader"
						title="Personal Info"
						id="personal-info-header"
						handleToggle={handleTogglePersonalInfo}
						isActive={personalInfoActive}
					/>
					<div
						id="personal-info-input"
						className={personalInfoActive ? 'show' : ''}>
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
				<div id="education" className="formInput">
					<Header
						className="formHeader"
						title="Education"
						id="education-header"
						handleToggle={handleToggleEducation}
						isActive={educationActive}
					/>
					<div
						id="education-input"
						className={educationActive ? 'show' : ''}></div>
				</div>
				<div id="Experience" className="formInput">
					<Header
						className="formHeader"
						title="Experience"
						id="experience-header"
						handleToggle={handleToggleExperience}
						isActive={experienceActive}
					/>
					<div
						id="experience-input"
						className={experienceActive ? 'show' : ''}></div>
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
