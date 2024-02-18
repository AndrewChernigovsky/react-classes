import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom/client'
// import { Films } from './components/Films/Films.jsx'
// import { data } from './data.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AllFilims } from './pages/AllFilims.jsx';
import { Main } from './pages/Main.jsx';

class App extends React.Component {

	render() {
		return (
			<Router basename='/react-classes'>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/films" element={<AllFilims />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Router>
		);
	}
}


const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);

export default App
