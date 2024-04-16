import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaPhotoVideo,
  FaTwitter,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    cteateUser,
    handleGoogle,
    handleTwitter,
    updateUser,
    handleFacebook,
    setReloade,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [succes, setSuccess] = useState("");
  const [accept, setAccept] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, confirmPassword, checkbox, username, photo } =
      data;
    setSuccess("");
    setError("");
    setpasswordError("");
    setAccept("");
    if (password != confirmPassword) {
      setpasswordError("Password did not match");
      toast.error("Password did not match");
      return;
    }
    if (password.length < 6) {
      setpasswordError("password should be at least 6 characters or longer");
      toast.error("password should be at least 6 characters or longer");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setpasswordError("Password should be at least one uppercase");
      toast.error("Password should be at least one uppercase");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setpasswordError("Password should be at least one lowercase");
      toast.error("Password should be at least one lowercase");
      return;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setpasswordError("Password should be at least one special character");
      toast.error("Password should be at least one special character");
      return;
    }
    if (!checkbox) {
      setAccept("Please accept our terms & conditions");
      toast.error("Please accept our terms & conditions");
      return;
    }
    cteateUser(email, password)
      .then(() => {
        updateUser(username, photo).then(() => {});
        toast.success("User create successfully!");
        setSuccess("User create successfully!");
        setReloade(true);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Hospitality_Register</title>
      </Helmet>
      <div className="bg-[#b49b48a8] min-h-[calc(100vh-276px)] ">
        <div className="flex justify-center pt-3 gap-2 flex-col">
          <button onClick={handleGoogle} className="btn mx-auto  lg:w-1/3">
            <FcGoogle size={30} />
            Login with Google
          </button>
          <button onClick={handleTwitter} className="btn mx-auto lg:w-1/3">
            <FaTwitter size={30} className="text-blue-500" />
            Login with Twitter
          </button>
          <button onClick={handleFacebook} className="btn mx-auto lg:w-1/3">
            <FaFacebook size={30} className="text-blue-500" />
            Login with Facebook
          </button>
        </div>
        <div className="divider">or</div>
        <div className="hero ">
          <div className="hero-content md:flex-row-reverse lg:flex-row-reverse flex-col">
            <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
              <h2 className=" text-center text-3xl font-bold">Register</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body space-y-2"
              >
                <div className="form-control ">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                      {...register("username", { required: true })}
                    />
                  </label>
                  {errors.username && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control ">
                  <label className="input input-bordered flex items-center gap-2">
                    <FaPhotoVideo />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Photo_URL"
                      {...register("photo")}
                    />
                  </label>
                </div>
                <div className="form-control ">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="email"
                      className="grow"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <span className="text-red-500">{error.split(":")[1]}</span>
                </div>
                <div className="form-control">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="grow"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </label>
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <span className="text-red-500">{passwordError}</span>
                </div>
                <div className="form-control">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={showPassword1 ? "text" : "password"}
                      className="grow"
                      placeholder="confirm-password"
                      {...register("confirmPassword", { required: true })}
                    />
                    <span onClick={() => setShowPassword1(!showPassword1)}>
                      {showPassword1 ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </label>
                  {errors.confirmPassword && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <div className="flex justify-between mt-3">
                    {/* <div className=""> */}
                    <label className="mt-3 flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        {...register("checkbox")}
                      />
                      <Link
                        to="/terms"
                        className="label-text-alt link link-hover"
                      >
                        Accept our Terms & conditions
                      </Link>
                    </label>
                  </div>
                  <p className="text-red-500">{accept}</p>
                  {/* </div> */}
                </div>
                {succes && <p className="text-green-500 text-3xl">{succes}</p>}

                <div className="form-control mt-6">
                  <button className="btn font-bold  bg-[#f5cd48] hover:bg-[#3cb84c]">
                    Register
                  </button>
                </div>
                <Toaster />
              </form>
              <p className="text-center">
                Have an account?Please
                <span>
                  <Link
                    className="btn no-underline  btn-link text-[#ff5395]"
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div
                style={{
                  backgroundImage: "url(https://i.ibb.co/HrQsRPf/login.jpg)",
                }}
                className="text-center p-24 md:p-32 lg:p-56 space-y-6 bg-no-repeat bg-contain lg:text-left"
              >
                <h1 className="text-3xl  font-bold">Login</h1>
                <Link
                  to="/login"
                  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute font-bold flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Login
                  </span>
                  <span className="relative invisible">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
