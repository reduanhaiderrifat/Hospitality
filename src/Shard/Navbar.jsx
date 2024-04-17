import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import TextTransition, { presets } from "react-text-transition";
import { CiLogin } from "react-icons/ci";
import logo from "../../public/icon.webp";
import { FaEdit, FaPhotoVideo, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { logOut, user, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    if (localTheme) {
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const username = from.get("username");
    const photo = from.get("photo");
    updateUser(username, photo).then(() => {
      toast.success("Profile update successfully");
    });
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
      localStorage.setItem("theme", "synthwave");
      document.querySelector("html").setAttribute("data-theme", "synthwave");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme("light");
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  const TEXTS = ["Hotel", "Motel", "GuestHouse", "Resort"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="h-[167px] md:h-[258px] lg:h-[282px] bg-[#007873]  relative  mx-auto w-full mb-2">
      <h2 className=" absolute flex items-center mt-4  gap-5 left-1/4 lg:left-1/3 top-1/3 md:top-1/2 lg:top-1/2 text-white font-bold text-xl md:text-3xl lg:text-4xl">
        Welcome Our
        <span className="text-[#e0bb17f5] ">
          {" "}
          <TextTransition direction="down" springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>{" "}
        </span>
      </h2>{" "}
      <div className="join absolute -mt-2 top-2/3 md:mt-4 left-1/4 md:left-1/4 lg:left-1/3 w-1/3 lg:mt-4 p-2">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
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
                      target="_blank"
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
                      target="_blank"
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
                      target="_blank"
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
                      target="_blank"
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
              {user && (
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
              )}
              {user && (
                <li>
                  <NavLink
                    to="/client"
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
                    Client
                  </NavLink>
                </li>
              )}
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
                <NavLink
                  to="/comments"
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
                  Comments
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
                        onChange={handleToggle}
                        checked={theme === "synthwave"}
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
            className="btn btn-ghost font-medium  hover:bg-transparent lg:bg-transparent text-xl md:text-2xl lg:text-3xl"
          >
            <img className="w-6  lg:w-8 bg-transparent" src={logo} alt="" />
            <span className="text-[#f5cd48] text-xl md:text-2xl lg:text-2xl font-bold">
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
                    color: isActive ? "#f5cd48" : "#FFF",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className=" font-bold">
              <details>
                <summary className="text-white">Estate</summary>
                <ul className="p-2 z-10">
                  <li className=" font-bold">
                    <NavLink
                      to="/hotels"
                      target="_blank"
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
                      target="_blank"
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
                      target="_blank"
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
                      target="_blank"
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

            <li className=" font-bold">
              <NavLink
                to="/update"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "transparent" : "",
                    border: isActive ? "1px solid #f5cd48" : "",
                    color: isActive ? "#f5cd48" : "#FFF",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                UpdateProfile
              </NavLink>
            </li>

            {user && (
              <li className=" font-bold">
                <NavLink
                  to="/booking"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #f5cd48" : "",
                      color: isActive ? "#f5cd48" : "#FFF",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Booking
                </NavLink>
              </li>
            )}
            {user && (
              <li className=" font-bold">
                <NavLink
                  to="/client"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "transparent" : "",
                      border: isActive ? "1px solid #f5cd48" : "",
                      color: isActive ? "#f5cd48" : "#FFF",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Client
                </NavLink>
              </li>
            )}
            <li className=" font-bold">
              <details>
                <summary className="text-white">About</summary>
                <ul className="p-4 z-10">
                  <li>
                    <NavLink
                      to="/about"
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
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
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
                          border: isActive ? "1px solid #f5cd48" : "",
                          color: isActive ? "#f5cd48" : "",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className=" font-bold">
                    <NavLink
                      to="/comments"
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
                      Comments
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li className=" font-bold">
              <details>
                <summary className="text-white">Setting</summary>
                <ul className="p-2 z-10">
                  <li>
                    <label className="cursor-pointer grid place-items-center">
                      <input
                        type="checkbox"
                        checked={theme === "synthwave"}
                        onChange={handleToggle}
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
                className="hover:bg-transparent m-1"
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
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                    }
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <div className="hidden md:block lg:block ">
                    <details className="dropdown ">
                      <summary className="m-1 btn">
                        <div className="tooltip" data-tip="update profile!">
                          <FaEdit size={25} />
                        </div>
                      </summary>

                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-72">
                        <form onSubmit={handleUpdateProfile}>
                          <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                            <FaUser></FaUser>

                            <input
                              type="text"
                              name="username"
                              className="grow text-secondary"
                              placeholder="Username"
                            />
                          </label>
                          <label className="input input-bordered mb-4 flex text-secondary items-center gap-2">
                            <FaPhotoVideo size={20} />
                            <input
                              type="text"
                              name="photo"
                              className="grow text-secondary"
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
                  </div>
                  {/*  */}
                  <div className="space-y-3  divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl">
                        {user?.displayName || "user name undefind"}
                      </h2>
                      <p>{user?.email || "email not add"}</p>
                    </div>
                    <a onClick={handllogout} className="btn">
                      <div
                        className="tooltip tooltip-right"
                        data-tip="logout this user!"
                      >
                        <button className="flex items-center gap-1">
                          <CiLogin size={30} /> Logout
                        </button>
                      </div>
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
                className="btn mr-2 bg-[#5fcaeb] border-[#5fcaeb] hover:border-[#5fcaeb] hover:bg-transparent hover:text-[#5fcaeb]"
              >
                Login
              </Link>
              {/* <Link
                to="/register"
                className="btn border-none mr-2 bg-[#f5cd48] hover:border-[#f5cd48] hover:bg-transparent hover:text-[#f5cd48]"
              >
                Singup
              </Link> */}
            </>
          )}
          {user && (
            <button
              onClick={handllogout}
              className="lg:flex hover:bg-transparent hover:border-[#ffd23f] border-[#ffd23f] text-[#f5cd48] bg-transparent md:flex btn hidden  items-center gap-1"
            >
              <CiLogin size={30} /> Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
