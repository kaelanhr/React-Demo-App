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
import Todo from './Components/ReactJS-Components/Todo';
import MarkdownEditor from './Components/ReactJS-Components/MarkdownEditor';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SimpleNavigationItem from './Components/SimpleNavigationItem';
import { MobXGlobals } from 'mobx/lib/internal';
import MobxCounter from './Components/ReactJS-Components/MobxCounter';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<ul>
					<SimpleNavigationItem linkUrl="" />
					<SimpleNavigationItem linkUrl="counter" />
					<SimpleNavigationItem linkUrl="forms" />
					<SimpleNavigationItem linkUrl="game" />
					<SimpleNavigationItem linkUrl="hello-world" />
					<SimpleNavigationItem linkUrl="markdown-editor" />
					<SimpleNavigationItem linkUrl="todo-list" />
					<SimpleNavigationItem linkUrl="container" />
				</ul>
				<Switch>
					<Route exact path="/">
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
						</div>
					</Route>
					<Route exact path="/counter">
						<Counter />
						<MobxCounter />
					</Route>
					<Route exact path="/forms">
						<MyForm />
						<MultipleInputForm />
					</Route>
					<Route exact path="/game">
						<Game />
					</Route>
					<Route exact path="/hello-world">
						<HelloWorld />
						<HelloUser name="Kaelan" />
					</Route>
					<Route exact path="/markdown-editor">
						<MarkdownEditor />
					</Route>
					<Route exact path="/todo-list">
						<Todo />
					</Route>
					<Route exact path="/container">
						<Container />
					</Route>
					<Route exact path="/ship">
						<Ship value="abc" />
					</Route>
					<Route exact path="/favourite-color">
						<FavouriteColor />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
