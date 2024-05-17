import "./styles.scss";
import { motion } from "framer-motion";
import curriculum from "../../assets/files/curriculum-vitae.pdf";

function Available() {
  return (
    <motion.div className="available">
      <div className="available__lights">
        <div className="available__lights--light"></div>
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatDelay: 0.01,
          }}
          className="available__lights--light"
        ></motion.div>
      </div>
      <a href={curriculum} target="_blank" rel="noopener noreferrer">
        Available for Recruitment - View My CV
      </a>
    </motion.div>
  );
}

export default Available;
