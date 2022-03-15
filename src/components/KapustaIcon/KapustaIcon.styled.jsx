import styled from '@emotion/styled';
import SvgIcon from '@mui/material/SvgIcon';

export const StyledSvgIcon = styled(SvgIcon)`
  color: ${props => (props.type === 'icon' ? ' #dfe2eb' : '#f5f6fb')};
`;

export const Container = styled.div`
  max-width: 83px;
  max-height: 89px;

  & div:nth-of-type(2) {
    display: flex;
    justify-content: ${props => (props.rotation === 0 ? 'end' : 'center')};
    margin-top: 20px;
    height: 14px;
  }
`;
