// import Resume from './components/Resume';
import CustomInput from './components/Form/CustomInput';
import './styles/App.css';
import { useState } from 'react';

function App() {
	const [name, setName] = useState('');

	function setNameHandler(value) {
		setName(value);
	}

	return (
		<div id="App">
			<div id="edit-side">
				<div id="personal-info">
					<h1>Personal Info</h1>
					<CustomInput
						value={name}
						inputType={{ type: 'text' }}
						customLabel="Name"
						isRecommended
						inputHandler={setNameHandler}
					/>
					<CustomInput
						inputType={{ type: 'text' }}
						customLabel="Address"
						isRecommended
					/>
					<CustomInput
						inputType={{ type: 'tel' }}
						customLabel="Phone"
						isRecommended
					/>
					<CustomInput
						inputType={{ type: 'email' }}
						customLabel="Email"
						isRecommended
					/>
				</div>
				<div id="education"></div>
				<div id="experience"></div>
			</div>
			<h3>{name}</h3>
		</div>
	);
}

export default App;
