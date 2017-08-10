import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './module/autocomplete'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Autocomplete
          placeholder="Search..."
          list={['JavaScript', 'Node.js', 'HTML', 'CSS']}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
