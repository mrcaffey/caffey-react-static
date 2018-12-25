import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
    <h1 style={{ fontSize: '3.3em', margin: '.3em' }}>Caffey, Inc.</h1>
    <subtext style={{ fontsize: '.7em', margin: '10px'}}><i>Striving to be the best Design-Build Medical Renovation Firm in the Nation</i></subtext>
    <h3 style={{ textAlign: 'right', margin: '10px', color: 'maroon'}}>228.392.7465</h3>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
