import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //Class components are referred to as containers, because they contain state and typically display the stateless components from within
  state = {
    persons: [
      { id: 33, name: "Matt", age: 32 },
      { id: 23, name: "Danelle", age: 33 },
      { id: 12, name: "Ahmed", age: 31 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // const [otherState, setOtherState] = useState('some other state');

  // console.log(personsState, otherState);

  deletePersonHandler = personIndex => {
    //by using slice at the end your simply creating a copy of the array and storing it in a variable
    // const persons = this.state.persons.slice;
    //This is the new ES6 way of copying an array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }
  togglePersonsHandler = () => {
    //saves the value of th showPersons variables state
    const doesShow = this.state.showPersons;
    //flips the value to true or false depending on the previous state
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
