import React, { useState } from 'react';

interface TestHookProps {
  name: string;
  changeName: () => void;
}

const TestHook = ({ name, changeName }: TestHookProps) => {
  const [state, setState] = useState<string>('Initial state');

  const changeState = () => {
    setState('state changed');
  };

  const changeNameToAria = () => {
    changeName();
  };
  return (
    <div>
      <button onClick={changeState}>change state</button>
      <p>{state}</p>
      <button onClick={changeNameToAria}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default TestHook;
