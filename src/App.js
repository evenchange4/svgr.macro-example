import React, { Component } from 'react';
import Logo from './Logo';
import Icons from './Icons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ color: '#61DAFB' }}>
            <Logo className="App-logo" height={80} />
          </div>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ fontSize: 48 }}>
          <Icons.DoneBlack fill="#61DAFB" />
          <Icons.Autorenew fill="#61DAFB" />
        </div>
      </div>
    );
  }
}

export default App;
