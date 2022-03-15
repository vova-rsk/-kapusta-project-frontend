import PropTypes from 'prop-types';
import { Container, StyledAvatar, SlytedButton } from './LogoutPanel.styled';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as ExitLogoSvg } from './exit-logo.svg';
import IconButton from '@mui/material/IconButton';

function LogoutPanel(props) {
  const auth = false;
  return (
    <Container>
      <div>
        <StyledAvatar
          sx={{
            width: '32px',
            height: '32px',
          }}
        />
        {auth && <span>User name</span>}
      </div>
      <div>
        {/* <SlytedButton sx={{width:'32px', height:'32px'}}>
                    <SvgIcon
                        component={ExitLogoSvg}
                        sx={{ width: '16px', height: '16px' }}
                        inheritViewBox={true}
                    />
                        
              
                    /* <span>Выход</span>
            </SlytedButton> */}
        <IconButton
          component={ExitLogoSvg}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
          }}
        ></IconButton>
      </div>
    </Container>
  );
}

LogoutPanel.propTypes = {};

export default LogoutPanel;
