import React, { Component } from "react";
import Input from "../components/Input";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Success!");
        this.setState({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(error => alert(error));

    event.preventDefault();
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="content"
        onSubmit={this.handleSubmit.bind(this)}
      >
<<<<<<< HEAD
        <input type="hidden" name="form-name" value="contact" />
=======
        <input type="hidden" name="contact" value="contact" />
>>>>>>> 0b22ccaa678f86b06e0bfc2481fd15ddef969feb
        <Input
          name="name"
          placeholder="Your Name"
          isRequired={true}
          value={name}
          onChange={this.handleInputChange.bind(this)}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          isRequired={true}
          value={email}
          onChange={this.handleInputChange.bind(this)}
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Your message"
          value={message}
          onChange={this.handleInputChange.bind(this)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ContactForm;
