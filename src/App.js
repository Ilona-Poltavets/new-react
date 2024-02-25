import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const styles = useSpring({
    loop: true,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '2000' },
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ilona Poltavets</h1>
      </header>
      <main>
        <animated.div
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            borderRadius: 50,
            ...styles,
          }}
        />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
