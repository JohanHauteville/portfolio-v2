import "./styles.scss";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className="loading"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { delay: 2 },
        transitionEnd: {
          display: "none",
        },
      }}
    >
      <svg width="200" height="200">
        <motion.polygon
          initial={{ pathLength: 0, rotate: "90deg" }}
          animate={{
            pathLength: [
              0, 0.3, 0.36, 0.5, 0.65, 0.7, 0.75, 0.92, 0.96, 0.99, 1,
            ],
            transition: { duration: 1.9 },
          }}
          points="0 100,100 200,200 100,100 0"
          style={{ fill: "none", stroke: "white" }}
        />
      </svg>
      <p className="loading__text">Loading...</p>
    </motion.div>
  );
}

export default Loading;
