import React, { useState } from 'react';

function ColorToggleButton() {
  const [color, setColor] = useState('blue');

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <button
      onClick={toggleColor}
      style={{ backgroundColor: color, color: 'white', padding: '10px 20px', fontSize: '16px' }}
    >
      Color: {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Toggle Button Color Example</h1>
      <ColorToggleButton />
    </div>
  );
}

export default App;