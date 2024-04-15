import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shard/Navbar";
import Footer from "../Shard/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

AOS.init();
const Root = () => {
  const { user, loading } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state === "loading" || (!user && loading)) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="px-1 md:px-2 lg:px-4 mx-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
