import './App.css';
import './root.css';
import { useState } from 'react';
import Searchbar from './components/searchbar/Searchbar.js';
import Informationcard from './components/informationcard/Informationcard.js';
import Map from './components/map/Map.js';
function App() {
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="heading-container">
          <h1 className="heading">IP Address Tracker </h1>
        </div>
        <Searchbar onChange={setInput} />
        <Informationcard />
      </header>
      <Map />
    </div>
  );
}

export default App;
