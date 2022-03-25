import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'; //////////
import * as authOperations from '../../redux/auth/auth-operations';
import Container from './App.styled';
import ApplicationBar from '../ApplicationBar';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); ///////////

  useEffect(() => {
    dispatch(authOperations.refresh());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ApplicationBar />
      <Outlet />
      <button onClick={() => navigate('/finance')}>FINANCE</button>
      <button onClick={() => navigate('/finance/income')}>INCOME</button>
      <button onClick={() => navigate('/finance/cost')}>COST</button>
      <button onClick={() => navigate('/reports')}>REPORTS</button>
    </Container>
  );
}

export default App;
