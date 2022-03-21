import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as ExitLogoSvg } from './exit-logo.svg';
import { StyledButton, StyledSvgIcon } from './LogoutButton.styled';

function LogoutButton({ handleClick }) {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width >= 768 ? (
        <StyledButton color="secondary" onClick={handleClick}>
          Выход
        </StyledButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleClick}
        >
          <StyledSvgIcon
            component={ExitLogoSvg}
            sx={{ width: '16px', height: '16px' }}
            inheritViewBox={true}
          />
        </IconButton>
      )}
    </div>
  );
}

LogoutButton.propTypes = {
  handleClick: PropTypes.func,
};

export default LogoutButton;
