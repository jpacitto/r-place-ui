import 'App.css';
import Account from 'components/Account';
import Canvas from 'components/Canvas';
import ColorPanel from 'components/ColorPanel';
import PositionIndicator from 'components/PositionIndicator';

function App() {
  return (
    <div className='main-page'>
      <Account />
      <PositionIndicator />
      <Canvas />
      <ColorPanel />
    </div>
  );
}

export default App;
