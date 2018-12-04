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

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person,index) => {
            return <Person 
            name = {person.name} 
            count = {person.count} 
            key = {index} />
          })
        }


        {/* <Person 
        changeName = {this.changeName}
        name ={this.state.persons[0].name} 
        count = {this.state.persons[0].count}/>
        <Person 
        myclick = {this.change.bind(this,"米修mussu")} 
        name ={this.state.persons[1].name} 
        count = {this.state.persons[1].count}/>
        <Person 
        name ={this.state.persons[2].name} 
        count = {this.state.persons[2].count}/> */}
          </div>
      )
    }
    return (
      
      <div>
          <div>手动阀手动阀</div>
          <button onClick = {this.switchNameHandler}>show/hide</button>
          {persons}
          <Child name = {this.sayHello.bind(this,this.state.persons[0].name)}/>
          
          {/* {

            this.state.showPersons  === true ?
            <div>
          <Person 
          changeName = {this.changeName}
          name ={this.state.persons[0].name} 
          count = {this.state.persons[0].count}/>
          <Person 
          myclick = {this.change.bind(this,"米修mussu")} 
          name ={this.state.persons[1].name} 
          count = {this.state.persons[1].count}/>
          <Person 
          name ={this.state.persons[2].name} 
          count = {this.state.persons[2].count}/>
            </div>
            : null
          } */}
          
          {/* <Person 
          changeName = {this.changeName}
          name ={this.state.persons[0].name} 
          count = {this.state.persons[0].count}/>
          <Person 
          myclick = {this.change.bind(this,"米修mussu")} 
          name ={this.state.persons[1].name} 
          count = {this.state.persons[1].count}/>
          <Person 
          name ={this.state.persons[2].name} 
          count = {this.state.persons[2].count}/>
          </div> */}
          {/* <button onClick = {this.change.bind(this,'mussu')}>click me</button> */}

      </div>
      
    );
  }
}

export default App;
