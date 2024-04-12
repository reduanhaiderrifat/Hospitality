import { Helmet } from "react-helmet-async";
import { FaRegCircleQuestion, FaStar } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Matual from "../components/Matual";
import Sweet from "../components/Sweet";
import Marquee from "react-fast-marquee";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality_About</title>
      </Helmet>
      <div className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-3">
          <div className=" space-y-12">
            <h2 className=" text-5xl font-extrabold">About Real Estate</h2>
            <p className="text-2xl">
              We’re on a mission to start a conversation with you and your
              customers in this fast connected world. Let’s discover, build and
              grow your digital business.
            </p>
            <div className=" space-x-7">
              <a className="btn rounded-full text-xl font-bold text-white hover:py-8 bg-[#007873] hover:bg-[#007873]">
                <FaRegCircleQuestion />
                Why Us
              </a>
              <a className="btn rounded-full text-xl font-bold text-white hover:py-8 bg-[#ee5e3b] hover:bg-[#ee5e3b]">
                <IoCallOutline />
                Book Property
              </a>
            </div>
          </div>
          <img
            className="h-[400px] text-center mx-auto"
            src="https://i.ibb.co/XXcMCrj/handeshake.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center mt-12 gap-3">
          <div className=" space-y-9 shadow-2xl px-4 py-16">
            <h2 className=" text-5xl font-extrabold text-center">
              EFFECTIVE, EFFICIENT
            </h2>
            <p className="text-xl text-center">
              It is for these reasons that 90% of our clients from all over the
              world keep coming back! Just ask them!
            </p>
            <p className="text-xl text-center">
              BrandCurb is a unified communications platform that empowers
              business owners and promotes business growth through services that
              strengthen brand identity, and sustainably promote online presence
              to increase engagement. We offer services to help small business
              enterprises from branding, website development, to digital
              marketing—and everything else digital in between.
            </p>
          </div>
          <img
            className="h-[400px] text-center mx-auto"
            src="https://i.ibb.co/BtYMW4z/100k.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-24">
          <img
            className="h-[400px] hover:-mt-3 transition-all"
            src="https://i.ibb.co/qrsg4Z2/mission.webp"
            alt=""
          />
          <div className=" space-y-5">
            <h2 className=" text-5xl font-extrabold text-[#010313c4]">
              Our Mission
            </h2>
            <p className=" text-xl">
              Our mission is to provide our client what they need! We are a
              dynamic team of creative people.
            </p>
            <p className=" text-xl">
              No need to waste time and money on different agencies that
              inclusively focus on various aspects of your business because at
              BrandCurb, we’ve got everything you need—and so much more.
            </p>
            <p className=" text-xl">
              BrandCurb houses professionals who will closely work with you as
              you effectively, efficiently, and sustainably race towards
              achieving your company’s growth, at a reasonable cost for your
              budding venture. So it’s worry-free, hassle-free, and affordable!
            </p>
            <a className="btn rounded-2xl  text-xl font-bold text-white bg-[#ee5e3b] hover:bg-[#ee5e3b]">
              <IoCallOutline />
              Book Property
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/*  */}

          <Matual></Matual>
          <div className="text-center mx-auto space-y-12 static">
            <p className=" px-1 shadow-md w-2/3 text-center mx-auto">
              {" "}
              YOUR PROPERTY IN SUCCESS
            </p>
            <h2 className=" text-5xl font-bold text-center"> Why Business?</h2>
            <p className=" text-xl  text-center">
              Demand for office space can fluctuate based on economic conditions
              and employment trends. In recent years, there has been a growing
              trend toward flexible work arrangements, such as remote work and
              co-working spaces, which has influenced the demand for traditional
              office space. The retail sector has been undergoing significant
              changes due to the rise of e-commerce. Traditional
              brick-and-mortar retailers are adapting to compete with online
              sellers, leading to shifts in leasing patterns and property types.
              Some retail sectors, such as grocery-anchored centers and
              experiential retail spaces, have remained relatively resilient.
              The industrial real estate market has been buoyed by the growth of
              e-commerce and the need for logistics and distribution centers to
              support online retail operations. Demand for industrial
              properties, including warehouses and fulfillment centers, has been
              strong in many areas.
            </p>
            <a className="btn rounded-2xl w-full text-xl font-bold text-white bg-[#ee5e3b] hover:bg-[#ee5e3b]">
              <IoCallOutline />
              Book Property
            </a>
          </div>
          <Sweet></Sweet>
          {/*  */}
        </div>
        <div className="">
          <div className="text-center mx-auto space-y-16">
            <h2 className=" text-4xl mt-4 font-extrabold text-[#010313d0]">
              Accreditations
            </h2>
            <img
              className="mx-auto"
              src="https://i.ibb.co/dGGJT5M/agency.png"
              alt=""
            />
            <h2 className=" text-5xl mt-4 font-extrabold text-[#010313d0]">
              Our Clients
            </h2>
          </div>
          <div className="my-24">
            <Marquee pauseOnHover={true} speed={60}>
              <img src="https://i.ibb.co/dMJdPJk/angrybuchi.webp" alt="" />
              <img
                src="https://i.ibb.co/MpdH4P7/branreluaoandassociates.webp"
                alt=""
              />
              <img src="https://i.ibb.co/NW3g6HH/emperione-logo.webp" alt="" />
              <img src="https://i.ibb.co/txSvDVS/hvitality.webp" alt="" />
              <img src="https://i.ibb.co/1zgc39k/protostarter.webp" alt="" />
              <img src="https://i.ibb.co/fGvMr8j/slyr-games.webp" alt="" />
              <img src="https://i.ibb.co/7thDDqG/sogbuyan-logo.webp" alt="" />
              <img src="https://i.ibb.co/k2pjFc5/wsk.webp" alt="" />
            </Marquee>
          </div>
        </div>
        <div className="bg-[#010313] py-12 grid grid-cols-1 lg:flex items-center gap-8 ">
          <div className="text-white text-center mx-auto space-y-4 lg:w-1/3 p-4">
            <h2 className=" text-3xl font-bold ">
              Hear from Our Happy Clients
            </h2>
            <p>
              Take a look at the glowing reviews and success stories from some
              of our happy customers to see how BrandCurb can help your business
              achieve its goals.
            </p>
            <button className="btn bg-[#007873] hover:bg-[#007873] text-white text-xl rounded-full">
              Contact Us <PiContactlessPaymentFill />
            </button>
          </div>
          <div className="text-black bg-white text-center rounded-lg lg:mr-2 space-y-8 p-4 mx-auto w-2/3">
            <span className="flex justify-center">
              <FcGoogle size={40} />
            </span>
            <p>
              I had an outstanding experience working with RealSteatase for my
              recent property purchase. From the moment I reached out to inquire
              about listings to the day I got the keys to my new home, their
              team provided top-notch service every step of the way.First and
              foremost, I was impressed by their extensive knowledge of the
              local market. They took the time to understand my preferences and
              priorities, and they consistently presented me with options that
              aligned perfectly with what I was looking for. Their expertise
              helped streamline the entire process and made it much easier for
              me to find my dream home.
            </p>
            <span className="flex justify-center">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
            </span>
            <div>
              <p>Auday Gurney</p>
              <p>audaygurney@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
