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
  render() {
    let items = this.state.items
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
      </div>
    );
  }
}

export default App;
