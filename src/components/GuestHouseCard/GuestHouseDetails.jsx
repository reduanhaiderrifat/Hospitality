import { FaChartArea, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaMapLocationDot, FaMoneyBill1 } from "react-icons/fa6";
import { SiInstatus } from "react-icons/si";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { setData } from "../../utils";

const GuestHouseDetails = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  const { id } = useParams();
  const detailed = details.find((detail) => detail.id == id);
  const {
    image,
    title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    rating,
  } = detailed;
  const handleBack = () => {
    navigate(-1);
  };
  const handleBooking = (detailed) => {
    setData(detailed);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:flex gap-9 bg-slate-200 p-3 rounded-lg">
        <div className="border flex w-[100%] justify-center">
          {" "}
          <img
            className="h-[300px] md:h-[400px] lg:h-[630px] "
            src={image}
            alt=""
          />
        </div>
        <div className="w-[100%]  md:mx-3 space-y-5">
          <h1 className=" text-4xl font-bold">{title}</h1>
          <h3 className="text-2xl font-bold text-orange-600">{segment_name}</h3>
          <hr />
          <p className="fond-mediun">
            <span className="text-2xl font-bold">Reveiw : {""}</span>

            {description}
          </p>
          <hr />
          <p className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xl font-bold">
              <FaMoneyBill1 />
              Price :
            </span>{" "}
            {price}
          </p>
          <div className=" ">
            <p className="flex flex-wrap gap-4 space-x-4">
              facilities:{" "}
              {facilities.map((facilitie, idx) => (
                <span
                  className="  cursor-pointer text-sky-500 hover:underline"
                  key={idx}
                >
                  {facilitie}
                </span>
              ))}
            </p>
          </div>
          <div className="grid grid-cols-1 md:flex  lg:flex justify-between items-center space-y-3">
            <div className="flex gap-7 items-center">
              <div className=" space-y-2">
                <p className="flex  items-center gap-1">
                  <SiInstatus />
                  Status
                </p>
                <p className="flex items-center gap-1">
                  <FaChartArea />
                  Area
                </p>
                <p className="flex items-center gap-1">
                  <FaMapLocationDot />
                  location
                </p>
                <p className="flex items-center gap-1">
                  <FaStar />
                  Rating
                </p>
              </div>
              <div className=" space-y-2">
                <p>: {status}</p>
                <p>: {area}</p>
                <p>: {location}</p>
                <p className="flex gap-2 items-center">
                  : {rating}
                  <span className="flex items-center">
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStarHalfAlt className="text-orange-500" />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:mr-4">
              <div>
                <button
                  onClick={() => handleBooking(detailed)}
                  className="btn  hover:text-white hover:bg-[#46ad31]  border-[#46ad31]
               text-black"
                >
                  Booking
                </button>
              </div>

              <div>
                <button
                  onClick={handleBack}
                  className="btn  text-white bg-[#50B1C9]
               hover:border-[#50B1C9] active:bg-red-500 lg:hover:bg-white hover:text-black"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestHouseDetails;
