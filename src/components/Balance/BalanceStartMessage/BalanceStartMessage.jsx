import PropTypes from 'prop-types';
import Container from './BalanceStartMessage.styled';

function BalanceStartMessage(props) {
  return (
    <Container>
      <div>
        <span>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </span>
        <span>Ты не можешь тратить деньги пока их у тебя нет :)</span>
      </div>
    </Container>
  );
}

BalanceStartMessage.propTypes = {};

export default BalanceStartMessage;
