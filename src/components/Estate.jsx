import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import EstateCars from "./EstateCars";

const Estate = () => {
  const navigation = useNavigation();
  const [logos, setLogo] = useState([]);

  useEffect(() => {
    fetch("logo.json")
      .then((res) => res.json())
      .then((data) => setLogo(data));
  }, []);
  if (navigation.state === "loading")
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="text-center my-4">
        <h2 className=" text-3xl font-bold flex items-center mb-3 justify-center gap-2">
          <p data-aos="fade-down" data-aos-duration="1000">
            {" "}
            Find Your
          </p>{" "}
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className=" text-orange-400"
          >
            Destiny
          </p>
        </h2>
        <span className="w-1/2 text-center mx-auto">
          <p
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            Owning a piece of property or finding the perfect place to rent
            isn’t just about
          </p>
          <p
            data-aos="fade-down"
            data-aos-delay="2000"
            data-aos-duration="1000"
          >
            {" "}
            securing a physical space; it’s about investing in your future and
            creating a sanctuary where dreams can thrive.
          </p>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-2/3 text-center mx-auto gap-4">
        {logos.map((logo, index) => (
          <EstateCars key={index} index={index} logo={logo}></EstateCars>
        ))}
      </div>
    </>
  );
};

export default Estate;
