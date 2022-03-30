import { useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { Container } from './TimelapseControl.styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TimelapseControl() {
  const [date, setDate] = useState(new Date());

  const showTimelapse = date => {
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });

    return `${monthName} ${date.getFullYear()}`;
  };

  const handleChange = type => {
    var now = new Date();

    if (!['increment', 'decrement'].includes(type)) return;

    const newDate =
      type === 'increment'
        ? new Date(date.getFullYear(), date.getMonth() + 1)
        : new Date(date.getFullYear(), date.getMonth() - 1);

    if (newDate > now) return;

    setDate(newDate);
  };

  return (
    <Container>
      <span>Текущий период:</span>
      <div>
        <span onClick={() => handleChange('decrement')}>
          <SvgIcon
            component={ArrowBackIosNewIcon}
            sx={{ width: '14px', height: '14px' }}
            inheritViewBox={true}
          />
        </span>
        <span>{showTimelapse(date)}</span>
        <span onClick={() => handleChange('increment')}>
          <SvgIcon
            component={ArrowForwardIosIcon}
            sx={{ width: '14px', height: '14px' }}
            inheritViewBox={true}
          />
        </span>
      </div>
    </Container>
  );
}

export default TimelapseControl;
