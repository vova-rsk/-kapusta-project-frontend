import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBalance } from '../../../redux/balance/balance-selectors';
import BalanceStartMessage from '../../BalanceStartMessage';
import Button from '../../Button';
import BalanceControl from '../../BalanceControl';
import {
  Container,
  StyledFormHelper,
  ControlsThumb,
  MessageContainer,
} from './BalanceForm.styled';

function BalanceForm() {
  const location = useLocation();
  const [balanceEntryFee, setBalanceEntryFee] = useState((0).toFixed(2));
  const balance = useSelector(getBalance);

  const isBalance = balance !== null;
  const isShowButton = !location.pathname.includes('/reports');

  const handleChange = e => {
    const value = Number(e.target.value);

    if (isNaN(value)) return;

    setBalanceEntryFee(value.toFixed(2));
  };

  return (
    <Container>
      <form>
        <StyledFormHelper> Баланс: </StyledFormHelper>
        <ControlsThumb>
          <BalanceControl
            balance={balance}
            balanceEntryFee={balanceEntryFee}
            handleChange={handleChange}
          />
          {!isBalance && (
            <MessageContainer>
              <BalanceStartMessage />
            </MessageContainer>
          )}
          {isShowButton && (
            <Button type="button" name="balance" disabled={isBalance}>
              Подтвердить
            </Button>
          )}
        </ControlsThumb>
      </form>
    </Container>
  );
}

export default BalanceForm;
