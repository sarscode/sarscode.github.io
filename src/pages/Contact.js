import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <p className="content">
        Do you have an exciting idea or project you would like to share? Com'on
        let's bring it to live. <br />
        Perphaps, you would like to know more about me and what I do or maybe
        hire me. <br />
        You can DM me on <a href="https://twitter.com/sarscode">twitter</a>,
        send me a mail{" "}
        <a href="mailto:iamsarscode@gmail.com.">iamsarscode@gmail.com</a> or
        leave me a message by filling the form below.
      </p>
      <ContactForm />
    </main>
  );
}

export default Contact;
