import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'

import Login from './components/Login';
import Register from './components/Register';


export class App extends Component {

  render() {
    return (
      <div className="App">
        Currently Under Construction
        <BrowserRouter>
          <div className="App">
            <Switch>
				      <Route exact path="/" component={ () => <Redirect to="/login" /> } />
              <Route exact path="/login" component={ Login }/>
			  	    <Route exact path="/register" component={ Register }/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };

};


export default App;
