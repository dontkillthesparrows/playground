import React, { useState } from 'react';
import './App.css';
import Basic from '../basic';
import TestHook from '../testHook';

function App() {
  const [state, setState] = useState<string>('some text');
  const [name, setName] = useState<string>('Henrik');

  const changeName = () => {
    setName('Aria');
  };
  return (
    <div className="App">
      <h1>Basic Hook useState</h1>
      <TestHook name={name} changeName={changeName} />
    </div>
  );
}

export default App;
