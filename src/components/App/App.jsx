import Container from './App.styled';
import AuthView from '../../views/AuthView';
import Header from '../Header';

function App() {
  return (
    <Container>
      <Header />
      <AuthView />
    </Container>
  );
}

export default App;
