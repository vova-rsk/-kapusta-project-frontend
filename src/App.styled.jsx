import styled from '@emotion/styled';
import background from './bg-image.svg';

const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 0 -240px;

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
