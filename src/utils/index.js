import toast from "react-hot-toast";
//get from localstorage
export const getdata = () => {
  let bookings = [];
  const storeBooking = localStorage.getItem("booking");
  if (storeBooking) {
    bookings = JSON.parse(storeBooking);
  }
  return bookings;
};
//set in localstorage
export const setData = (detailed) => {
  let bookings = getdata();

  const isExist = bookings.find((b) => b.id === detailed.id);
  if (isExist) {
    return toast.error("Already Booking");
  }
  bookings.push(detailed);
  localStorage.setItem("booking", JSON.stringify(bookings));
  toast.success("Booking Successfully");
};
//delete
export const deleting = (id) => {
  let bookings = getdata();
  const remaining = bookings.filter((b) => b.id !== id);
  localStorage.setItem("booking", JSON.stringify(remaining));
  toast.success("Remove successfully");
};
