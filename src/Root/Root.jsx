import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shard/Navbar";
import Footer from "../Shard/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Root = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading")
    return (
      <div className="h-[calc(100vh-276px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <div className="px-1 lg:px-4 mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
