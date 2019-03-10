import React, { Component } from 'react';
import '../App.css';
import FlightList from './FlightList';
import 'bulma/css/bulma.css'
import Header from './Header';
import Navbar from './Navbar';

class Homepage extends Component {
  render() {
    return (
      <div>
         <Navbar /> 
          <div class="container">
          <Header /> <br />
            <FlightList /> 
          </div> 
      </div>
    );
  }
}

export default Homepage;
