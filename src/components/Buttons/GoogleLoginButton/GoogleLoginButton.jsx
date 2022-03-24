import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { ReactComponent as GoogleLogo } from './google-logo.svg';
import StyledButton from './GoogleLoginButton.styled';
import * as authOperations from '../../../redux/auth/auth-operations';
import { AUTH_TYPE } from '../../../utils/constants';

const CLIENT_ID =
  process.env.REACT_APP_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID;
const COOKIE_POLICY = 'single_host_origin';

function GoogleLoginButton() {
  const dispatch = useDispatch();

  const responseGoogle = response => {
    dispatch(
      authOperations.login({
        authType: AUTH_TYPE.BY_GOOGLE,
        token: response.tokenId,
      }),
    );
  };

  const responseFailure = async response => {
    console.log('Oops, something got wrong!');
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      cookiePolicy={COOKIE_POLICY}
      onSuccess={responseGoogle}
      onFailure={responseFailure}
      render={renderProps => (
        <StyledButton
          onClick={renderProps.onClick}
          type="submit"
          startIcon={<GoogleLogo />}
        >
          Google
        </StyledButton>
      )}
    />
  );
}

export default GoogleLoginButton;
