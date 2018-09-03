import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export class App extends Component {

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <NavComponent/>
          <Route exact="exact" path="/" component={  }/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>);
  }
}

export default App
