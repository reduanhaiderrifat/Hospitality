import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality_Booking</title>
      </Helmet>
      <div className="h-[calc(100vh-276px)] flex items-center justify-center">
        <div className="text-center space-y-4">
          {" "}
          <h2 className=" text-3xl">No Booking Available!</h2>
          <Link
            to="/"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Back to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Empty;
