import { useLoaderData } from "react-router-dom";
import ResortCard from "../components/Resort/ResortCard";
import { Helmet } from "react-helmet-async";
const Resort = () => {
  const resorts = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Hospitality_Resort</title>
      </Helmet>
      <div className="text-center mx-auto space-y-2 my-4">
        <h2 className=" text-4xl font-black flex gap-1 mb-3  justify-center">
          <p data-aos="fade-up" data-aos-duration="1000">
            Welcome Our
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="text-orange-500"
          >
            Resort
          </p>
        </h2>
        <span>
          <p data-aos="fade-down" data-aos-duration="2000">
            Welcome to Resort, where relaxation meets adventure in the heart of
            a tropical paradise. Nestled along the pristine shores of a secluded
            island, our resort
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
            offers an unparalleled escape from the hustle and bustle of everyday
            life. As you step onto our grounds, you will be greeted by lush,
            manicured gardens and
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="1200"
          >
            swaying palm trees, creating a tranquil oasis that instantly soothes
            the soul. Our accommodations range from luxurious beachfront villas
            to charming
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1800">
            bungalows, each designed with comfort and style in mind. Wake up to
            breathtaking views of the crystal-clear turquoise waters or the
            verdant tropical
          </p>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2400">
            gardens up outside your window.
          </p>
        </span>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {resorts.map((resort, index) => (
          <ResortCard
            key={resort.id}
            resort={resort}
            index={index}
          ></ResortCard>
        ))}
      </div>
    </>
  );
};

export default Resort;
