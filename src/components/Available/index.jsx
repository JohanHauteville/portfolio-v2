import "./styles.scss";
import { motion } from "framer-motion";

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
      <p>Available now for recruitment</p>
    </motion.div>
  );
}

export default Available;
