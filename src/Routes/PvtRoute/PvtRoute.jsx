/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const PvtRoute = ({ children }) => {
  const { user, loading } = useAuth();
    const location = useLocation();
  if (loading){
    return <LoadingSpinner />
  }
  if (user) {
    return children;
  }
    return <Navigate state={{ from: location }} to='/signIn' replace />
};
export default PvtRoute;
