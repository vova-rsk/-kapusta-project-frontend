import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import Container from './Logo.styled';
import { ReactComponent as LogoFrontSide } from './logo-front-side.svg';
import { ReactComponent as LogoBackSide } from './logo-back-side.svg';
import { ReactComponent as KapustaIconSvg } from './kapusta-icon-small.svg';

function Logo() {
  return (
    <Container>
      <Link to="/">
        <div>
          <span>
            <SvgIcon
              component={LogoBackSide}
              sx={{ width: '33px', height: '26px' }}
              inheritViewBox={true}
            />
          </span>
          <span>
            <SvgIcon
              component={LogoFrontSide}
              sx={{ width: '33px', height: '26px' }}
              inheritViewBox={true}
            />
          </span>
          <span>
            <SvgIcon
              component={KapustaIconSvg}
              sx={{ width: '70px', height: '17px' }}
              inheritViewBox={true}
            />
          </span>
        </div>
      </Link>
    </Container>
  );
}

export default Logo;
