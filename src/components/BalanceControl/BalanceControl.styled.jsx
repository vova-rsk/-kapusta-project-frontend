import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 125px;

  &::after {
    position: absolute;
    top: 0;
    left: 83px;
    display: flex;
    justify-content: start;
    align-items: center;
    content: 'UAH';
    padding: 12px 17px 12px 0;
    width: 42px;
    height: 44px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: 0.02em;
    text-align: right;
    vertical-align: baseline;
    text-transform: uppercase;
    color: #000;
    background-color: transparent;

    @media screen and (min-width: 768px) {
      left: 81px;
    }
  }
`;

export const StyledInput = styled.input`
    padding:12px 48px 12px 17px;
    width:125px;
    height:44px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: 0.02em;
    text-align:right;
    text-transform: uppercase;
    color: #000;
    background-color:transparent;
    border: 1px solid #fff;
    border-radius: 22px 0px 0px 22px;

    @media screen and (min-width:768px) {
        margin-right:${({ isReportsStyling }) =>
          isReportsStyling ? '183px' : '125px'};
        border-radius:${({ isReportsStyling }) =>
          isReportsStyling ? '22px' : '16px'};


    &:focus{
        outline-color:#ff751d;
    }
`;
