import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={ store() }>
		<Router>
			<Switch>
				<Route path='/' component={ App } />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);