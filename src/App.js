import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import StickyFooter from 'react-sticky-footer';

import './app.css'

const App = () => (
  <Router>
    <div>
    <h1 style={{ fontSize: '4.3em', margin: '.3em', color: 'maroon', fontWeight: 'bold'}}>Caffey, Inc.</h1>
    <subtext style={{ fontsize: '.30em', margin: '.3em', fontWeight: '400'}}><i>Striving to be the best Design-Build Medical Renovation Firm in the Nation</i></subtext>
    <h3 style={{ textAlign: 'right', margin: '10px', color: 'maroon'}}>228.392.7465</h3>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="content">
        <Routes />

        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#800000",
            padding: "1rem",
            margin: "10px",
            marginLeft: "-30px",
            marginRight: "-30px"
          }}
        />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
