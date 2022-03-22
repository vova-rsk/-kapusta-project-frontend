import styled from '@emotion/styled';
import background from './bg-image.svg';

const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  background-color: #fff;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 0 -240px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 768px;
    background-position: 0 0;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    background-size: 1280px 582px;
  }
`;

export default Container;
