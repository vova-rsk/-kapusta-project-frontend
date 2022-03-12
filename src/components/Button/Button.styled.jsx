import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BUTTON_TYPE = {
  REGISTER_CONTROL: 'register',
  CONFIRMATION_CONTROL: 'confirmation',
  BALANCE_ENTRY_CONTROL: 'balance',
};

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 44px;

  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52555f;

  background-color: ${props =>
    props.type === BUTTON_TYPE.REGISTER_CONTROL ? '#f6f7fb' : 'transparent'};
  border-width: ${props =>
    props.type === BUTTON_TYPE.REGISTER_CONTROL ? 0 : '1px'};
  border-style: solid;
  border-color: ${props =>
    props.type === BUTTON_TYPE.CONFIRMATION_CONTROL ? '#f6f7fc' : '#fff'};
  border-radius: 16px;
  box-shadow: ${props =>
    props.type === BUTTON_TYPE.REGISTER_CONTROL
      ? '1px 3px 5px rgba(82, 85, 95, 0.15)'
      : 'none'};

  @media screen and (max-width: 767px) {
    border-radius: ${props =>
      props.type === BUTTON_TYPE.BALANCE_ENTRY_CONTROL && '0px 22px 22px 0px'};
  }

  &:hover {
    color: #fff;
    background-color: #ff751d;
    border: none;
  }
`;

export default StyledButton;
