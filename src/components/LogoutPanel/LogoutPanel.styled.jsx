import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 8px;
  padding-right: 20px;
  border-right: 1px solid #e0e5eb;

  @media screen and (max-width: 767px) {
    margin-right: 7px;
    padding-right: 0;
    border-right: none;
  }

  & span {
    margin-left: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: 0.04em;
    color: #52555f;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  color: #52555f;
  background-color: #f5f6fa;
`;
