import { useEffect, useState } from 'react';
// import '../App.css';

function MainPage() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);

  return (
    <div className='App' data-testid='main-page'>
      <h2>Main Page</h2>
      {data && (
        <div style={{ color: 'red' }} data-testid='async-text'>
          My async text line
        </div>
      )}
      <h1 className='App-header'>Hello World!</h1>
      <h1 className='App-header' data-testid='value-elm'>
        {inputValue}
      </h1>
      <div>
        <input
          type='text'
          placeholder='input value...'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button data-testid='toggle-btn' onClick={onClick}>
          Click me
        </button>
      </div>
      {toggle === true && (
        <div data-testid='toggle-elm' className='App-header'>
          Toggle
        </div>
      )}
    </div>
  );
}

export default MainPage;
