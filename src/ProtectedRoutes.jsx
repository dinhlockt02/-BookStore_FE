import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let user = window.localStorage.getItem("user");
  if (user) return true;
  return false;
};

const ProtectedRoutes = () => {
  let isAuth = Auth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
