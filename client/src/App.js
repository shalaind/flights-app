import React, { Component } from 'react';
import './App.css';
import FlightList from './components/FlightList';

class App extends Component {
  render() {
    return (
      <div>
       <h1>flight catcher nav bar</h1>
       <h1>Header</h1> 
        <FlightList /> 
       
      </div>
    );
  }
}

export default App;
