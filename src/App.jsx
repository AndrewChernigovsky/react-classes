import React from 'react';
import './App.scss'
import ReactDOM from 'react-dom/client'
// import { Films } from './components/Films/Films.jsx'
// import { data } from './data.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Page_1 } from './pages/Page-1.jsx';
import { Main } from './pages/Main.jsx';
import { Layout } from './Layout/Layout.jsx';

class App extends React.Component {

	render() {
		return (
			<Router>
				<Layout>
					<Routes>
						<Route exact path="react-classes/" element={<Main />} />
						<Route path="react-classes/films" element={<Page_1 />} />
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</Layout>
			</Router>
		);
	}
}


const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);

export default App
