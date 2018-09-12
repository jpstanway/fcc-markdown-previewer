import React, { Component } from 'react';
import Preview from './modules/preview';
import Editor from './modules/editor';
import Legend from './modules/legend';
import LegendList from './modules/legend-list';
import defaultText from './modules/default-text';
import ICONS from './modules/icons';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewText: defaultText,
      legendList: <div></div>,
      icons: ICONS,
      collapsed: "legendClose"
    }
    this.handleChange = this.handleChange.bind(this);
    this.getIcon = this.getIcon.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
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

  toggleCollapse() {
    const toggle = this.state.collapsed === "legendClose" ? "legendOpen" : "legendClose";
    const list = toggle === "legendClose" ? <div></div> : <LegendList />;

    this.setState({
      legendList: list,
      collapsed: toggle
    });
  }

  render() {
    const { previewText, legendList, collapsed } = this.state;

    return(
      <div id="container">
        <Preview text={previewText} />
        <Legend icon={this.getIcon()} toggle={this.toggleCollapse} list={legendList} status={collapsed} />
        <Editor val={previewText} handler={this.handleChange} />
      </div>
    );
  }
}

export default App;
