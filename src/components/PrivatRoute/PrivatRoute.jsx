import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthStatus } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const auth = useSelector(getAuthStatus);
  const location = useLocation();

  return auth ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
