import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import Container from './Logo.styled';
import { ReactComponent as LogoFrontSide } from './logo-front-side.svg';
import { ReactComponent as LogoBackSide } from './logo-back-side.svg';

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
          <span>Kapu$ta</span>
        </div>
      </Link>
    </Container>
  );
}

export default Logo;
