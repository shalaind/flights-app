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
        <h1> list of all flights here </h1>

        {this.state.flights.map((flight, i) => (
            <div key={i}> 
               <div>
               {flight.airline} 
               </div> 
               <div>
                {flight.departs.airport}
               </div>
               <div>
                {flight.arrives.airport}
               </div>
            </div>
        )
        )}

    
      </div>
    )
  }
}
