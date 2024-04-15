import "./styles.scss";
import PropTypes from "prop-types";

function Section({ id, mainTitle = false, number, title, sentence }) {
  return (
    <section className="hero" id={id}>
      <div className="hero__title">
        {mainTitle ? (
          <h1>
            {/* <span className="hero__title--number">{number}</span>
            <br /> */}
            <span className="hero__title--subject">{title}</span>
          </h1>
        ) : (
          <h2>
            <span className="hero__title--number">{number}</span>
            <br />
            <span className="hero__title--subject">{title}</span>
          </h2>
        )}

        {sentence && <p>{sentence}</p>}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  mainTitle: PropTypes.bool,
  number: PropTypes.string,
  title: PropTypes.string,
  sentence: PropTypes.string,
};

export default Section;
