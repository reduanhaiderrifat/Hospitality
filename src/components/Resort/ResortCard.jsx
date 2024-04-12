import Proptypes from "prop-types";

import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";
const ResortCard = ({ resort, index }) => {
  const { title, image, status, rating, id } = resort;
  return (
    <div>
      <div
        data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
        data-aos-duration="1000"
        className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
      >
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
            <div className="dark:text-gray-800 flex justify-between items-center">
              <p className="text-xl">
                <span className="font-bold">Status : $</span> {""}
                {status}
              </p>
              <p className="flex items-center gap-1">
                <span className="flex items-center ">
                  <MdOutlineStar className="text-orange-400" />
                  <MdOutlineStar className="text-orange-400" />
                  <MdOutlineStar className="text-orange-400" />
                  <MdOutlineStar className="text-orange-400" />
                  <MdStarHalf className="text-orange-400" />
                </span>
                {rating}
              </p>
            </div>
          </div>
          <Link
            to={`/resort/${id}`}
            className="flex  btn bg-sky-400 hover:bg-green-600 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Veiw Property
          </Link>
        </div>
      </div>
    </div>
  );
};

ResortCard.propTypes = {
  resort: Proptypes.object.isRequired,
  index: Proptypes.any.isRequired,
};
export default ResortCard;
