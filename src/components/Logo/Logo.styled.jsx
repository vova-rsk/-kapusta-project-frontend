import styled from '@emotion/styled';

const Container = styled.div`
  width: 90px;
  height: 31px;

  & div:first-of-type {
    position: relative;
    width: 39px;
    height: 31px;
  }

  & span {
    position: absolute;
    display: inline-block;
  }

  & span:not(:nth-of-type(3)) {
    width: 33px;
    height: 26px;
    color: #fb7c2f;
  }

  & span:nth-of-type(1) {
    top: 0;
    left: 0;
  }

  & span:nth-of-type(2) {
    bottom: 0;
    right: 0;
  }

  & span:nth-of-type(3) {
    top: 10px;
    left: 20px;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.125;
    letter-spacing: 0.02em;
    color: #000;
  }
`;

export default Container;
