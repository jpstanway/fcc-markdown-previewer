import React, { Component } from 'react';
import Editor from './modules/editor';
import Preview from './modules/preview';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Preview />
        <Editor />
      </div>
    );
  }
}

export default App;
