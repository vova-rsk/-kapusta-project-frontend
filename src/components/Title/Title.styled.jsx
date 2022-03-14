import styled from '@emotion/styled';
import SvgIcon from '@mui/material/SvgIcon';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    display: inline-block;
    margin-top: 5px;
    margin-left: 11px;
    font-weight: 700;
    font-size: 13px;
    line-height: 1.154;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #52555f;

    @media screen and (min-width: 768px) {
      margin-left: 52px;
      font-size: 16px;
      line-height: 1.188;
      letter-spacing: 0.18em;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 0;
      margin-left: 72px;
    }
  }
`;

export const StyledSvgIcon = styled(SvgIcon)`
  width: 183px;
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;
