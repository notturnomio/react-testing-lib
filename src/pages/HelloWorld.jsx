import React, { useState } from 'react';

function HelloWorld() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => value === 'hello' && setVisible((prev) => !prev);

  const inputChange = (e) => setValue(e.target.value);

  return (
    <div>
      <input onChange={inputChange} id='search' type='text' />
      <button onClick={toggle} id='toggle'>
        Hello World
      </button>
      {visible && <h1 id='hello'>HELLO WORLD!!!</h1>}
    </div>
  );
}

export default HelloWorld;
