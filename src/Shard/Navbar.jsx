import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { CiLogin } from "react-icons/ci";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handllogout = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="navbar bg-base-200 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a className="font-bold">Categories:</a>
                <ul className="p-2 z-10">
                  <li>
                    <NavLink
                      to="/hotels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Hotels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/motels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Motels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/guesthouse"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      GuestHouse
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resort"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Resort
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a className="font-bold">Setting</a>
                <ul className="p-2 z-10">
                  <li>
                    <label className="cursor-pointer grid place-items-center">
                      <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                      />
                      <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                      </svg>
                      <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a
            onClick={handleRefresh}
            className="btn btn-ghost font-medium  text-xl md:text-2xl lg:text-3xl"
          >
            Hospitality
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#23BE0A" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  <li>
                    <NavLink
                      to="/hotels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Hotels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/motels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Motels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/guesthouse"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      GuestHouse
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resort"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Resort
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#23BE0A" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#23BE0A" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "#23BE0A" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <details>
                <summary>Setting</summary>
                <ul className="p-2 z-10">
                  <li>
                    <label className="cursor-pointer grid place-items-center">
                      <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                      />
                      <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                      </svg>
                      <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </label>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown z-10 dropdown-hover bg-transparent  dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="hover:bg-transparent   m-1"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                  }
                  alt=""
                  className="w-12 h-12 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2  rounded-box w-72"
              >
                <div className="flex flex-col bg-white shadow-lg justify-center max-w-xs p-6 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                    }
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <div className="space-y-3  divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl">
                        {user?.displayName || "user name undefind"}
                      </h2>
                      <p>{user?.email || "email not add"}</p>
                    </div>
                    <a onClick={handllogout} className="btn">
                      <CiLogin size={30} /> Logout
                    </a>
                    <span className="text-red-500">{error}</span>
                    <Toaster />
                  </div>
                </div>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn mr-2 bg-[#5fcaeb] hover:border-[#5fcaeb] hover:bg-transparent hover:text-[#5fcaeb]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn mr-2 bg-[#f5cd48] hover:border-[#f5cd48] hover:bg-transparent hover:text-[#f5cd48]"
              >
                Singup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
