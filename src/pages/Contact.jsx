import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality_Contact</title>
      </Helmet>
      <h2 className=" text-6xl text-center mt-24 mb-10">
        We’d love to hear from you
      </h2>
      <p className="text-center text-2xl">
        Whether you’re curious about features, a free trial, or even press—we’re
        ready to answer any and all questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex my-24 gap-10">
        <div className="border p-4 space-y-12">
          <h2 className="text-2xl font-semibold">Sales</h2>
          <p className="text-xl">
            Wondering if Unbounce is the right tool for your business? Chat with
            our team to see if there’s a fit.
          </p>
          <button className="btn border-[#5fcaeb] text-xl bg-white hover:border-none text-[#5fcaeb] hover:text-white hover:bg-[#f5cd48] ">
            Get in touch
          </button>
        </div>
        <div className="border p-4 space-y-12">
          <h2 className="text-2xl font-semibold">Support</h2>
          <p className="text-xl">
            Need a hand using Unbounce or managing your account? Chat with a
            real, live human or self-serve using our Help Center.
          </p>
          <button className="btn border-[#5fcaeb]  text-xl bg-white hover:border-none text-[#5fcaeb] hover:text-white hover:bg-[#f5cd48]">
            Get support
          </button>
        </div>
        <div className="border p-4 space-y-12">
          <h2 className="text-2xl font-semibold">Media</h2>
          <p className="text-xl">
            We love working with journalists to share compelling stories. Send
            us a note and our PR and Communications Manager will be in touch.
          </p>
          <button className="btn border-[#5fcaeb]  text-xl bg-white hover:border-none text-[#5fcaeb] hover:text-white hover:bg-[#f5cd48]">
            Get in touch
          </button>
        </div>
        <div className="border p-4 space-y-12">
          <h2 className="text-2xl font-semibold">Memberships</h2>
          <p className="text-xl">
            We’re into co-marketing with awesome brands. Fill out the form here,
            and our Partnerships Manager will circle back.
          </p>
          <button className="btn border-[#5fcaeb]  text-xl bg-white hover:border-none text-[#5fcaeb] hover:text-white hover:bg-[#f5cd48]">
            Let’s chat
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
