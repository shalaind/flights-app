import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import Book from './components/Book'; 

class App extends Component {
  render() {
    return (
      <div>
       <Router> 
          <div>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/book/:flightName/:flightNum/:departure/:arrival" component={Book} />
          </div>


       </Router>
      </div>
    );
  }
}

export default App;
