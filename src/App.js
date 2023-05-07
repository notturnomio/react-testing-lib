import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div data-testid='app' style={{ padding: '40px' }}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
