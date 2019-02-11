import React, { Component } from 'react';

class ContactForm extends Component{
    render(){
        return(
            <div style= {{ paddingTop: '100px' }} className="col-lg-4 offset-lg-4">
            <p>Please fill out the prefilled form on your preferred email account. Thank you!</p>
                    <a href="mailto:jp.buckley@caffeyinc.com?subject=New%20Caffey%20Inc.%20Inquiry&body=Name:__________%20%20%20Phone:__________%20%20%20Message:__________%20%20%20">Send us an Email</a>
           </div>
        )
    }
}

export default ContactForm; 
