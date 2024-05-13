import { useRef } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";
import Mesh from "../Mesh";

function Section({
  id,
  mainTitle = false,
  number,
  title,
  defineHeight,
  children,
  meshUrl,
  meshFront,
  meshUnFixed,
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
  const numberY = useTransform(scrollYProgress, [0, 0.45, 0.75], [40, 0, -60]);
  const titleX = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.6],
    [-30, 0, 0, 30]
  );
  // --- OPACITY ---
  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.75],
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
  // --- WIDTH ---
  const sentenceBarWidth = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["20%", "0%"]
  );

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
          <>
            <motion.h1 style={{ opacity: mainTitleOpacity }}>
              <span className="section__title--subject section__title--subject--main">
                Johan Hauteville
              </span>
              <span className="section__title--subject section__title--subject--main">
                Developpeur
              </span>
              <span className="section__title--subject section__title--subject--main">
                FrontEnd
              </span>
            </motion.h1>
          </>
        ) : (
          <h2>
            <motion.span
              style={{ y: numberY, opacity: numberOpacity }}
              className="section__title--number"
            >
              {number}
            </motion.span>
            <motion.span
              style={{ x: titleX, opacity: titleOpacity }}
              className="section__title--subject"
            >
              {title}
            </motion.span>
          </h2>
        )}

        {mainTitle && (
          <>
            <motion.p
              style={{ opacity: sentenceOpacity }}
              className="section__title--sentence"
            >
              Basé à Montpellier
            </motion.p>
            <motion.div
              style={{ width: sentenceBarWidth }}
              className="section__title--sentence--bar"
            ></motion.div>
          </>
        )}
      </div>
      {children && (
        <motion.div
          style={{ opacity: childrenOpacity, display: childrenDisplay }}
          className="section__children"
        >
          {children}
        </motion.div>
      )}

      {meshUrl && (
        <motion.div
          style={{ opacity: childrenOpacity }}
          className="section__mesh"
        >
          <Mesh url={meshUrl} front={meshFront} isUnFixed={meshUnFixed} />
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
  meshUrl: PropTypes.string,
  meshFront: PropTypes.bool,
  meshUnFixed: PropTypes.bool,
};

export default Section;
