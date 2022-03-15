import PropTypes from 'prop-types';
import { Container, StyledSvgIcon } from './KapustaIcon.styled';
import { ReactComponent as KapustaSvg } from './kapusta-icon.svg';
import { ReactComponent as ShadowSvg } from './kapusta-shadow.svg';

function KapustaIcon({ rotation = 0, shadow = false }) {
  return (
    <Container rotation={rotation}>
      <div>
        <StyledSvgIcon
          type="icon"
          component={KapustaSvg}
          sx={{
            width: '83px',
            height: '89px',
            transform: `rotate(${rotation}deg)`,
          }}
          inheritViewBox={true}
        />
      </div>
      {shadow && (
        <div>
          <StyledSvgIcon
            type="shadow"
            component={ShadowSvg}
            sx={{
              width: '67px',
              height: '14px',
            }}
            inheritViewBox={true}
          />
        </div>
      )}
    </Container>
  );
}

KapustaIcon.propTypes = {
  rotation: PropTypes.number,
  shadow: PropTypes.bool,
};

export default KapustaIcon;
