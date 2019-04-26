import React from 'react'
import ImageGallery from 'react-image-gallery'


class Home extends React.Component {
  render() {
 
    const images = [
      {
        original: 'images/rsz_siemensmachine.jpg',
        
      },
      {
        original: 'images/signamachine.jpg',
      },
      {
        original: 'images/VA_Houston_MRI.jpg',
      },
      {
        original: 'images/LAlineac.jpg',
      }
    ]

  return (
    <React.Fragment>
    <ImageGallery items={images} />
    <h3>Specializing in Design-Build Medical Renovation
</h3>

<p>The majority of our projects are performed under subcontract with various diagnostic equipment vendors
  that supply medical equipment to healthcare facilities. This arrangement allows single-source payment by
  the owner (facility) and single point of responsibility for the duration of equipment install. The remaining
  percentage of our projects are performed under prime contract directly with the facility. This arrangement
  eliminates overhead charges, bond costs or management fees charged by some OEM's for turnkey acquisiition 
  of the equipment.
</p>
<h3>Caffey is the preferred contractor for the following OEM's (Original Equipment Manufacturers):</h3>
<ul>
  <li>General Electric</li>
  <li>Canon Medical</li>
  <li>Siemens Medical</li>
  <li>Philips Medical</li>
  <li>Varian Medical</li>
</ul>
<p>We have a 20,000 square foot multipurpose facility near our headquarters. This serves as a sheet metal and bonded material fabrication warehouse which
    and produces UL-Listed electrical raceway components and HVAC materials as well as being a large production staging center. 
</p>
<br/>
<br/>
<br/>
<br/>
</React.Fragment>
  );
  }
}
export default Home
