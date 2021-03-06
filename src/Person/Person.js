import React from 'react';
import './Person.css';
//It important to use stateless components as much as possible, because stateless fucntions are clear about what they do, and it helps in troubleshooting code. They are dynamic as well by passing props, they don't manipulate application state. 

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;