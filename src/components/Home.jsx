import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Dimmer, Loader, Transition } from 'semantic-ui-react';

import NavBar from './DashBoard/NavBar';
import Footer from './DashBoard/Footer';



export class Home extends Component {
  constructor(props) {
    super(props)
		this.state = {
			// isLoading: true
		}
	}

	componentDidMount() {
		// mocks api call...
		// setTimeout(() => this.setState({ isLoading: false }), 500);
	}

	render() {
		return (
			<div className="home-desktop">
				<NavBar />
				<Footer />
			</div>
		);
	};

};


export default Home;
