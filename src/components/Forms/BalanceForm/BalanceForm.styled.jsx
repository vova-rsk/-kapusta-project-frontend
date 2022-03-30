import styled from '@emotion/styled';
import FormHelperText from '@mui/material/FormHelperText';

export const Container = styled.div`
  width: 248px;

  @media screen and (min-width: 768px) {
    width: 369px;
  }

  & form {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: baseline;
    }
  }
`;

export const StyledFormHelper = styled(FormHelperText)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 6px;
  width: 83px;
  height: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: end;
  }

  @media screen and (min-width: 768px) {
    margin: 0 21px 0 0;
  }
`;

export const ControlsThumb = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 248px;

  @media screen and (min-width: 768px) {
    width: 265px;
  }
`;

export const MessageContainer = styled.div`
  position: absolute;
  top: 44px;
  left: -16px;
  display: flex;
  align-items: end;
  box-sizing: content-box;
  height: 164px;

  @media screen and (min-width: 768px) {
    left: 0;
    margin-top: 7px;
  }
`;

export const BalanceIndicator = styled.div`
  width: 10px;
  height: 44px;
`;
