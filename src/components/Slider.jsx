import { Link } from "react-router-dom";
import Proptypes from "prop-types";
const Slider = ({ slider }) => {
  const { img, title, description } = slider;
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-sm md:text-lg lg:text-xl">{description}</p>
            <Link
              to="/about"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                About Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slider: Proptypes.object.isRequired,
};
export default Slider;
