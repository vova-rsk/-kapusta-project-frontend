import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:hover span:last-of-type {
    color: #ff751d;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: ${({ isReportsStyling }) =>
    isReportsStyling ? 'row-reverse' : 'row'};
  align-items: center;
  height: 24px;

  & > span:first-of-type {
    margin-right: 15px;
    margin: ${({ isReportsStyling }) =>
      isReportsStyling ? '0 0 0 15px' : '0 15px 0 0'};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.167;
    text-align: right;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
  }

  & > span:last-of-type {
    color: #52555f;
    cursor: pointer;
    transition: color 250ms linear;
  }
`;
