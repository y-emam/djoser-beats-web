import "./contactForm.css";

function ContactForm() {
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
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Title" required />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
