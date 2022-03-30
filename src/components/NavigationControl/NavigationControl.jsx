import { useLocation } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Container, StyledNavLink } from './NavigationControl.styled';
import { ReactComponent as ReportsIconSvg } from './reports-icon-24x24.svg';
import { ReactComponent as GoBackIconSvg } from './go-back-icon-24x24.svg';

function NavigationControl() {
  const location = useLocation();
  const { width } = useWindowDimensions();

  const isReportsView = location.pathname.includes('/reports');
  const isHideTextLabel = width < 768 && isReportsView;
  const textLabel = !isReportsView
    ? 'Перейти к отчетам'
    : 'Вернуться на главную';

  return (
    <StyledNavLink to={isReportsView ? '/finance' : '/reports'}>
      <Container isReportsStyling={isReportsView}>
        {!isHideTextLabel && <span>{textLabel}</span>}
        <span>
          <SvgIcon
            component={isReportsView ? GoBackIconSvg : ReportsIconSvg}
            sx={{ width: '24px', height: '24px' }}
            inheritViewBox={true}
          />
        </span>
      </Container>
    </StyledNavLink>
  );
}

export default NavigationControl;
