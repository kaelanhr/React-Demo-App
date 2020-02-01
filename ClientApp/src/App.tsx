import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import HelloUser from './Components/HelloUser';
import Ship from './Components/Ship';

const App: React.FC = () => {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>My name is Kaelan Reece</p>
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
				</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
				</a>
				</header>
				<HelloWorld />
				<HelloUser name="Kaelan" />
				<Ship value="abc" />
			</div>
		</>
	);
}

export default App;
