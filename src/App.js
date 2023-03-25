import './App.css';
import Phasergames from './components/Phasergames/Phasergames';
import { ReactGames } from './components/reactgames/ReactGames';
import { Start } from './components/start/Start';
import Udemygames from './components/udemygames/Udemygames';

function App() {
  return (
    <>
      <Start/>
      <ReactGames/>
      <Phasergames/>
      <Udemygames/>
     
    </>
  );
}

export default App;
