import React, { Component } from 'react';
import './App.css';
import Passcode from "./containers/Passcode/Passcode";

class App extends Component {
  render() {
    return (
      <div className="App">
          <i>Password is <strong>1234</strong></i>
          <Passcode />
      </div>
    );
  }
}

export default App;
