import './App.css';
import Phasergames from './components/Phasergames/Phasergames';
import { ReactGames } from './components/reactgames/ReactGames';
import { Start } from './components/start/Start';

function App() {
  return (
    <>
      <Start/>
      <ReactGames/>
      <Phasergames/>
     
    </>
  );
}

export default App;
