import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as ExitLogoSvg } from './exit-logo.svg';
import { StyledButton, StyledSvgIcon } from './LogoutButton.styled';
import ApproveModal from '../Modals/ApproveModal';
import * as authOperations from '../../redux/auth/auth-operations';
import { getAuthorizationType } from '../../redux/auth/auth-selectors';

function LogoutButton() {
  const dispatch = useDispatch();
  const currentAuthType = useSelector(getAuthorizationType);
  const { width } = useWindowDimensions();
  const [showDialog, setShowDialog] = useState(false);

  const handleUserLogout = () => {
    dispatch(authOperations.logout(currentAuthType));
    setShowDialog(false);
  };

  return (
    <>
      {width >= 768 ? (
        <StyledButton color="secondary" onClick={() => setShowDialog(true)}>
          Выход
        </StyledButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => setShowDialog(true)}
        >
          <StyledSvgIcon
            component={ExitLogoSvg}
            sx={{ width: '16px', height: '16px' }}
            inheritViewBox={true}
          />
        </IconButton>
      )}
      {showDialog && (
        <ApproveModal
          title="Вы действительно хотите выйти?"
          onSuccess={handleUserLogout}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </>
  );
}

export default LogoutButton;
