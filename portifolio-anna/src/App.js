import React, { Component } from 'react';
import './css/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Home2 from './components/Home2';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      darkMode: false,
      currentPage: 'Home'
    };
  }

  ChangeTabs = (event) => {
    this.setState({ currentPage: event });
  }

  ToggleDarkMode = (event) => {
    if (!this.state.darkMode) {
      document.documentElement.style.setProperty('--gradient-pseudo-opacity', 1);
    }
    else {
      document.documentElement.style.setProperty('--gradient-pseudo-opacity', 0);
    }
    
    this.setState({ darkMode: event.target.checked });
  };

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <input type="checkbox" id="dark-toggle" onClick={this.ToggleDarkMode.bind(this)} />
        <Header CurrentPage={this.state.currentPage} ChangeTabs={this.ChangeTabs} />
        <Main url={this.state.currentPage.split('_')[0]}>
          <div style={this.state.currentPage === 'Home' ? {width: '100%', height: '100%'} : {display: 'none', width: '100%', height: '100%'}}>
            <Home ChangeTabs={this.ChangeTabs} />
          </div>
          <div style={this.state.currentPage === 'Projects' ? {width: '100%', height: '100%'} : {display: 'none', width: '100%', height: '100%'}}>
            <Projects />
          </div>
          <div style={this.state.currentPage === 'Home_2' ? {width: '100%', height: '100%', display: 'flex'} : {display: 'none', width: '100%', height: '100%'}}>
            <Home2 ChangeTabs={this.ChangeTabs} />
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
