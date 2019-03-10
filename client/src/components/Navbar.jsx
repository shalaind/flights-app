import React, { Component } from 'react'

export default class Navbar extends Component {
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
        
      </div>
    )
  }
}
