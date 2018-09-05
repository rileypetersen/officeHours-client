import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { Dimmer, Loader, Transition } from 'semantic-ui-react';

import Login from './components/Login';
import Register from './components/Register';


export class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        isLoading: true
    }
  }

  componentDidMount() {
    // mocks api call...
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    return (
      this.state.isLoading ? 
        <Dimmer inverted active >
          <Loader inverted content='Loading' />
        </Dimmer>
      :
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
