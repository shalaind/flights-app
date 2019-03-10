import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
       <nav style={{backgroundColor:"#0024D8", marginBottom: "20px"}} class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <Link to="/">
                <img style ={{ padding: "10px 0 5px 10px"}} src="https://i.imgur.com/x3IwydX.png" alt="flight catch" width = "150px" />
              </Link>
            </div>
          </nav>
        
      </div>
    )
  }
}
