import { useLoaderData } from "react-router-dom";
import ClientCard from "../components/ClientCard";
import { Helmet } from "react-helmet-async";

const Client = () => {
  const clients = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Hospitality_Client</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.client_id} client={client}></ClientCard>
        ))}
      </div>
    </>
  );
};

export default Client;
