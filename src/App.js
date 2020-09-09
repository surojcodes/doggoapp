import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
