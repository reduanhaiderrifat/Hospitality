import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { singInUser, handleGoogle, handleTwitter } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [succes, setSuccess] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    setSuccess("");

    singInUser(email, password)
      .then(() => {
        setSuccess("Login successfully");
        toast.success("Login successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-[#5fcaeb]">
      <div className="flex justify-center pt-3 gap-2 flex-col">
        <a onClick={handleGoogle} className="btn mx-auto  w-1/3">
          <FcGoogle size={30} />
          Login with Google
        </a>
        <a onClick={handleTwitter} className="btn mx-auto w-1/3">
          <FaTwitter size={30} className="text-blue-500" />
          Login with Twitter
        </a>
      </div>
      <div className="divider">or</div>
      <div className="hero  ">
        <div className="hero-content lg:flex-row-reverse flex-col">
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/HrQsRPf/login.jpg)",
            }}
            className="text-center space-y-2 p-[30%] bg-no-repeat bg-contain lg:text-left"
          >
            <h1 className="text-3xl font-bold">Register </h1>
            <Link
              to="/register"
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
                Register
              </span>
              <span className="relative invisible">Register</span>
            </Link>
          </div>
          <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <h2 className=" text-center text-3xl font-bold">Login</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body  space-y-4"
            >
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
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </label>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#5fcaeb] hover:bg-[#3cb84c]">
                  Login
                </button>
                <Toaster />
                <p className="text-green-500 text-3xl font-bold">{succes}</p>
              </div>
              <p className="flex items-center">
                Do not have an account.Please
                <Link className="btn btn-link" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
