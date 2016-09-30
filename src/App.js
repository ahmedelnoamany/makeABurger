import React, { Component } from 'react';
import ItemPicker from './ItemPicker'
import BuildArea from './BuildArea'
import logo from './logo.svg';
import './App.css';


const condiments = ['BUN']
class App extends Component {
  render() {
    return (
      <div className="App">
          <ItemPicker />
          <BuildArea condiments={condiments}/>
      </div>
    );
  }
}

export default App;
