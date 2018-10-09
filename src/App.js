import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './router';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Routing />
        </header>
      </div>
    );
  }
}

export default App;
