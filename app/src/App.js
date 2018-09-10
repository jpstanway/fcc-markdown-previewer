import React, { Component } from 'react';
import Preview from './modules/preview';
import Editor from './modules/editor';
import defaultText from './modules/default-text';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: defaultText
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

    return(
      <div id="container">
        <Preview text={previewText} />
        <Editor val={previewText} handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
