import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

import { CiLogin } from "react-icons/ci";
import logo from "../../public/icon.webp";
import { FaPhotoVideo, FaEdit } from "react-icons/fa";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { logOut, user, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const username = from.get("username");
    const photo = from.get("photo");
    updateUser(username, photo);
    console.log(username, photo);
  };
  const handllogout = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/D4KZfqZ/navbar.jpg)",
      }}
      className="h-[267px] md:h-[358px] lg:h-[382px]  bg-no-repeat relative object-cover bg-contain "
    >
      <h2 className=" absolute left-1/4 lg:left-1/3 top-1/3 md:top-1/2 lg:top-1/2 text-white font-bold text-xl md:text-3xl lg:text-4xl">
        Welcome Our <span className="text-[#e0bb17f5] ">resort</span>
      </h2>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn focus:bg-slate-500 bg-slate-300 text-black lg:hidden"
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
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className=" font-bold">
                <NavLink
                  to="/"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a className="font-bold">Estate:</a>
                <ul className="p-2 z-10">
                  <li>
                    <NavLink
                      to="/hotels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "",

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
                          color: isActive ? "#23BE0A" : "",
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
                          color: isActive ? "#23BE0A" : "",
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
                          color: isActive ? "#23BE0A" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Resort
                    </NavLink>
                  </li>
                </ul>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/update"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive ? "transparent" : "",
                        border: isActive ? "1px solid #23BE0A" : "",
                        color: isActive ? "#23BE0A" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    UpdateProfile
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/booking"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "",
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
                      color: isActive ? "#23BE0A" : "",
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
                      color: isActive ? "#23BE0A" : "",
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
            className="btn btn-ghost font-medium bg-[#01031379] lg:bg-transparent text-xl md:text-2xl lg:text-3xl"
          >
            <img className="w-6 lg:w-10  bg-transparent" src={logo} alt="" />
            <span className="text-secondary lg:text-[#f5cd48] font-bold">
              Hospitality
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <li className=" font-bold">
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #f5cd48" : "",
                    color: isActive ? "#f5cd48" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className=" font-bold">
              <details>
                <summary>Estate</summary>
                <ul className="p-2 z-10">
                  <li className=" font-bold">
                    <NavLink
                      to="/hotels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Hotels
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/motels"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Motels
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/guesthouse"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      GuestHouse
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/resort"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
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
            {user && (
              <li className=" font-bold">
                <NavLink
                  to="/update"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  UpdateProfile
                </NavLink>
              </li>
            )}
            {user && (
              <li className=" font-bold">
                <NavLink
                  to="/booking"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #23BE0A" : "",
                      color: isActive ? "#23BE0A" : "",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Booking
                </NavLink>
              </li>
            )}
            <li className=" font-bold">
              <details>
                <summary>About</summary>
                <ul className="p-4 z-10">
                  <li>
                    <NavLink
                      to="/about"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      About us
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/terms"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Terms & Conditions
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/contact"
                      style={({ isActive, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          backgroundColor: isActive ? "transparent" : "",
                          border: isActive ? "1px solid #23BE0A" : "",
                          color: isActive ? "#23BE0A" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li className=" font-bold">
              <details>
                <summary>Setting</summary>
                <ul className="p-2 z-10">
                  <li>
                    <label className="cursor-pointer grid place-items-center">
                      <input
                        type="checkbox"
                        onChange={handleToggle}
                        // value="synthwave"
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
        <div className="navbar-end md:mr-5">
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
                <div className="flex flex-col text-white bg-gray-600 shadow-lg justify-center max-w-xs p-6 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                    }
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <details className="dropdown">
                    <summary className="m-1 btn">
                      <FaEdit size={25} />
                    </summary>

                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
                      <form onSubmit={handleUpdateProfile}>
                        <label className="input input-bordered mb-4 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 text-black opacity-70"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                          </svg>

                          <input
                            type="text"
                            name="username"
                            className="grow text-black"
                            placeholder="Username"
                          />
                        </label>
                        <label className="input input-bordered mb-4 flex items-center gap-2">
                          <FaPhotoVideo size={20} color="black" />
                          <input
                            type="text"
                            name="photo"
                            className="grow text-black"
                            placeholder="Photo_URL"
                          />
                        </label>
                        <label>
                          <button className="btn w-full hover:bg-transparent hover:text-black text-white bg-green-500 font-bold">
                            Update
                          </button>
                        </label>
                      </form>
                    </ul>
                  </details>
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
                className="btn mr-2 bg-[#5fcaeb] border-none hover:border-[#5fcaeb] hover:bg-transparent hover:text-[#5fcaeb]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn border-none mr-2 bg-[#f5cd48] hover:border-[#f5cd48] hover:bg-transparent hover:text-[#f5cd48]"
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
