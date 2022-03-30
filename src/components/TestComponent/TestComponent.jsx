import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as categoriesOperations from '../../redux/categories/categories-operations';
import * as balanceOperations from '../../redux/balance/balance-operations';

import BalanceForm from '../Forms/BalanceForm';
import NavigationControl from '../NavigationControl';
import TimelapseControl from '../TimelapseControl';

function TestComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperations.getAll());
    dispatch(balanceOperations.get());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => navigate('/finance')}>FINANCE</button>
      <button onClick={() => navigate('/finance/income')}>INCOME</button>
      <button onClick={() => navigate('/finance/cost')}>COST</button>
      <button onClick={() => navigate('/reports')}>REPORTS</button>
      {/* <BalanceForm /> */}
      <NavigationControl />
      <TimelapseControl />
    </div>
  );
}

export default TestComponent;
