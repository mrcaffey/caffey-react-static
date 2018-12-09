import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
    <h1 style={{ fontSize: '2.5em'  }}>Caffey, Inc.</h1>
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
