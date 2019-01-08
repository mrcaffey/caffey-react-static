
import React from 'react'
import Avatar from 'react-avatar';
//

const styles = {
  profile:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    maxWidth: '825px',
    flexWrap: 'wrap',
  },

  profile2:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginRight: '200px',
    maxWidth: '600px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  people:{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '175px',
    alignItems: 'center',
  },

  individual: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}


export default () => (
  <React.Fragment>
  <div>
    <h1>Our Mission Statement</h1>
    <ol>
      <li>To Honor God in All Transactions</li>
      <li>Be the most Professional Design-Build Renovation Firm in the Country</li>
      <li>Distance our corporation from the status quo and create the standard</li>
    </ol>
    <p>Caffey, Inc. has successfully completed over 750 medical imaging projects in its history.
      A healthcare imaging specialty background is a better model for imaging projects in that we work
      with hospital staff to construct the design we create. With 30 years in the industry, we've made
      many corrections and learned trade trends to better suit our design practices.
    </p>
    <p>We have an in-house design department with over 70 years of corporate history dealing with
       Diagnostic Imaging projects across the US as well as Internationally. Within this design group
       we have Mechanical and Electrical Professional Engineers that give us the ability to quickly
       ascertain the needs of the Customer and the Original Equipment Manufacturer(OEM). We have a
       well-experienced staff that are adept at site survey visits to determine the electrical, mechanical,
       structural and spacial layouts required. This is most critical in equipment swap-outs as well as interior
       reconstruction within a healthcare facility.
      </p>
      <p>Caffey, Inc. also proudly supports medical missions around the world.</p>
  </div>
<div>
<h1>Company History Timeline</h1>
<div>
<img src="/images/jerry.jpg" alt="jerrycaffey"/>
</div>
<ul>
  <li><b>1979:</b> Jerry Caffey graduates from Mississippi State University with degree in Construction Engineering Technology,
    begins work in design/build construction industry at Blount International, Ltd.
  </li>
  <li><b>1983:</b> Mr. Caffey serves Brice Building/Sun Division and J.A.D. Inc. as Project Manager</li>
  <li><b>1985:</b> Caffey Construction Company is Founded</li>
  <li><b>1986:</b> Caffey Construction presented opportunity to perform turnkey medical renovations for diagnostic imaging equipment</li>
  <li><b>1991:</b>Caffey Construction becomes Caffey, Inc., a Type S corporation composed of in-house architects, engineers & designers</li>
  <li><b>2002:</b> Caffey, Inc. comes into agreement with large US government Job Order Contract/Task Order Contract contractors performing
    Department of Defense contracts on military bases across the US and World.
  </li>
</ul>
<div style={{display: "grid"}}>
  <h1>Design Team</h1>
  <div style={styles.profile}>

    <div style={styles.people}>
      <h3>Alan Dubuisson</h3>
      <Avatar  skypeId="sitebase" size="150" round="20px"/>
      <p style={styles.individual}>Director of Design <br /> & Development</p>
    </div>

    <div style={styles.people}>
      <h3>Kirk Zarske, P.E.</h3>
    <Avatar  src="/images/kirk.jpg" size="150" round="20px"/>
      <p style={styles.individual}>Mechanical <br /> Design Manager</p>
    </div>

    <div style={styles.people}>
      <h3>Alan Young</h3>
    <Avatar  skypeId="sitebase" size="150" round="20px"/>
      <p>Architect</p>
    </div>

    <div style={styles.people}>
      <h3>Brad Patano, P.E.</h3>
    <Avatar  src="/images/bradp.jpg" size="150" round="20px"/>
      <p>Design Manager</p>
    </div>
    
  </div>
</div>

<h1>Production Managers</h1>
<div style={styles.profile2}>
<div style={styles.people}>
<h3>Robert Freese</h3>
<Avatar skypeId="sitebase" size="150" round="20px"/>
<p>Project Manager</p>
</div>
<div style={styles.people}>
<h3>Mike Everett</h3>
<Avatar skypeId="sitebase" size="150" round="20px"/>
<p style={styles.individual}>Project Developer/Electrical Division Manager</p>
</div>
<div style={styles.people}>
<h3>Lance Suchomel</h3>
<Avatar src="/images/lance.jpg" size="150" round="20px"/>
<p>Project Manager</p>
</div>
</div>

<h1>Administration</h1>
<h3>Sarah Loup</h3>
<h3>Jeanna Ritter</h3>
<h3>John Paul Buckley</h3>
<Avatar skypeId="sitebase" size="150" round="20px"/>
</div>
</React.Fragment>
)
