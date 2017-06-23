import React, { Component } from 'react';
import people from './components/People.js'
import cover from './photos/cover.jpg'
import guess from './photos/guess.jpeg'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: people,
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
          Start guessing features to eliminate people:
        </p>
        <div>
          {this.state.people.map((element, index)=>{
            return element.img
          })}
        </div>
        <img src ={guess} height={250} width={250}/>
        {console.log(this.state.selectedPerson.img)}
        {this.state.selectedPerson.img}
      </div>
    );
  }
}

export default App;
