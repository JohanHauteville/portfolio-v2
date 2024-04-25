import "./styles.scss";
import PropTypes from "prop-types";

function Section({
  id,
  mainTitle = false,
  number,
  title,
  sentence,
  defineHeight,
}) {
  return (
    <section className="section" id={id} style={{ height: defineHeight }}>
      <div className="section__title">
        {mainTitle ? (
          <h1>
            <span className="section__title--subject">{title}</span>
          </h1>
        ) : (
          <h2>
            <span className="section__title--number">{number}</span>
            <br />
            <span className="section__title--subject">{title}</span>
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
  defineHeight: PropTypes.string,
};

export default Section;
