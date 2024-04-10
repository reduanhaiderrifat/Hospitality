import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Motels from "../pages/Motels";
import Resort from "../pages/Resort";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import GuestHouse from "../pages/GuestHouse";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
      },
      {
        path: "/motels",
        element: <Motels></Motels>,
      },
      {
        path: "/resort",
        element: <Resort></Resort>,
      },
      {
        path: "/guesthouse",
        element: <GuestHouse></GuestHouse>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
