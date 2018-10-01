import React, { Component } from 'react';
// import {  } from 'react-router-dom';
// import { } from 'semantic-ui-react';

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
		setTimeout(() => this.setState({ isLoading: false }), 500);
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
