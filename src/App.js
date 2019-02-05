import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Testing from a react app</h2>
        <Person name="Matt" age="32"/>
        <Person name="Danelle" age="33">My Hobbies: KIds</Person>
        <Person name="Ahmed" age="31"/>
      </div>
    );
  }
}

export default App;
