import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Proptypes from "prop-types";
const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[calc(100vh-276px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRouter.propTypes = {
  children: Proptypes.node,
};
export default PrivetRouter;
