import PropTypes from 'prop-types';
import Container from './ControlButtonsContainer.styled';

function ControlButtonsContainer({ children }) {
  return <Container> {children} </Container>;
}

ControlButtonsContainer.propTypes = {};

export default ControlButtonsContainer;
