import './App.css';
import marioGames from './data/mario.json';
import Games from './components/Games'

function App() {

  return (
    <div className="App">
      <Games games={marioGames.nes_games}/>
    </div>
  );
}

export default App;