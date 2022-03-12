import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

function Button({ type, disabled = false, handleAction, children }) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {};

export default Button;
