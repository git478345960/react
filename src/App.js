import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/Person'

class App extends Component {
  state = {
      persons:[
        {name : '李大妈',count:50},
        {name : '李大发',count: 80},
        {name : 'dads',count: 90}
      ]
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
        {name : 'dads111',count: 90}
      ]
    })
  }
  render() {
    return (

      <div>
          <div>手动阀手动阀</div>
          <Person 
          changeName = {this.changeName}
          name ={this.state.persons[0].name} count = {this.state.persons[0].count}/>
          <Person myclick = {this.change.bind(this,"米修mussu")} name ={this.state.persons[1].name} count = {this.state.persons[1].count}/>
          <Person name ={this.state.persons[2].name} count = {this.state.persons[2].count}/>
          <button onClick = {this.change.bind(this,'mussu')}>click me</button>
      </div>
      
    );
  }
}

export default App;
