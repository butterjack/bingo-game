import { Navigate } from 'react-router-dom';

const RequireAuth= ({ children, redirectTo }) => {
  let isAuthenticated = window.localStorage.getItem("isAuthenticated")
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth