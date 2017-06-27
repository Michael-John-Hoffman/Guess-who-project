import React, { Component } from 'react';
import people from './components/People.js'
import cover from './photos/cover.jpg'
import guess from './photos/guess.jpeg'
import DropdownMenu from './components/DropdownMenu.js';
import _ from 'lodash';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: people,
      attributes: [],
    }
  }
  componentWillMount() {
    this.setState({
  selectedPerson: this.state.people[Math.floor(Math.random()*this.state.people.length)]
    })
}
 
  render() {

    return (
      <div className="App">
        <div className="App-header">


          <h1>Guess Who!</h1>
            <img src ={cover} height={200} width={300}/>
        </div>
        <p className="App-intro">
         <DropdownMenu updateSelectAttributes={this.updateSelectAttributes.bind(this)}>
         </DropdownMenu>
        </p>
        <div className="ListOfPeople">
          {_.map(_.filter(this.state.people,this.sortAttributes.bind(this)),(element)=>{
            return <div className ="Portrait" onClick={() =>this.comparePeople(element.id)}>{element.img} </div>
          })}
        </div>
        <img src ={guess} height={200} width={200}/>
      </div>
    );
  }
updateSelectAttributes(clickedValue){
  this.setState({
    attributes: this.state.attributes.concat(clickedValue),
  }) 
}
sortAttributes(person){
 return _.every(this.state.attributes, attribute=>person[attribute] === this.state.selectedPerson[attribute]  )
}
comparePeople(id){
  if(this.state.selectedPerson.id === id){
    alert('You got it right!')
  } else{
    alert('You got it wrong!')
  }
}
}
export default App;
