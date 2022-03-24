import styled from '@emotion/styled';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';

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
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
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
    line-height: 1.167;
    text-align: left;
  }
`;

export const GooleButtonContainer = styled.div`
  margin: 0 auto 30px;
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
    line-height: 1.167;
  }
`;

export const StyledInput = styled.input`
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
  outline-color: #ff751d;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.143;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }

  &:nth-of-type(2) {
    display: flex;
    align-items: baseline;
    margin-bottom: 40px;
    font: large Verdana, sans-serif;
    letter-spacing: 5px;
  }

  &:nth-of-type(2)::placeholder {
    font-family: Roboto, sans-serif;
  }
`;
