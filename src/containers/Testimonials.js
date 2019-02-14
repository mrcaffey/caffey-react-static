
import React from 'react'


const styles = {
  review: {
    color: 'blue',
    fontSize: '20px',
    fontStyle: 'italic'
    
  
  }

}



export default () => (
  
  <div>
    <h1>Reviews for Caffey, Inc.</h1>
    <br/>
    <img src="/images/siemens_logo.jpg" alt="siemens"/>
    <br/>
      <p style={ styles.review}>
        "We just completed what is arguably the most complex project we have ever done outside the US 
        – Definition CT and Aera MR Installations for Camp Humphreys, in Pyeongtaek, South Korea.
        The Army is consolidating Korean Operations, which led to a need for a new hospital
        at Camp Humphreys (40 miles south of Seoul). Siemens was awarded the gear and 
        DCS (Design & Construction Services – Siemens Turn Key Projects) - contracts to finish
        the 2 rooms. <b>Robert Hamm (Siemens DCS Director) selected Caffey Construction, a key DCS
        partner, to coordinate all on-site upfit activities over a 10 month period. Without Robert’s 
        team, and his oversight, this project would have been unbearable."</b>
      </p>
      <p>Siemens Healthineers Supply Chain Newsletter, Vol. 2, January 25, 2019</p> 
      <br/>
      <br/>
      <br/>
      <br/>
  </div>
)