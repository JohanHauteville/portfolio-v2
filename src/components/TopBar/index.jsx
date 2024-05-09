import "./styles.scss";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function TopBar() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const separatorHeight = useTransform(
    scrollY,
    [0, 250, 300, 650],
    [40, 0, 0, 150]
  );
  const separatorLeft = useTransform(
    scrollY,
    [255, 300],
    ["50%", "calc(20% + 50px)"]
  );
  const scrollTop = useTransform(scrollY, [100, 250], [25, 0]);
  const scrollOpacity = useTransform(scrollY, [150, 240], [1, 0]);

  return (
    <motion.div
      className="separator"
      style={{ height: separatorHeight, left: separatorLeft }}
      ref={ref}
    >
      <motion.p
        style={{ top: scrollTop, opacity: scrollOpacity }}
        className="separator__scroll"
      >
        Scroll
      </motion.p>
    </motion.div>
  );
}

export default TopBar;
