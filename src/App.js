import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ilona Poltavets</h1>
      </header>
      <main>
        <div className='framer-motion'>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
