
import './App.css';
import bio from './bio.json'

function App() {
	return (
		<div className="App">
			{JSON.stringify(bio)}
		</div>
	);
}

export default App;
