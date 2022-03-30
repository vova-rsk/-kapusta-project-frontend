import { useLocation } from 'react-router-dom';
import Container from './NavPanel.styled';
import NavigationControl from '../NavigationControl';
import TimelapseControl from '../TimelapseControl';
import BalanceForm from '../Forms/BalanceForm';

function NavPanel() {
  const location = useLocation();

  const isReportsView = location.pathname.includes('/reports');

  return (
    <Container isReportsStyling={isReportsView}>
      <div>
        <NavigationControl />
      </div>
      <div>
        {isReportsView && <TimelapseControl />}
        <BalanceForm />
      </div>
    </Container>
  );
}

export default NavPanel;
