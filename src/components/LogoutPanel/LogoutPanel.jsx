import { useSelector } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { getAuthStatus, getUserInfo } from '../../redux/auth/auth-selectors';
import LogoutButton from '../LogoutButton';
import {
  Container,
  StyledAvatar,
  PersonalInfoContainer,
} from './LogoutPanel.styled';

function LogoutPanel() {
  const { width } = useWindowDimensions();
  const auth = useSelector(getAuthStatus);
  const userInfo = useSelector(getUserInfo);

  return (
    <Container>
      {auth && (
        <>
          <PersonalInfoContainer>
            <StyledAvatar
              alt={userInfo.name}
              src={'/static/images/avatar/1.jpg'}
            />
            {width >= 768 && <span>{userInfo.name}</span>}
          </PersonalInfoContainer>
          <LogoutButton />
        </>
      )}
    </Container>
  );
}

export default LogoutPanel;
