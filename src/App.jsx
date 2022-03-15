import Container from './App.styled';
import AuthView from './views/AuthView';
import HeaderView from './components/Header';

function App() {
  return (
    <Container>
      <HeaderView />
      <AuthView />
    </Container>
  );
}

export default App;
