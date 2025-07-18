import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5020/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data));

  }, []);
    useEffect(() => {
    fetch('http://localhost:5020/api/Sports')
      .then((response) => response.json())
      .then((data) => setSports(data));

  }, []);


  return (
    <div className="App">
      <header className='App-header' >
        <h1>Movies</h1>
        <ol>
          {items.map((item) => (
            <li key={item.id}>{item.name}-{item.moviename}</li>
          ))}
        </ol>
        <h1>Sports</h1>
        <ul>
          {sports.map((sport) => (
            <li key={sport.id}>{sport.sport}</li>
          ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
