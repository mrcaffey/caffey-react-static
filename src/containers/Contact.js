import React, { Component } from 'react';

class ContactForm extends Component{
    render(){
        return(
            <div style= {{ paddingTop: '100px', paddingBottom: '100px'}}>
            <p>Please click to fill out this form on your email account. Thank you!</p>
                <a href="mailto:jp.buckley@caffeyinc.com?subject=New%20Caffey%20Inc.%20Inquiry&body=Name:%0D%0APhone:%0D%0A%0D%0AMessage:%0D%0A">Send us an Email</a>
                <br/>
                <br/>
                <br/>
                <br/>
           </div>
        )
    }
}

export default ContactForm; 
