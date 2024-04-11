import "./styles.scss";
import PropTypes from "prop-types";

function Section({ id, number, title, sentence }) {
  return (
    <section className="hero" id={id}>
      <div className="hero__title">
        <h1>
          {number}
          <br />
          {title}
        </h1>
        <p>{sentence}</p>
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  sentence: PropTypes.string,
};

export default Section;
