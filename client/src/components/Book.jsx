import React, { Component } from 'react'
import axios from 'axios';

export default class Book extends Component {

    bookFlight = () => {
        axios.post('/book').then(post => {
            console.log('posted data', post)
        })
    }

  render() {
    return (
      <div>
      <form onClick={this.bookFlight}>
        
        <h1>Book a flight</h1>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="number" placeholder="Bags"/>
        <button>Book Now</button>
      </form>

      </div>
    )
  }
}
