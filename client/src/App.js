import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === "development" ? `http://localhost:9000${path}` : path
}

function App() {
  const [data, setData] = useState("Hi")
  useEffect(() => {
    fetch(url("/api/"))
      .then(res => res.json())
      .then(apiData => setData(apiData.data))
    setData(data + "!")
  }, [])
  return (
    <div className="App">
      <header className="App-header">

        api data returned: {data}
      </header>
    </div>
  );
}

export default App;
