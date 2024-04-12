import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const EstateCars = ({ logo, index }) => {
  const { icon, description, to } = logo;
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={index % 2 !== 0 && "1000"}
    >
      <Link
        to={to}
        className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800"
      >
        <img
          src={icon}
          alt="cooming soon"
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
EstateCars.propTypes = {
  logo: Proptypes.object.isRequired,
  index: Proptypes.any.isRequired,
};
export default EstateCars;
