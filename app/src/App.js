import React, { Component } from 'react';
import Preview from './modules/preview';
import Editor from './modules/editor';
import Legend from './modules/legend';
import defaultText from './modules/default-text';
import ICONS from './modules/icons';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: defaultText,
      icons: ICONS,
      collapsed: "true"
    }
    this.handleChange = this.handleChange.bind(this);
    this.getIcon = this.getIcon.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    
    this.setState({
      previewText: text
    })
  }

  getIcon() {
    return this.state.icons[this.state.collapsed];
  }

  collapse() {
    const collapse = this.state.collapsed === "true" ? "false" : "true";
    this.setState({
      collapsed: collapse
    });
  }

  render() {
    const { previewText } = this.state;

    return(
      <div id="container">
        <Preview text={previewText} />
        <Legend icon={this.getIcon} collapse={this.collapse} />
        <Editor val={previewText} handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
