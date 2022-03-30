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

  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & div span:nth-of-type(1),
  & div span:nth-of-type(3) {
    color: #ff751d;
    cursor: pointer;
  }

  & div span:nth-of-type(2) {
    display: flex;
    align-items: baseline;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.143;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000;
  }
`;
