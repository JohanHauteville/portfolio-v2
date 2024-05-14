import "./styles.scss";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function ContactMessage({ display, setDisplay, isError = true }) {
  const successMessage = "✅   Message envoyé   👍";
  const failedMessage = "🚨   Echec de l'envoi   😱";

  setTimeout(() => {
    setDisplay(false);
  }, 3000);
  return (
    <AnimatePresence>
      {display && (
        <motion.div
          className="contact-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="contact-message__container">
            <p className="contact-message__message">
              {isError ? failedMessage : successMessage}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ContactMessage.propTypes = {
  display: PropTypes.bool,
  isError: PropTypes.bool,
  setDisplay: PropTypes.func,
};

export default ContactMessage;
