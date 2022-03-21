import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  Container,
  StyledAvatar,
  PersonalInfoContainer,
} from './LogoutPanel.styled';
import LogoutButton from '../LogoutButton';

function LogoutPanel() {
  const { width } = useWindowDimensions();
  const auth = true;

  return (
    <Container>
      <PersonalInfoContainer>
        <StyledAvatar
          sx={{
            width: '32px',
            height: '32px',
          }}
        />
        {auth && width >= 768 && <span>User name</span>}
      </PersonalInfoContainer>
      <LogoutButton
        handleClick={() => {
          alert('handleClick for logout!');
        }}
      />
    </Container>
  );
}

export default LogoutPanel;
