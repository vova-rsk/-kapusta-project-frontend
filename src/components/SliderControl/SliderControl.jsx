import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from './SliderControl.styled';

function SliderControl({ value, handleChange }) {
  return (
    <Container>
      <span onClick={() => handleChange('prev')}>
        <SvgIcon
          component={ArrowBackIosNewIcon}
          sx={{ width: '14px', height: '14px' }}
          inheritViewBox={true}
        />
      </span>
      <span>{value}</span>
      <span onClick={() => handleChange('next')}>
        <SvgIcon
          component={ArrowForwardIosIcon}
          sx={{ width: '14px', height: '14px' }}
          inheritViewBox={true}
        />
      </span>
    </Container>
  );
}

SliderControl.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SliderControl;
