import './App.css';
import Canvas from './components/Canvas';
import PlaceTileButton from './components/PlaceTileButton';
import PositionIndicator from './components/PositionIndicator';

function App() {
  return (
    <div className='main-page'>

      <Canvas />
      <PlaceTileButton />
      <PositionIndicator />
    </div>
  );
}

export default App;
