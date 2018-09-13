import React, { Component } from 'react';
import Preview from './modules/Preview';
import Editor from './modules/Editor';
import Legend from './modules/Legend';
import defaultText from './modules/default-text';
import LegendStatus from './modules/legend-status';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: defaultText,
      legend: LegendStatus,
      toggleLegend: "closed"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLegend = this.handleLegend.bind(this);
    this.toggleLegend = this.toggleLegend.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;

    this.setState({
      previewText: text
    });
  }

  handleKeyDown(event) {
    let text = event.target.value;
    const spaces = '  ';
    const startPos = event.target.selectionStart;
    const endPos = event.target.selectionEnd;

    text = text.substring(0, startPos) + spaces + text.substring(endPos, text.length);
  }

  handleLegend() {
    const status = this.state.toggleLegend;
    return this.state.legend[status];
  }

  toggleLegend() {
    const legend = this.state.toggleLegend === "opened" ? "closed" : "opened";
    
    this.setState({
      toggleLegend: legend
    });
  }

  render() {
    const { previewText } = this.state;

    return(
      <div id="container">
        <Preview text={previewText} />
        <Legend toggle={this.toggleLegend} legend={this.handleLegend()} />
        <Editor val={previewText} handler={this.handleChange} keydown={this.handleKeyDown} />
      </div>
    );
  }
}

export default App;
