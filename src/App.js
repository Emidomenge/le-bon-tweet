import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {'Welcome to React'}
            <FontAwesomeIcon icon={faCoffee} />
          </h2>
        </div>
        <p className="App-intro">
          {'To get started, edit '}
          <code>src/App.js</code>
          {'and save to reload.'}
        </p>
      </div>
    );
  }
}

export default App;
