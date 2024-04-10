import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className=" h-screen bg-[#0103138e] flex gap-3 flex-col justify-center items-center">
        <div className="w-96 space-y-4 bg-white shadow-lg p-5 rounded-lg">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className=" ">
            Looks like you have followed a broken link or entered a URL that
            does not exist on this site.
          </p>
          <Link
            to="/"
            href="#_"
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Back to site</span>
            </span>
          </Link>
          <hr className="my-5 " />
          <p>
            If this is your site, and you were not expecting a 404 for this
            path, please visit to Vercel{" "}
            <span className="hover:underline font-medium text-[#054861]">
              <Link target="_blank" to="https://vercel.com/guides">
                {" "}
                ' page not found support guide'
              </Link>{" "}
            </span>
            for troubleshooting tips.
          </p>
        </div>
      </div>
      ;
    </div>
  );
};

export default NotFound;