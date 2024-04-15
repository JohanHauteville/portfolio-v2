import "./styles.scss";
import PropTypes from "prop-types";

function DisplayOnScroll({ actualValue = 0, minValue, maxValue, children }) {
  return (
    <>{actualValue > minValue && actualValue < maxValue ? children : <></>}</>
  );
}

DisplayOnScroll.propTypes = {
  actualValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  children: PropTypes.any,
};

export default DisplayOnScroll;
