import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 144px;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > span:nth-of-type(2) {
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

  & > span:nth-of-type(1),
  & > span:nth-of-type(3) {
    color: #ff751d;
    cursor: pointer;
  }
`;

export default Container;
