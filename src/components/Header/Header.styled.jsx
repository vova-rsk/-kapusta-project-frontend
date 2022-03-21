import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 56px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 19px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    max-width: 320px;
    height: 100%;

    @media screen and (min-width: 768px) {
      padding: 0 26px;
      max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
      max-width: 1280px;
    }
  }
`;

export default Container;
