import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

function Contacts() {
  return (
    <div className="contacts">
      <NavbarComponent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contacts;
