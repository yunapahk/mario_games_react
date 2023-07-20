import './App.css';
import marioGames from './data/mario.json';
import Games from './components/Games';
import Result from './components/Result';
import Parent from './components/Parent';
import MapPractice from './components/MapPractice';

function App() {
  let num = 0;

  const incNum = () => {
    num++;
    console.log(num);
    return num;
  }

  return (
    <div className="App">
      <MapPractice first={[1, 2, 3]} second={["Hello", "Goodbye"]} third={[5, 6, 7]}/>
      <Games games={marioGames.nes_games}/>
      <Result func={(a) => { return a + 1 }} value={1}/>
      <Result func={incNum} value={1} jsx={<h1>Hello World</h1>}/>
      <Parent>Goodbye World
        {5}
        {60+5}
        {"Cheese"}
      </Parent>
    </div>
  );
}

export default App;