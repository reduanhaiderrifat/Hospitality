import { useState } from "react";
import Proptypes from "prop-types";
const ClientCard = ({ client }) => {
  const [isSecretVisible, setIsSecretVisible] = useState(true);
  const [isclentKey, setIsClientKey] = useState(true);
  const [isclentURl, setIsClientURL] = useState(true);
  const {
    client_secret,
    image_url,
    project_id,
    client_name,
    client_certificate,
    client_key,
    client_x509_cert_url,
  } = client;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" space-y-3 border p-2 shadow-2xl rounded-lg"
    >
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-56 text-center mx-auto rounded-full"
        src={image_url}
        alt=""
      />

      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" cursor-pointer hover:underline"
        onClick={() => setIsSecretVisible(!isSecretVisible)}
      >
        Client_Secret :{" "}
        {isSecretVisible ? "click to see client secret" : client_secret}
      </p>
      <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        Project ID : {project_id}
      </p>
      <h2 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
        Client Name : {client_name}
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
        className="break-all"
      >
        certificate : {client_certificate}
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        className=" cursor-pointer hover:underline"
        onClick={() => setIsClientKey(!isclentKey)}
      >
        Client Key :{isclentKey ? "click to see client secret" : client_key}
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
        className="break-all"
        onClick={() => setIsClientURL(!isclentURl)}
      >
        Client_cert_URl :{" "}
        <span className=" cursor-pointer hover:underline">
          {" "}
          {isclentURl ? "click to see client cert_URl" : client_x509_cert_url}
        </span>
      </p>
    </div>
  );
};
ClientCard.propTypes = {
  client: Proptypes.object.isRequired,
};
export default ClientCard;
