import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import { ReactComponent as GoogleLogo } from './google-logo.svg';
import StyledButton from './GoogleLoginButton.styled';

const AUTH_URI =
  process.env.REACT_APP_GOOGLE_AUTH_URI || process.env.GOOGLE_AUTH_URI;
const CLIENT_ID =
  process.env.REACT_APP_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET =
  process.env.REACT_APP_GOOGLE_CLIENT_SECRET ||
  process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI =
  process.env.REACT_APP_GOOGLE_REDIRECT_URI || process.env.GOOGLE_REDIRECT_URI;
const SCOPE = process.env.REACT_APP_GOOGLE_SCOPE || process.env.GOOGLE_SCOPE;
const RESPONSE_TYPE = 'code';
const COOKIE_POLICY = 'single_host_origin';

const uri = `${AUTH_URI}?redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}`;

function GoogleLoginButton() {
  // const { signIn, loaded } = useGoogleLogin({
  //   // onSuccess,
  //   // onAutoLoadFinished,
  //   // clientId:CLIENT_ID,
  //   // cookiePolicy:COOKIE_POLICY,
  //   // loginHint,
  //   // hostedDomain,
  //   // autoLoad,
  //   // isSignedIn,
  //   // fetchBasicProfile,
  //   // redirectUri:REDIRECT_URI,
  //   // discoveryDocs,
  //   // onFailure,
  //   // uxMode,
  //   // scope:SCOPE,
  //   // accessType,
  //   // responseType:RESPONSE_TYPE,
  //   // jsSrc,
  //   // onRequest,
  //   prompt
  // });

  const responseGoogle = response => {
    console.log(response);
  };
  console.log(uri);
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      redirectUri={REDIRECT_URI}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      // cookiePolicy={'single_host_origin'}
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
