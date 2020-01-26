import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ConnectionPage from './components/pages/ConnectionPage';
import AddPlayerPage from './components/pages/AddPlayerPage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={ConnectionPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/chess-masters" component={HomePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/add-player" component={AddPlayerPage} />
        </Switch>
      </div>
    );
  }
}

export default App;