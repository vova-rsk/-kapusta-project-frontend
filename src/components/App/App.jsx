import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import * as authOperations from '../../redux/auth/auth-operations';
import Container from './App.styled';
import ApplicationBar from '../ApplicationBar';

import TestComponent from './TestComponent'; ///////////

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ApplicationBar />
      <Outlet />
      <TestComponent /> {/* /////////////// */}
    </Container>
  );
}

export default App;
