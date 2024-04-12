import { useLoaderData } from "react-router-dom";
import GuestHouseCard from "../components/GuestHouseCard/GuestHouseCard";

const GuestHouse = () => {
  const houses = useLoaderData();
  return (
    <>
      <div className="text-center mx-auto  my-4">
        <h2 className=" text-4xl font-black flex gap-1 mb-3 justify-center">
          <p data-aos="fade-down" data-aos-duration="1000">
            Welcome Our
          </p>
          {""}

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="text-orange-500"
          >
            Guest-House
          </p>
        </h2>
        <span>
          <p data-aos="fade-down" data-aos-duration="2000">
            Upon stepping into this charming guesthouse, one is immediately
            greeted by an ambiance of warmth and comfort. Nestled amidst lush
            greenery, this
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
            quaint retreat offers a perfect blend of modern amenities and rustic
            charm, making it an ideal escape from the hustle and bustle of
            everyday life.
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="1200"
          >
            The exterior exudes a welcoming charm with its traditional
            architecture adorned with flowering vines, inviting guests to
            explore the serene surroundings. As
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1800">
            you step inside, the interior unfolds with tasteful décor and cozy
            furnishings, creating an inviting atmosphere for relaxation and
            rejuvenation.
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2400">
            The guesthouse features well-appointed bedrooms, each thoughtfully
            designed to provide utmost comfort and tranquility.
          </p>
        </span>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {houses.map((house, index) => (
          <GuestHouseCard
            key={house.id}
            house={house}
            index={index}
          ></GuestHouseCard>
        ))}
      </div>
    </>
  );
};

export default GuestHouse;
