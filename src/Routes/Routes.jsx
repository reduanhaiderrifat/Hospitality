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

import UpdateProfile from "../pages/UpdateProfile";
import PrivetRouter from "../privetRoute/PrivetRouter";
import ResortDetail from "../components/Resort/ResortDetail";
import Booking from "../components/Booking";
import GuestHouseDetails from "../components/GuestHouseCard/GuestHouseDetails";
import HotelDetails from "../components/Hotel/HotelDetails";
import MotelDetails from "../components/Motel/MotelDetails";

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
        path: "/hotel/:id",
        element: (
          <PrivetRouter>
            <HotelDetails></HotelDetails>
          </PrivetRouter>
        ),
        loader: () => fetch("/hotel.json"),
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
        loader: () => fetch("/hotel.json"),
      },
      {
        path: "/motels",
        element: <Motels></Motels>,
        loader: () => fetch("/motel.json"),
      },
      {
        path: "/motel/:id",
        element: (
          <PrivetRouter>
            <MotelDetails></MotelDetails>
          </PrivetRouter>
        ),
        loader: () => fetch("/motel.json"),
      },
      {
        path: "/resort",
        element: <Resort></Resort>,
        loader: () => fetch("/resort.json"),
      },
      {
        path: "/resort/:id",
        element: (
          <PrivetRouter>
            <ResortDetail></ResortDetail>
          </PrivetRouter>
        ),
        loader: () => fetch("/resort.json"),
      },
      {
        path: "/guesthouse",
        element: <GuestHouse></GuestHouse>,
        loader: () => fetch("/guesthouse.json"),
      },
      {
        path: "/guesthouse/:id",
        element: (
          <PrivetRouter>
            <GuestHouseDetails></GuestHouseDetails>
          </PrivetRouter>
        ),
        loader: () => fetch("/guesthouse.json"),
      },
      {
        path: "/booking",
        element: (
          <PrivetRouter>
            <Booking></Booking>
          </PrivetRouter>
        ),
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

      {
        path: "/update",
        element: (
          <PrivetRouter>
            <UpdateProfile></UpdateProfile>
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default router;
