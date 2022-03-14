import PropTypes from 'prop-types';
import Container from './ControlButtonsContainer.styled';

function ControlButtonsContainer({ children }) {
  return <Container> {children} </Container>;
}

ControlButtonsContainer.propTypes = {
  children: PropTypes.node,
};

export default ControlButtonsContainer;
