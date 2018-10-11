import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { } from 'semantic-ui-react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import OrgList from './components/OrgList/OrgList';
import Profile from './components/Profile/Profile';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<Router>
				<div className="App">
				Currently Under Construction. Please visit our <a rel="noopener noreferrer" target="_blank" href="https://github.com/just-hey/officeHours-client">repo</a> on GitHub to learn more.
				<Switch>
					<Route exact path="/" component={ () => <Redirect to="/login" /> } />
					<Route exact path="/login" component={ Login }/>
					<Route exact path="/register" component={ Register }/>
					<Route exact path="/home" component={ Home }/>
					<Route exact path="/orgs" component={ OrgList }/>
					<Route exact path="/:name" component={ Profile }/>
				</Switch>
				</div>
			</Router>
		);
	};

};


export default App;
