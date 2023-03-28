import './App.css';
import Phasergames from './components/Phasergames/Phasergames';
import { ReactGames } from './components/reactgames/ReactGames';
import { Start } from './components/start/Start';
import UnityGames from './components/unitygames/Unitygames'

function App() {
  return (
    <>
      <Start/>
      <ReactGames/>
      <Phasergames/>
      <UnityGames/>
     
    </>
  );
}

export default App;
