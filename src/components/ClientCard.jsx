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
    <div className=" space-y-3 border p-2 shadow-2xl rounded-lg">
      <img
        className="w-56 text-center mx-auto rounded-full"
        src={image_url}
        alt=""
      />

      <p
        className=" cursor-pointer hover:underline"
        onClick={() => setIsSecretVisible(!isSecretVisible)}
      >
        Client_Secret :{" "}
        {isSecretVisible ? "click to see client secret" : client_secret}
      </p>
      <p>Project ID : {project_id}</p>
      <h2>Client Name : {client_name}</h2>
      <p className="break-all">certificate : {client_certificate}</p>
      <p
        className=" cursor-pointer hover:underline"
        onClick={() => setIsClientKey(!isclentKey)}
      >
        Client Key :{isclentKey ? "click to see client secret" : client_key}
      </p>
      <p className="break-all" onClick={() => setIsClientURL(!isclentURl)}>
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
