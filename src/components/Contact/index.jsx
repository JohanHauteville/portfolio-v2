import "./styles.scss";
// import Proptypes from "prop-types";
import picture from "../../assets/img/Montpellier-Map.png";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <ContactForm />
      <img src={picture} alt="montpellier" className="contact__picture" />
    </div>
  );
}

// Contact.propTypes = {
//   children: Proptypes.node,
// };

export default Contact;
