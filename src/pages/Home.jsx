import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Owner from "../components/Owner";

const Home = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetch("owner.json")
      .then((res) => res.json())
      .then((data) => setOwners(data));
  }, []);

  return (
    <div className="">
      <div className="">
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
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/JFsTRDT/hotel-3.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg ">
                  <h1 className="mb-5 text-5xl font-bold">Sunset Bay Hotel</h1>
                  <p className="mb-5">
                    Enjoy breathtaking views of the ocean at Sunset Bay Hotel.
                    Our luxurious rooms and top-notch amenities ensure a
                    memorable stay.
                  </p>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/b6b4GgC/hotel-2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Golden Sands Resort
                  </h1>
                  <p className="mb-5">
                    Golden Sands Resort offers a blend of elegance and comfort.
                    Relax on pristine beaches and indulge in world-class dining.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/rbCNYZ5/hotel-1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Mountain View Lodge
                  </h1>
                  <p className="mb-5">
                    Experience serenity amidst the mountains at Mountain View
                    Lodge. Our cozy rooms and scenic surroundings create a
                    perfect retreat.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/bg7299T/MOTEL2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">Palm Grove Motel</h1>
                  <p className="mb-5">
                    Experience comfort and affordability at Palm Grove Motel.
                    Conveniently located near major attractions with cozy rooms
                    and friendly service.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/2k8qq1t/MOTEL1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">Ocean Breeze Inn</h1>
                  <p className="mb-5">
                    Ocean Breeze Inn offers a relaxed atmosphere by the sea.
                    Enjoy simple comforts and easy access to the beach.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/0X0mKxY/MOTEL.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">Riverside Lodge</h1>
                  <p className="mb-5">
                    Stay close to nature at Riverside Lodge. Our riverside
                    location and rustic charm make for a memorable stay.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/BBYts2V/Guest2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Tranquil Haven Guesthouse
                  </h1>
                  <p className="mb-5">
                    Escape to the tranquility of Tranquil Haven Guesthouse.
                    Nestled amidst lush greenery, our cozy guesthouse offers a
                    peaceful retreat.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/1fbNtsS/Guest1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Harbor View Guesthouse
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://i.ibb.co/yyNx5Gb/Guest.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content  text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Forest Retreat Guesthous
                  </h1>
                  <p className="mb-5">
                    Embrace nature at Forest Retreat Guesthouse. Surrounded by
                    towering trees, experience a cozy and intimate getaway.
                  </p>
                  <Link
                    to="/terms"
                    href="#_"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#f5cd48] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center my-8">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl font-bold"
        >
          Owner
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
