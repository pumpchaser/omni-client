import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'

import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/address' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
