import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { Dimmer, Loader } from 'semantic-ui-react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}
	
	componentDidMount() {
		// mocks api call...
		setTimeout(() => this.setState({ isLoading: false }), 500);
	}

	render() {
		// temp dimmer and load spinner
		return (
		this.state.isLoading ? 
			<Dimmer inverted active>
				<Loader inverted content="Loading" />
			</Dimmer>
		:
			<div className="App">
				Currently Under Construction. Please visit our <a  rel="noopener noreferrer" target="_blank" href="https://github.com/just-hey/officeHours-client">repo</a> on GitHub to learn more.

				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ () => <Redirect to="/login" /> } />
						<Route exact path="/login" component={ Login }/>
						<Route exact path="/register" component={ Register }/>
						<Route exact path="/home" component={ Home }/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	};

};


export default App;
