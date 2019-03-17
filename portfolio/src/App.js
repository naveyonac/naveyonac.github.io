import React, { Component } from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='Nav'>
            <h3>Evan Canoy</h3>
            <h4>Web Developer</h4>
          </div>
        </header>
        <body>
          <About />
          <Projects />
          <Contact />
        </body>
      </div>
    );
  }
}

export default App;
