import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: ${({ isReportsStyling }) =>
      isReportsStyling ? 'row' : 'row-reverse'};
    justify-content: space-between;
    max-width: ${({ isReportsStyling }) =>
      isReportsStyling ? '668px' : '634px'};
  }

  @media screen and (min-width: 1280px) {
    max-width: ${({ isReportsStyling }) =>
      isReportsStyling ? '1060px' : '728px'};
  }

  & > div:first-of-type {
    align-items: left;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ isReportsStyling }) =>
      isReportsStyling ? '10px' : '40px'};

    @media screen and (min-width: 768px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-top: 0;
      width: ${({ isReportsStyling }) =>
        isReportsStyling ? '447px' : '369px'};
    }

    @media screen and (min-width: 1280px) {
      width: ${({ isReportsStyling }) =>
        isReportsStyling ? '728px' : '369px'};
    }
  }
`;

export default Container;
