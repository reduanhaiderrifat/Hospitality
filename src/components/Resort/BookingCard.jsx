import Proptypes from "prop-types";
import { FaMapLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const BookingCard = ({ booking, handleDelete }) => {
  const {
    image,
    title,
    segment_name,
    price,
    status,
    facilities,
    location,
    id,
    type,
  } = booking;

  return (
    <div>
      <div className=" p-6 relative rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <p className="flex items-center justify-between text-xl">
            {" "}
            <span className="block text-xl font-medium tracking-widest uppercase dark:text-violet-600">
              {segment_name}
            </span>
            <span className="font-bold">{type}</span>
          </p>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>

        <p className="flex flex-wrap gap-4  dark:text-gray-800">
          <span className="flex items-center gap-1">
            <MdCategory /> facilities :
          </span>{" "}
          {facilities.map((facilitie, idx) => (
            <span
              className="  cursor-pointer text-sky-500 hover:underline"
              key={idx}
            >
              #{facilitie}
            </span>
          ))}
        </p>
        <p className="flex items-center gap-1">
          <FaMapLocationDot />
          Location : {location}
        </p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <FaMoneyCheckDollar />
            {status}
          </p>
          : <p>{price}</p>
        </div>
        <div
          onClick={() => {
            handleDelete(id);
          }}
          className=" absolute top-1 right-0 hover:bg-red-500 bg-sky-400 p-2 rounded-full"
        >
          <RiDeleteBin6Fill />
        </div>
      </div>
    </div>
  );
};
BookingCard.propTypes = {
  booking: Proptypes.object.isRequired,
  handleDelete: Proptypes.func.isRequired,
};
export default BookingCard;
