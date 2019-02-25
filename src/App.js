import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import StickyFooter from 'react-sticky-footer';

import './app.css'

const App = () => (
  <Router>
    <div>
    <h1 style={{ fontFamily: 'Poppins',  fontSize: '4.3em', margin: '.3em', color: 'maroon', fontWeight: 'bold'}}>Caffey, Inc.</h1>
    <subtext style={{ fontsize: '.30em', margin: '.3em', fontWeight: '400'}}><i>Striving to be the best Design-Build Medical Renovation Firm in the Nation</i></subtext>
    <a href="tel:2283927465" style={{ fontSize: '1.5em', textAlign: 'right', display: 'block',  margin: '10px', color: 'maroon'}}>228-392-7465</a>
      <nav>
        <a href="/">Home</a>
        <a href to="/about">About Us</a>
        <a href to="/work">Our Work</a>
        <a href to="/testimonials">Testimonials</a>
        <a href to="/contact">Contact Us</a>
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
