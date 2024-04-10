import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar";
import Footer from "../Shard/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Root = () => {
  return (
    <div className="px-4 mx-auto">
      <Navbar></Navbar>
      <div className="h-[calc(100vh-276px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
