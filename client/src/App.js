import React, { Component } from 'react';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
