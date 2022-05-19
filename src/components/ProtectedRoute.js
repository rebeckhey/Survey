import { Navigate, Outlet } from "react-router-dom";
import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
import { summaryContext } from "../Context";

const PrivateRoute = () => {
    const { accessToRoute } = useContext(summaryContext);
  const location = useLocation();

  return accessToRoute ? (
    <Outlet />
  ) : (
    <Navigate to="/start" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
