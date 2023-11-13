import Resume from './components/Resume';
import TextInput from './components/Form/TextInput';
import './styles/App.css';

function App() {
	return (
		<div id="App">
			<div id="edit-side">
				<div id="personal-info">
					<h1>Personal Info</h1>
					<TextInput customLabel="Name" isRecommended />
					<TextInput customLabel="Address" />
					<TextInput customLabel="Phone" />
					<TextInput customLabel="Email" />
				</div>
				<div id="education"></div>
				<div id="experience"></div>
			</div>
			<Resume></Resume>
		</div>
	);
}

export default App;
