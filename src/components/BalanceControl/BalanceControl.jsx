import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, StyledInput } from './BalanceControl.styled';

function BalanceControl({ balance, balanceEntryFee, handleChange }) {
  const location = useLocation();

  const isReportsView = location.pathname.includes('/reports');

  return (
    <Container>
      <StyledInput
        type="numeric"
        step="0.01"
        disabled={balance !== null}
        value={balance === null ? balanceEntryFee : balance}
        onChange={handleChange}
        isReportsStyling={isReportsView}
      />
    </Container>
  );
}

BalanceControl.propTypes = {
  balance: PropTypes.string,
  balanceEntryFee: PropTypes.string,
  handleChange: PropTypes.func,
};

export default BalanceControl;
