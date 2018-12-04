import React, { Component } from 'react';
import './App.css';
import Person from './person/Person'
import Child from './person/newChild';

class App extends Component {
  state = {
      persons:[
        {name : '李大妈',count:50},
        {name : '李大发',count: 80},
        {name : 'dads',count: 90},
        {name : '李大发111',count: 80},
        {name : 'dads111',count: 90},
        {name : 'dads111',count: 90},
      ],
     showPersons: null,
  }
  
  change = (newName) =>{
    this.setState({
      persons:[
        {name : newName,count:50},
        {name : '李大发111',count: 80},
        {name : 'dads111',count: 90}
      ]
    })
  }

  changeName = (event) =>{
    this.setState({
      persons:[
        {name : event.target.value,count:50},
        {name : '李大发111',count: 80},
        {name : 'dads111',count: 90},
        {name : 'dads111',count: 90},

      ]
    })
  }
  sayHello = (name) => {

    console.log(name)
  }
  switchNameHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person,index) => {
            return <Person 
            name = {person.name} 
            count = {person.count} 
            key = {index}
             />
            
          })
        }
        </div>
      )
        style.backgroundColor = "red";
    }
    // const classes = ["red","bold"].join(" ");
    const classes = [];
    if(this.state.persons.length >2){
      classes.push("red");
    }
    if(this.state.persons.length < 2){
      classes.push("bold");
    }
    return (
      
      <div>
          <div>手动阀手动阀</div>
          <p className = {classes.join(' ')}>hi!!!,nihao</p>
          <button onClick = {this.switchNameHandler} style = {style} >show/hide</button>
          {persons}

          <Child name = {this.sayHello.bind(this,this.state.persons[0].name)}/>
      </div>
      
    );

  }
}

export default App;
