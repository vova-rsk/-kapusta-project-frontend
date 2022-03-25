import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/finance',
  ...routeProps
}) => {
  const auth = useSelector(getAuthStatus);
  const shouldRedirect = auth && restricted;

  return (
    <Route {...routeProps}>
      {/* { ? <Redirect to={redirectTo} /> : children} */}
      {children}
    </Route>
  );
};

export default PublicRoute;
