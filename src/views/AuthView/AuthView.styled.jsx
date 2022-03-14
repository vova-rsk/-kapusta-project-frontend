import styled from '@emotion/styled';

const Container = styled.div`
  padding: 142px 10px;

  @media screen and (min-width: 768px) {
    padding: 146px 166px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 173px 166px 142px 230px;
  }

  & div:nth-of-type(1) {
    margin-bottom: 50px;

    @media screen and (min-width: 1280px) {
      margin-bottom: 0;
    }
  }
`;

export default Container;
