import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Contacts() {
  return (
    <div className="contacts">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
