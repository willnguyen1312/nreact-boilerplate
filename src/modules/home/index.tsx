import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';

const Home = (_: RouteComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert('Click me, huh?');
  };

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isEnterHit = event.keyCode === 13;
    if (isEnterHit) {
      alert(`Hi there ${inputValue}`);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        onChange={handleOnchange}
        onKeyDown={handleOnKeydown}
        value={inputValue}
        placeholder="type me"
      />
      <button onClick={handleClick}>Hi there</button>
    </div>
  );
};

export default Home;
