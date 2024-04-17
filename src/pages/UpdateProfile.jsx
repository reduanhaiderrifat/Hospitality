import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { RxCross2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updateUser, user } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const username = from.get("username");
    const photo = from.get("photo");
    updateUser(username, photo).then(() => {
      toast.success("Profile update successfully");
    });
  };
  return (
    <>
      <Helmet>
        <title>Hospitality_UpdateProfile</title>
      </Helmet>
      <div className="flex  h-screen md:h-screen lg:h-screen justify-center items-center flex-col">
        <div className="flex flex-col justify-center max-w-xl p-6 shadow-2xl py-9 bg-sky-700 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={user?.photoURL}
            alt=""
            className="w-44 h-44 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <h2 className="lg:text-xl md:text-lg  font-semibold text-xl break-all">
                {user?.email || "Email not add"}
              </h2>
            </div>
          </div>

          <button
            className="btn bg-sky-400 hover:bg-sky-600"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <FaEdit size={30} />
          </button>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h2 className="text-center mb-3 text-3xl font-bold">
                Update Profile
              </h2>
              <form onSubmit={handleUpdateProfile}>
                <label className="input input-bordered mb-4 flex items-center gap-2">
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
                    name="username"
                    className="grow"
                    placeholder="Username"
                  />
                </label>
                <label className="input input-bordered mb-4 flex items-center gap-2">
                  <input
                    type="text"
                    name="photo"
                    className="grow"
                    placeholder="Photo_URL"
                  />
                </label>
                <label>
                  <button className="btn w-full hover:bg-transparent hover:text-black text-white bg-green-500 font-bold">
                    Update
                  </button>
                </label>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">
                    <RxCross2 size={30} />
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
