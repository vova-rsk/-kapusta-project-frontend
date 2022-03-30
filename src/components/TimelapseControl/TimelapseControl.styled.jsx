import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144px;

  & > span {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.167;
    text-align: center;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
  }
`;
