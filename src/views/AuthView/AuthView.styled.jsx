import styled from '@emotion/styled';
import kapustaTopIconSvg from './kapusta-bottom-left-83x89.svg';
import kapustaGroupIconsTopSvg from './kapusta-tablet-1334x232.svg';
import kapustaBottomIconSvg from './kapusta-top-right-83x89.svg';
import kapustaGroupIconsBottomSvg from './kapusta-with-shadow-183x142.svg';

export const Container = styled.div`
  position: relative;
  padding: 142px 10px;
  min-height: 856px;
  background-image: url(${kapustaTopIconSvg}), url(${kapustaBottomIconSvg});
  background-repeat: no-repeat;
  background-size: 49px 89px, 83px 89px;
  background-position: 100% 160px, 35px 767px;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding: 146px 166px;
    min-height: 1024px;
    background-image: url(${kapustaGroupIconsTopSvg}),
      url(${kapustaGroupIconsBottomSvg});
    background-size: 1270px 232px, 183px 142px;
    background-position: 10px 84px, 103px 826px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 173px 110px 142px 230px;
    min-height: 850px;
    background-position: 10px 84px, 230px 658px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
