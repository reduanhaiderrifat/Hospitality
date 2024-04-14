import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Proptypes from "prop-types";
const CommentsCard = ({ comment, name, email }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="space-y-8 border-black border rounded-lg p-2">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <img
          className="rounded-full w-14 h-14 md:w-16 md:h-16"
          src={
            user?.photoURL ||
            "https://i.ibb.co/R3SSpJQ/145856997-296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
          }
          alt=""
        />
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">{user?.displayName || name}</h2>
          <h4>{user?.email || email}</h4>
        </div>
      </div>
      <p className="whitespace-pre-line break-all">{comment}</p>
    </div>
  );
};
CommentsCard.propTypes = {
  comment: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  email: Proptypes.any.isRequired,
};
export default CommentsCard;
