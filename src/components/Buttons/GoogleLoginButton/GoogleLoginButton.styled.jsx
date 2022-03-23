import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
  width: 122px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #000;
  background: #f6f7fb;
  border-radius: 26px;

  &:hover {
    color: #fff;
    background-color: #ff751d;
  }
`;

export default StyledButton;
