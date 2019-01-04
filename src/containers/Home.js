import React from 'react'
import { withSiteData } from 'react-static'
//

export default withSiteData(() => (
  <React.Fragment>
    <h1 style={{ textAlign: 'center' }}>Caffey, Inc. Banner Image</h1>
    <div className="banner">
      <img src= "images/caffeytripler.jpg" alt="caffeyinc" width="88%" height="800px" margin="0" backgroundSize="cover"/>
    </div>
  <h3>Caffey, Inc. is a Design-Build Medical Renovation Firm specializing in turnkey diagnostic imaging renovation projects.
      Our corporate office is located in D'Iberville, Mississippi.
  </h3>

  <h3>The majority of our projects are performed under subcontract with various diagnostic equipment vendors
    that supply medical equipment to healthcare facilities. This arrangement allows single-source payment by
    the owner (facility) and single point of responsibility for the duration of equipment install. The remaining
    percentage of our projects are performed under prime contract directly with the facility. This arrangement
    eliminates overhead charges, bond costs or management fees charged by some OEM's for turnkey acquisiition 
    of the equipment.
  </h3>
  <h3>Caffey is the preferred contractor for the following OEM's (Original Equipment Manufacturers):</h3>
  <ul>
    <li>General Electric</li>
    <li>Toshiba Medical</li>
    <li>Siemens Medical</li>
    <li>Philips Medical</li>
    <li>Varian Medical</li>
  </ul>
  <h3>We have a 20,000 square foot multipurpose facility near our headquarters. This serves as a sheet metal and bonded material fabrication warehouse which
      and produces UL-Listed electrical raceway components and HVAC materials as well as being a large production staging center. 
  </h3>
</React.Fragment>
))


