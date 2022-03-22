import { useState } from 'react';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../../redux/auth/auth-operations';
import { ReactComponent as GoogleLogo } from './google-logo.svg';
import ControlButtonsContainer from '../../ControlButtonsContainer';
import Button from '../../Button';
import notification from '../../../utils/notification';
import {
  StyledForm,
  StyledGoogleLoginBtn,
  StyledFormHelper,
  StyledInputLabel,
  StyledInput,
} from './AuthForm.styled';

function AuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickRegistration = e => {
    e.preventDefault();

    const isValidEmail = validator.isEmail(email);
    const isValidPassword = validator.isStrongPassword(password);

    if (!isValidEmail) {
      notification.warning('wrong email value');
      setEmail('');
      return;
    }

    if (!isValidPassword) {
      notification.warning("password doesn't meet the minimum requirements");
      setPassword('');
      return;
    }

    dispatch(authOperations.signup({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleClickLoginByEmail = e => {
    e.preventDefault();

    if (!email || !password) {
      console.log('Введите данные пользователя!');
      return;
    }

    dispatch(authOperations.login({ email, password }));
  };

  const handleClickLoginByGoogle = e => {
    e.preventDefault();
    alert('KOKOKO by Google');
  };

  return (
    <div>
      <StyledForm>
        <StyledFormHelper id="my-helper-text">
          Вы можете авторизоваться с помощью Google Account:
        </StyledFormHelper>
        <StyledGoogleLoginBtn
          type="submit"
          startIcon={<GoogleLogo />}
          onClick={handleClickLoginByGoogle}
        >
          Google
        </StyledGoogleLoginBtn>
        <StyledFormHelper id="my-helper-text" sx={{ textAlign: 'left' }}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </StyledFormHelper>
        <StyledInputLabel htmlFor="email">Электронная почта:</StyledInputLabel>
        <StyledInput
          id="email"
          required={true}
          aria-describedby="user email"
          type="text"
          variant="standard"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value.trim())}
        />

        <StyledInputLabel htmlFor="password">Пароль:</StyledInputLabel>
        <StyledInput
          id="password"
          required={true}
          aria-describedby="user password"
          type="password"
          variant="standard"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value.trim())}
        />
        <ControlButtonsContainer>
          <Button name="register" handleAction={handleClickLoginByEmail}>
            Войти
          </Button>
          <Button name="register" handleAction={handleClickRegistration}>
            Регистрация
          </Button>
        </ControlButtonsContainer>
      </StyledForm>
    </div>
  );
}

export default AuthForm;
