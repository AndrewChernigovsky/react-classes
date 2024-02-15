import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom'
import { Films } from './components/Films/Films.jsx'
import { data } from './data.js';

class App extends React.Component {

	render() {
		return (<>
			<div id='app'><h2>Welcome</h2></div>
			<Films films={data} />
		</>

		);
	}
}


const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);

export default App
