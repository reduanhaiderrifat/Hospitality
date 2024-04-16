import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import Owner from "../components/Owner";
import Estate from "../components/Estate";
import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";

const Home = () => {
  const navigation = useNavigation();
  const [sliders, setslider] = useState([]);
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setslider(data));
  }, []);
  useEffect(() => {
    fetch("owner.json")
      .then((res) => res.json())
      .then((data) => setOwners(data));
  }, []);
  if (navigation.state === "loading")
    return (
      <div className="h-[calc(100vh-276px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="">
      <Helmet>
        <title>Hospitality_Home</title>
      </Helmet>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <Slider slider={slider}></Slider>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <Estate></Estate>
      </div>
      <div className="text-center my-8">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl font-bold"
        >
          <span className=" text-orange-500"> Owner</span> of Property
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        {owners.map((owner, idx) => (
          <Owner key={idx} owner={owner}></Owner>
        ))}
      </div>
    </div>
  );
};

export default Home;
