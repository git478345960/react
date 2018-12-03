import React  from 'react';


const person = (props) => {
        return (
            <div>
                <p onClick = {props.myclick}>{props.name}</p>
                <p>{props.count}</p>
                <input onChange = {props.changeName} defaultValue = {props.name}></input>
            </div>
        );
    }



export default person;