import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, TitleContainer } from './AuthView.styled';
import { getAuthStatus } from '../../redux/auth/auth-selectors';
import Title from '../../components/Title';
import AuthForm from '../../components/Forms/AuthForm';

function AuthView() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector(getAuthStatus);

  useEffect(() => {
    const pathTo = location?.state?.from?.pathname || 'finance';

    if (auth) {
      navigate(`../${pathTo}`);
    }
  }, [auth, location, navigate]);

  return (
    <Container className="authContainer">
      <TitleContainer>
        <Title />
      </TitleContainer>
      <AuthForm />
    </Container>
  );
}

export default AuthView;
