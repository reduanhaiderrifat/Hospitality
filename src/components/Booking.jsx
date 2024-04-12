import { useEffect, useState } from "react";
import { deleting, getdata } from "../utils";
import BookingCard from "./Resort/BookingCard";
import Empty from "./Empty";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const storedResort = getdata();
    setBookings(storedResort);
  }, []);
  const handleDelete = (id) => {
    deleting(id);
    const storedResort = getdata();
    setBookings(storedResort);
  };
  if (bookings.length < 1) return <Empty></Empty>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          handleDelete={handleDelete}
          booking={booking}
        ></BookingCard>
      ))}
    </div>
  );
};

export default Booking;
