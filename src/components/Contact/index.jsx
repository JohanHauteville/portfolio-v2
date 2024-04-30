import "./styles.scss";
// import Proptypes from "prop-types";
import picture from "../../assets/img/Montpellier-Map.png";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <input name="name" />
      </form>
      <img src={picture} alt="montpellier" className="contact__picture" />
    </div>
  );
}

// Contact.propTypes = {
//   children: Proptypes.node,
// };

export default Contact;
