import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //Class components are referred to as containers, because they contain state and typically display the stateless components from within
  state = {
    persons: [
      { name: "Matt", age: 32 },
      { name: "Danelle", age: 33 },
      { name: "Ahmed", age: 31 }
    ]
  };

  switchNameHandler = newName => {
    //setState is a method on the react object which we imported at the top of the file
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Danelle", age: 33 },
        { name: "Ahmed", age: 35 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Matt", age: 32 },
        { name: "Danelle", age: 33 },
        { name: event.target.value, age: 35 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h2>Testing from a react app</h2>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Mathew!!!")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Matt!!!!")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Kids
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
