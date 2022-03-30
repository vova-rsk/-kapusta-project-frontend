import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: 282px;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: 292px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 84px;
    content: '';
    width: 16px;
    height: 16px;
    background-color: #172d5d;
    transform: translate(-50%, -50%) rotate(45deg);
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    z-index: -1;

    @media screen and (min-width: 768px) {
      left: 62px;
    }
  }

  & div {
    padding: 30px 25px 31px;
    background-image: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
    border-radius: 30px;

    @media screen and (min-width: 768px) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  & span {
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
  }

  & span:first-of-type {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.429;
  }

  & span:last-of-type {
    font-size: 12px;
    line-height: 1.333;
  }
`;

export default Container;
