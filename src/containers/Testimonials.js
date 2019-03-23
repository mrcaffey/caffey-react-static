
import React from 'react'


const styles = {
  review: {
    color: 'blue',
    fontSize: '18px',
    fontStyle: 'italic'
    
  
  }

}



export default () => (
  <React.Fragment>
  <div>
      <h1><b>See what people have to say about us</b></h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img src="/images/siemens_logo.jpg" alt="siemens"/>
      <br/>
      <h2>Siemens Medical Solutions, USA.</h2>
      <br/>
      <br/>
      <p style={ styles.review}>
        "We just completed what is arguably the most complex project we have ever done outside the US 
        – Definition CT and Aera MR Installations for Camp Humphreys, in Pyeongtaek, South Korea.
        The Army is consolidating Korean Operations, which led to a need for a new hospital
        at Camp Humphreys (40 miles south of Seoul). Siemens was awarded the gear and 
        DCS (Design & Construction Services – Siemens Turn Key Projects) - contracts to finish
        the 2 rooms. <b>Robert Hamm (Siemens DCS Director) selected Caffey Construction, a key DCS
        partner, to coordinate all on-site upfit activities over a 10 month period. </b> Without Robert’s 
        team, and his oversight, this project would have been unbearable."
        </p>
        <p>Siemens Healthineers Supply Chain Newsletter, Vol. 2, January 25, 2019</p> 
        <br/>
      <p style={styles.review}>
          Hello Jerry and Caffey Const.
          <br/>
          Its not too often that we get some recognition for a job well done so I wanted to extend my heart felt appreciation to you and all of the team that worked on this project.
          I know it took a toll on me and I didn’t even do much of the work!! We had some trying moments working within a foreign country thousands of miles from home, trying to meet customer demands, and came thru it with great success because of all of your teams efforts to make this happen.
          I still remember the first notice we received that was a phone call with the Siemens sales and the customer asking us to have a proposals back to them in 24 hours site unseen.
          You guys awesome!!!!!!!!
          <br/>
          Thanks for all that you do.
      </p>
      <p>
          Robert Hamm, PMP
          Director of Design Construction Services,
          Solution Implementation (SI)
          Siemens Healthineers
      </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <img src="/images/keesler_logo.png" alt="keesler-logo" />
          <h2>Keesler Air Force Base Medical Center</h2>
          <br/>
          <br/>
        <img src="/images/keeslernews.jpg" alt="keesler-news-article" />
          <br/>
          <br/>  
    </div>
  </React.Fragment>
  
)