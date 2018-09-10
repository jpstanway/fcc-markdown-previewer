import React, { Component } from 'react';
import Editor from './modules/editor';
import Preview from './modules/preview';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;

    this.setState({
      previewText: text
    })
  }

  render() {
    const { previewText } = this.state;

    return (
      <div id="container">
        <Preview text={previewText} />
        <Editor handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
