import { useState } from "react";
import "./contactForm.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h1>Contact</h1>
      <hr
        style={{
          color: "white",
          borderColor: "black",
          margin: "1rem 5rem ",
        }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          placeholder="Description"
          required
        />
        <input type="submit" value={"submit"} className="button" />
      </form>
    </div>
  );
}

export default ContactForm;
