import { useEffect, useState } from "react";
import { deleting, getdata } from "../utils";
import BookingCard from "./Resort/BookingCard";
import Empty from "./Empty";

const Booking = () => {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    const storedResort = getdata();
    setResorts(storedResort);
  }, []);
  const handleDelete = (id) => {
    deleting(id);
    const storedResort = getdata();
    setResorts(storedResort);
  };
  if (resorts.length < 1) return <Empty></Empty>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {resorts.map((resort) => (
        <BookingCard
          key={resort.id}
          handleDelete={handleDelete}
          resort={resort}
        ></BookingCard>
      ))}
    </div>
  );
};

export default Booking;
