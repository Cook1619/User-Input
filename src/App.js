import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Matt', age: 32},
      {name:'Danelle', age: 33},
      {name: 'Ahmed', age: 31}
    ]
  }

  switchNameHandler = () => {
    //setState is a method on the react object which we imported at the top of the file
    this.setState({
        persons: [
          {name:'Mathew', age: 32},
          {name:'Danelle', age: 33},
          {name: 'Ahmed', age: 35}
        ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Testing from a react app</h2>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Kids</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
