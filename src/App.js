import React, { Component } from 'react';
import Textbox from './components/textbox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Personal Data:</h2>
        </div>
        <div>
        <Textbox/>
        </div>
      </div>
    );
  }
}

export default App;
