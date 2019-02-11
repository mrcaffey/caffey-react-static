import React, { Component } from 'react';

import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name,   
                email, 
                message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4">
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    <div className="form-group">
                        <label htmlFor="name"><input type="text" className="form-control" id="name" />Name</label>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><input type="email" className="form-control" id="email" aria-describedby="emailHelp" />Email</label>
                      
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"><textarea className="form-control" rows="5" id="message"/>Message</label>
                
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 
