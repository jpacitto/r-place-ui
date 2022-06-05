import './App.css';
import Canvas from './components/Canvas';
import ColorPanel from './components/ColorPanel';
import PositionIndicator from './components/PositionIndicator';

function App() {
  return (
    <div className='main-page'>
      <PositionIndicator />
      <Canvas />
      <ColorPanel />
    </div>
  );
}

export default App;
