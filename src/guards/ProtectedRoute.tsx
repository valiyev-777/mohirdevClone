import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {

    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
