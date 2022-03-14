import styled from '@emotion/styled';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 40px 17px 53px;
  width: 300px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);

  @media screen and (min-width: 768px) {
    padding: 50px 85px 53px;
    width: 436px;
  }
`;

export const StyledFormHelper = styled(FormHelperText)`
  margin: 0 0 24px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;
  color: #52555f;

  &:nth-of-type(2) {
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 1.667;
    text-align: left;
  }
`;

export const StyledGoogleLoginBtn = styled(Button)`
  margin: 0 auto 30px;
  margin-left: auto;
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

export const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #000;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 1.667;
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 30px;
  padding: 20px 17px;
  width: 100%;
  height: 52px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.04em;
  color: #000;
  background-color: #f6f7fb;
  border-radius: 30px;
  border: none;

  &::placeholder {
    color: #a6abb9;
  }

  &:nth-of-type(2) {
    margin-bottom: 40px;
  }
`;
