import PropTypes from 'prop-types';
import Container from './Overlay.styled';

function Overlay({ handleClose, children }) {
  return <Container onClick={handleClose}>{children}</Container>;
}

Overlay.propTypes = {};

export default Overlay;
