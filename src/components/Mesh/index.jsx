import Spline from "@splinetool/react-spline";
import "./styles.scss";
import PropTypes from "prop-types";

function Mesh({ url, front = false, isUnFixed = true }) {
  return (
    <section
      className={
        isUnFixed ? "mesh-section mesh-section--unfixed" : "mesh-section"
      }
      style={{ zIndex: front ? 0 : -1 }}
    >
      {url ? (
        <Spline scene={url} />
      ) : (
        <Spline scene="https://prod.spline.design/BV8ttk33OIAjcE83/scene.splinecode" />
      )}

      {/* <Spline scene="https://prod.spline.design/Ks4ZfTrTvhEn6-Oo/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/VR5MWY2mK2RTU0jD/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/bYImTBS2o80001Jb/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/ikoqYRayXokkyhQq/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/FHpEczInByVdFfUc/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/YFB9BBaGuaulvKfj/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/eFYe-Fy773GZLJ4P/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/BV8ttk33OIAjcE83/scene.splinecode" /> */}
    </section>
  );
}

Mesh.propTypes = {
  url: PropTypes.string,
  fullwidth: PropTypes.bool,
  front: PropTypes.bool,
  isUnFixed: PropTypes.bool,
};

export default Mesh;
