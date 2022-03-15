import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)``;

export const SlytedButton = styled(Button)`
  // padding:0;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  // @media screen and (max-width:767px){
  //     display:flex;
  //     justify-content:center;
  //     align-items:center;
  // }
`;
