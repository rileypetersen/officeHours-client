import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { Dimmer, Loader } from 'semantic-ui-react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import OrgList from './components/OrgList/OrgList';
// import OrgProfile from './components/Profile/OrgProfile';
// import OrgSessions from './components/OrgSessions'
// import OrgSession from './components/OrgSession'
// import OrgMeetings from './components/OrgMeetings'
// import OrgMeeting from './components/OrgMeeting'
// import UserProfile from './components/Profile/UserProfile';


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
		return (
			<Router>
				<div className="App">
				Currently Under Construction. Please visit our <a  rel="noopener noreferrer" target="_blank" href="https://github.com/just-hey/officeHours-client">repo</a> on GitHub to learn more.
				<Switch>
					<Route exact path="/" component={ () => <Redirect to="/login" /> } />
					<Route exact path="/login" component={ Login }/>
					<Route exact path="/register" component={ Register }/>
					<Route exact path="/home" component={ Home }/>
					<Route exact path="/orgs" component={ OrgList }/>
					<Route exact path="/org/:name" component={ OrgProfile }/>
					{/* <Route exact path="/org/:name/sessions" component={ OrgSessions }/>
					<Route exact path="/org/:name/session/:sid" component={ OrgSession }/>
					<Route exact path="/org/:name/session/:sid/meetings" component={ OrgMeetings }/>
					<Route exact path="/org/:name/session/:sid/meeting/:mid" component={ OrgMeeting }/>
					<Route exact path="/user/:name" component={ UserProfile }/> */}
				</Switch>
				</div>
			</Router>
		);
	};

};


export default App;
