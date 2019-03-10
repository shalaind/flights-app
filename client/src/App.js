import React, { Component } from 'react';
import './App.css';
import FlightList from './components/FlightList';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div>
          <nav style={{backgroundColor:"#0024D8"}} class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://i.imgur.com/x3IwydX.png" alt="flight catch" />
              </a>
            </div>
          </nav>
          <div class="container">
          <h1 class="header"> Catch Flights, Not Feelings!</h1>
          <h1 class="subtitle">Choose Your Destination Below </h1> 
            <FlightList /> 
          </div> 
      </div>
    );
  }
}

export default App;
