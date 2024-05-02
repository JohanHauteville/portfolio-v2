import "./styles.scss";
import picture from "../../assets/img/Montpellier-Map.png";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact">
      <ContactForm />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        src={picture}
        alt="montpellier"
        className="contact__picture"
      />
    </div>
  );
}

export default Contact;
