import Resume from './components/Resume';
import CustomInput from './components/Form/CustomInput';
import Header from './components/Form/HeaderInput';
import './styles/App.css';
import { useState } from 'react';

function App() {
	function useFormInput(initialValue) {
		const [value, setValue] = useState(initialValue);
		const handleChange = (event) => setValue(event.target.value);

		return {
			value,
			onChange: handleChange,
		};
	}

	const name = useFormInput('');
	const address = useFormInput('');
	const phone = useFormInput('');
	const email = useFormInput('');

	return (
		<div id="App">
			<div id="edit-side">
				<div id="personal-info">
					<form>
						<Header title="Personal Info" id="personal-info-header" />
						<div id="personal-info-input">
							<CustomInput
								inputType={{ type: 'text' }}
								customLabel="Name"
								isRecommended
								{...name}
							/>
							<CustomInput
								inputType={{ type: 'text' }}
								customLabel="Address"
								isRecommended
								{...address}
							/>
							<CustomInput
								inputType={{ type: 'tel' }}
								customLabel="Phone"
								isRecommended
								{...phone}
							/>
							<CustomInput
								inputType={{ type: 'email' }}
								customLabel="Email"
								isRecommended
								{...email}
							/>
						</div>
					</form>
				</div>
			</div>
			<Resume />
		</div>
	);
}

export default App;
