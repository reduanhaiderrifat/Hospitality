import { Helmet } from "react-helmet-async";
import TableContent from "../components/TableContent";
import Conditions from "../components/Conditions";
import Advertise from "../components/Advertise";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Hospitality_Terms & Conditions</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-2">
        <div className="w-full lg:w-1/4 md:w-full">
          <TableContent></TableContent>
        </div>
        <div className="w-full lg:w-2/4 md:w-full">
          {" "}
          <Conditions></Conditions>
        </div>
        <div className="w-1/4 hidden md:hidden lg:block">
          <Advertise></Advertise>
        </div>
      </div>
    </>
  );
};

export default Terms;
