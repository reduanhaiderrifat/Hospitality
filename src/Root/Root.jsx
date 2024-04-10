import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar";
import Footer from "../Shard/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

AOS.init();
const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[calc(100vh-276px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="px-1 lg:px-4 mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
