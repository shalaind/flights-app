import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 
import Book from "./Book";

export default class FlightList extends Component {
  state = {
    flights: []
  };

  componentDidMount() {
    this.getFlights();
    console.log(this.state.flights);
  }

  getFlights = () => {
    axios
      .get("/flights")
      .then(res => this.setState({ flights: res.data.flights }));
  };

  render() {
    return (
      <div>
        {this.state.flights.map((flight, i) => (
          <div key={i}>
            <div>
              <div class="card">
                <div class="card-content">
                  <div class="media columns">
                    <div class="column">
                      <div class="media-left">

                          <div class="columns"> 
                            <div class="column">
                            <img
                              class=" image is-48x48"
                              src="https://i.imgur.com/FSwhUom.png"
                              alt="Placeholder"
                            />
                            </div> 
                            <div class="column">
                              <p style={{ fontSize: "1rem" }} class="title is-4">
                            {flight.airline} <br />
                            <span style={{ fontSize: "1rem" }}>
                              Flight {flight.number}
                            </span>
                          </p>
                          </div>
                        </div> 
                      </div>
                    </div>

                    <div class="column">
                      <p> <strong> Departure </strong> {flight.departs.airport} </p> 
                      <p> <strong> Date </strong>  {flight.departs.when.slice(5, 10)} </p> 
                      <p> <strong> Time </strong> {flight.departs.when.slice(11, 16)} </p> 
                    </div>
                    <div class="column">
                    <p> <strong> Arrival </strong> {flight.arrives.airport} </p> 
                      <p> <strong> Date </strong>  {flight.arrives.when.slice(5, 10)} </p> 
                      <p> <strong> Time </strong> {flight.arrives.when.slice(11, 16)} </p> 
                    </div>
                    <div class="column">
                      <h1>${flight.cost}</h1> <br />


                      <button class="button is-danger"> <Link style={{color: "white"}} to={ `/book/${flight.airline}/${flight.number}/${flight.departs.airport}/${flight.arrives.airport}` }>Book</Link> </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
