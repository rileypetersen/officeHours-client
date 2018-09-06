import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { Dimmer, Loader, Transition } from 'semantic-ui-react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


export class App extends Component {
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
		return (
		this.state.isLoading ? 
			<Dimmer inverted active>
			<Loader inverted content='Loading' />
			</Dimmer>
		:
			<div className="App">
				Currently Under Construction
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ () => <Redirect to="/login" /> } />
						<Route path="/login" component={ Login }/>
						<Route path="/register" component={ Register }/>
						<Route path="/home" component={ Home }/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	};

};


export default App;
