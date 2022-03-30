import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as categoriesOperations from '../../redux/categories/categories-operations';
import * as balanceOperations from '../../redux/balance/balance-operations';

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
    </div>
  );
}

export default TestComponent;
