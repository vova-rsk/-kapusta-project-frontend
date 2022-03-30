import { useState } from 'react';
import { Container } from './TimelapseControl.styled';
import SliderControl from '../SliderControl';

function TimelapseControl() {
  const [date, setDate] = useState(new Date());

  const showTimelapse = date => {
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });

    return `${monthName} ${date.getFullYear()}`;
  };

  const handleChangeLeft = type => {
    var now = new Date();

    if (!['prev', 'next'].includes(type)) return;

    const newDate =
      type === 'next'
        ? new Date(date.getFullYear(), date.getMonth() + 1)
        : new Date(date.getFullYear(), date.getMonth() - 1);

    if (newDate > now) return;

    setDate(newDate);
  };

  return (
    <Container>
      <span>Текущий период:</span>
      <SliderControl
        value={showTimelapse(date)}
        handleChange={handleChangeLeft}
      />
    </Container>
  );
}

export default TimelapseControl;
