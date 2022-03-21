import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

export const StyledButton = styled(Button)`
  height: 32px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #52555f;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledSvgIcon = styled(SvgIcon)`
  color: #cbccd0;
`;
