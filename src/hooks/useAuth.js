import { useSelector } from 'react-redux';
import { getAuthStatus } from '../redux/auth/auth-selectors';

function useAuth() {
  const auth = useSelector(getAuthStatus);
  return auth;
}

export default useAuth;
