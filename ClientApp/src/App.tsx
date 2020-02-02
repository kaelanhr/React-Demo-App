import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/W3-Components/HelloWorld';
import HelloUser from './Components/W3-Components/HelloUser';
import Ship from './Components/W3-Components/Ship';
import FavouriteColor from './Components/W3-Components/FavouriteColor';
import Container from './Components/W3-Components/UnmountedComponent';
import MyForm from './Components/W3-Components/FormExample';
import MultipleInputForm from './Components/W3-Components/MultipleInputForm';
import Game from './Components/TicTacTutorial/Game';
import Counter from './Components/ReactJS-Components/Counter';

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
				<FavouriteColor />
				<Container />
				<MyForm />
				<MultipleInputForm />
				<Game />
				<Counter />
			</div>
		</>
	);
}

export default App;
