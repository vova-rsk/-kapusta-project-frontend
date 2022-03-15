import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
import { BUTTON_TYPE } from '../../utils/constants';

function Button({ name, disabled = false, handleAction, children }) {
  return (
    <StyledButton type={name} disabled={disabled} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf([
    BUTTON_TYPE.REGISTER_CONTROL,
    BUTTON_TYPE.CONFIRMATION_CONTROL,
    BUTTON_TYPE.BALANCE_ENTRY_CONTROL,
  ]),
  disabled: PropTypes.bool,
  handleAction: PropTypes.func,
};

export default Button;
