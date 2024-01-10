import Resume from './components/Resume/Resume';
import CustomInput from './components/Form/CustomInput';
import { useState } from 'react';
import ResumeHeader from './components/Resume/ResumeHeader';
import CustomForm from './components/Form/CustomForm';
import ResumeBody from './components/Resume/ResumeBody';
import AddButton from './components/Form/AddButton';
import EducationalForm from "./components/Form/EducationalForm.jsx";
import ExperienceForm from "./components/Form/ExperienceForm.jsx";

function App() {
	function useFormInput(initialValue) {
		const [value, setValue] = useState(initialValue);
		const handleChange = (event) => setValue(event.target.value);

		return {
			value,
			onChange: handleChange,
		};
	}

	const [educationCount, setEducationCount] = useState(0);
	const [experienceCount, setExperienceCount] = useState(0);

	const name = useFormInput('');
	const address = useFormInput('');
	const phone = useFormInput('');
	const email = useFormInput('');

	return (
		<div id="App" className="flex p-4 gap-16">
			<div id="edit-side" className="w-[50vw] flex flex-col gap-4">
				<CustomForm id="personal-info" title="Personal Info">
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
				</CustomForm>
				<CustomForm id="education" title="Education">
					{[...Array(educationCount)].map((_, i) => <EducationalForm key={i} />)}
					<AddButton desc="Add Education" onClick={() => setEducationCount(educationCount + 1)} />
				</CustomForm>
				<CustomForm id="experience" title="Experience">
					{[...Array(experienceCount)].map((_, i) => <ExperienceForm key={i} />)}
					<AddButton desc="Add Experience" onClick={() => setExperienceCount(experienceCount + 1)} />
				</CustomForm>
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
				<ResumeBody />
			</Resume>
		</div>
	);
}

export default App;
