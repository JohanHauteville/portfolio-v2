import { useRef } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";

function Section({
  id,
  mainTitle = false,
  number,
  title,
  sentence = undefined,
  defineHeight,
  children,
  childrenPosition = "undefined",
}) {
  // --- SCROLL DECLARATION ---
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  //===========================
  // ANIMATIONS BASED ON SCROLL
  //===========================

  // --- TRANSLATE ---
  // const sectionY = useTransform(scrollYProgress, [0, .5], )
  const numberY = useTransform(
    scrollYProgress,
    [0.05, 0.45, 0.75],
    [40, 0, -80]
  );
  // const titleY = useTransform(scrollYProgress, [0.1, 0.5], [0, -300]);
  // const titleX = useTransform(scrollYProgress, [0.1, 0.5], [0, -300]);
  const sentenceX = useTransform(scrollYProgress, [0.15, 0.65], [0, -300]);

  // --- OPACITY ---
  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const mainTitleOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [1, 1, 0]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const sentenceOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const childrenOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  // --- DISPLAY ---
  const childrenDisplay = useTransform(
    scrollYProgress,
    [0, 0.099, 0.1, 0.699, 0.7],
    ["none", "none", "flex", "flex", "none"]
  );

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Value:", latest);
  //   console.log(scrollYMemo);
  // });
  return (
    <section
      className="section"
      id={id}
      style={{ height: defineHeight }}
      ref={ref}
    >
      <div
        className={`section__title${mainTitle ? " section__title--main" : ""}`}
      >
        {mainTitle ? (
          <motion.h1 style={{ opacity: mainTitleOpacity }}>
            <span className="section__title--subject">{title}</span>
          </motion.h1>
        ) : (
          <h2>
            <motion.span
              style={{ y: numberY, opacity: numberOpacity }}
              className="section__title--number"
            >
              {number}
            </motion.span>
            <motion.span
              style={{ opacity: titleOpacity }}
              className="section__title--subject"
            >
              {title}
            </motion.span>
          </h2>
        )}

        {sentence && (
          <motion.p style={{ x: sentenceX, opacity: sentenceOpacity }}>
            {sentence}
          </motion.p>
        )}
      </div>
      {childrenPosition && (
        <motion.div
          style={{ opacity: childrenOpacity, display: childrenDisplay }}
          className="section__children"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  mainTitle: PropTypes.bool,
  number: PropTypes.string,
  title: PropTypes.string,
  sentence: PropTypes.string,
  defineHeight: PropTypes.string,
  children: PropTypes.node,
  childrenPosition: PropTypes.oneOf(["top", "bottom", "undefined"]),
};

export default Section;
