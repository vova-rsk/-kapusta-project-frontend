import Container from './AuthView.styled';
import Title from '../../components/Title';
import AuthForm from '../../components/Forms/AuthForm';

function authView() {
  return (
    <Container className="authContainer">
      <div>
        <Title />
      </div>
      <div>
        <AuthForm />
      </div>
    </Container>
  );
}

export default authView;
