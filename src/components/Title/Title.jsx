import { ReactComponent as KapustaIcon } from './kapusta-title.svg';
import { Container, StyledSvgIcon } from './Title.styled';

function Title() {
  return (
    <Container>
      <StyledSvgIcon component={KapustaIcon} inheritViewBox={true} />
      <span>Smart Finance</span>
    </Container>
  );
}

export default Title;
