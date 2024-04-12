import { useLoaderData } from "react-router-dom";

import HotelCard from "../components/Hotel/HotelCard";

const Hotels = () => {
  const hotels = useLoaderData();
  return (
    <>
      <div className="text-center mx-auto  my-4">
        <h2 className=" text-4xl font-black flex gap-1 mb-3 justify-center">
          <p data-aos="fade-down" data-aos-duration="1000">
            Welcome Our
          </p>
          {""}

          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="text-orange-500"
          >
            Hotel
          </p>
        </h2>
        <span>
          <p data-aos="fade-left" data-aos-duration="2000">
            Nestled amidst the bustling streets of [City Name], the [Hotel Name]
            stands tall as a beacon of elegance and luxury. From the moment you
            step into the
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            grand lobby, you're greeted with an atmosphere of refined
            sophistication.The check-in process was seamless, with the staff
            displaying warmth and
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1200"
          >
            professionalism that set the tone for the entire stay. Upon entering
            the room, I was immediately struck by the meticulous attention to
            detail.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1800"
          >
            The decor exuded modern charm, with plush furnishings and tasteful
            accents creating a cozy yet upscale ambiance.One of the highlights
            of my stay was
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2400">
            undoubtedly the breathtaking view from my room.The hotel's amenities
            left nothing to be desired.Dining at the hotel was a culinary
            delight.
          </p>
        </span>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {hotels.map((hotel, index) => (
          <HotelCard key={hotel.id} hotel={hotel} index={index}></HotelCard>
        ))}
      </div>
    </>
  );
};

export default Hotels;
