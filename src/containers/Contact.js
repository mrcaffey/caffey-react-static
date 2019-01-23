
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
//


class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [ e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }


  render() {
    return (
    <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
      <FormGroup>
      <h3>This page is under construction! Send an email to jpbuckley@caffeyinc.com for new inquiries.</h3>
        <Label for="name">Name:</Label>
        <Input
          type="text" required
          name="name"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          onChange={this.handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="message">Message:</Label>
        <Input
          type="textarea"
          name="message"
          onChange={this.handleChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    )
  }
}

export default Contact