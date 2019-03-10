import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Book extends Component {
  bookFlight = () => {
    axios.post("/book").then(post => {
      console.log("posted data", post);
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div style={{ width: "400px", paddingBottom: "20px" }} class="container">
          <div class="columns">
            <div class="column">
              <h1> <strong> Airline </strong> {this.props.match.params.flightName} </h1>

              <h1> <strong> Flight </strong> {this.props.match.params.flightNum} </h1>
            </div>
            <div class="column">
              <h1> <strong> Departure </strong> {this.props.match.params.departure} </h1>
              <h1> <strong> Arrival </strong> {this.props.match.params.arrival} </h1>
            </div>
          </div>
        </div>

        <div class="container" style={{ width: "70%" }}>
          <form onClick={this.bookFlight}>
            <input
              style={{ marginBottom: "20px" }}
              class="input"
              type="text"
              placeholder="First Name"
            />
            <input
              style={{ marginBottom: "20px" }}
              class="input"
              type="text"
              placeholder="Last Name"
            />
            <input
              style={{ marginBottom: "20px" }}
              class="input"
              type="number"
              placeholder="Bags"
            />
            <button class="button is-danger"> Book Now</button>
          </form>
        </div>
      </div>
    );
  }
}
