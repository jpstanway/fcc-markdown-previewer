import React, { Component } from 'react';
import Preview from './modules/preview';
import Editor from './modules/editor';
import Legend from './modules/legend';
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
    this.handleLegend = this.handleLegend.bind(this);
    this.toggleLegend = this.toggleLegend.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    
    this.setState({
      previewText: text
    });
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
        <Editor val={previewText} handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
