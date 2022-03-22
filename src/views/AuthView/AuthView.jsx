import { Container, TitleContainer } from './AuthView.styled';
import Title from '../../components/Title';
import AuthForm from '../../components/Forms/AuthForm';

function authView() {
  return (
    <Container className="authContainer">
      <TitleContainer>
        <Title />
      </TitleContainer>
      <AuthForm />
    </Container>
  );
}

export default authView;
