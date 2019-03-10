import React, { Component } from 'react'
import axios from 'axios' 

export default class FlightList extends Component {

    state = {
        flights: []
      };

      componentDidMount() {
        this.getFlights();
        console.log(this.state.flights)
      }

    getFlights = () => {
        axios.get('/flights').then( res => 

            this.setState({ flights: res.data.flights})
        
        ); 
    }; 


  render() {
    return (
      <div>

        


        {this.state.flights.map((flight, i) => (
            <div key={i}> 

<div class="card">

<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="https://i.imgur.com/FSwhUom.png" alt="Placeholder image" />
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4"> {flight.airline} </p>
    </div>
  </div>

  <div class="content">
    Departure {flight.departs.airport}. <br /> 
    Arrival  {flight.arrives.airport}
    
    <a href="#">#css</a> <a href="#">#responsive</a>
    <br />
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </div>
</div>
</div>
  
               {/* click on flght, take me to booking page, props for number, flight arrival n departure */}
            {flight.departs.when}

            </div>
        )
        )}
      </div>
    )
  }
}
