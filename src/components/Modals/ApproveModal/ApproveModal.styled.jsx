import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

export const ApproveModalWindow = styled.div`
  position: relative;
  padding: 50px 57px;
  width: 380px;
  height: 194px;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  overflow: hidden;

  & div {
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.143;
    letter-spacing: 0.02em;
    text-align: center;
    color: #52555f;
  }
`;

export const SlyledCloseIconButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-15%, 15%);
`;
