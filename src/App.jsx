import logo from './assets/react.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(15);
  const minCount = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ '--logo-speed': count + 's' }} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
