import './App.css';
import Dipslay from './components/Dipslay';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Dipslay />
      <Keyboard />
    </div>
  );
}

export default App;
